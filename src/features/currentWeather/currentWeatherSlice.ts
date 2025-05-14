// src/store/weatherSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchCurrentWeather } from '../../services/weatherAPI'
import { WeatherState } from './type'

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
}

// Thunk action
export const getCurrentWeather = createAsyncThunk(
  'weather/getCurrentWeather',
  async ({ lat, lon }: { lat: number; lon: number }, thunkAPI) => {
    try {
      const response = await fetchCurrentWeather(lat, lon)
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Slice
const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentWeather.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getCurrentWeather.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(getCurrentWeather.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default currentWeatherSlice.reducer
