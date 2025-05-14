import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchForecast } from '../../services/weatherAPI'
import { ForecastState } from './type'

const initialState: ForecastState = {
  data: null,
  loading: false,
  error: null,
}

export const getForecast = createAsyncThunk(
  'forecast/getForecast',
  async ({ lat, lon }: { lat: number; lon: number }, thunkAPI) => {
    try {
      const response = await fetchForecast(lat, lon)
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getForecast.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getForecast.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(getForecast.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default forecastSlice.reducer
