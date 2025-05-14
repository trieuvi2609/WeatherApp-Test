import { configureStore } from '@reduxjs/toolkit'
import currentWeatherReducer from '../features/currentWeather/currentWeatherSlice'
import forecastReducer from '../features/forecast/forecastSlice'
import locationReducer from '../features/location/locationSlice'

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    forecast: forecastReducer,
    location: locationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
