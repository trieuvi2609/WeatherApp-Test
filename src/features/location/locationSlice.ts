import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '../../store/store'
import { fetchLocationByCity } from '../../services/weatherAPI'
import { LocationState } from './type'

const initialState: LocationState = {
  loading: false,
  error: null,
}

export const searchLocationByCity = createAsyncThunk<
  void,
  { city: string; onSuccess: (city: string, lat: number, lon: number) => void },
  { rejectValue: string; dispatch: AppDispatch }
>('location/searchCity', async ({ city, onSuccess }, { rejectWithValue }) => {
  try {
    const res = await fetchLocationByCity(city)
    const result = res.data[0]

    if (!result) return rejectWithValue('Invalid country or city')

    const { lat, lon, name } = result
    onSuccess(name, lat, lon)
  } catch (err) {
    return rejectWithValue('Invalid country or city')
  }
})

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchLocationByCity.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(searchLocationByCity.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(searchLocationByCity.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Unknown error'
      })
  },
})

export default locationSlice.reducer
