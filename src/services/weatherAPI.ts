import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org'

export const fetchCurrentWeather = (lat: number, lon: number) => {
  return axios.get(`${BASE_URL}/data/2.5/weather`, {
    params: {
      lat,
      lon,
      appid: process.env.REACT_APP_WEATHER_API_KEY,
      units: 'metric',
    },
  })
}

export const fetchForecast = (lat: number, lon: number) => {
  return axios.get(`${BASE_URL}/data/2.5/forecast`, {
    params: {
      lat,
      lon,
      appid: process.env.REACT_APP_WEATHER_API_KEY,
      units: 'metric',
    },
  })
}

export const fetchLocationByCity = (city: string) => {
  return axios.get(`${BASE_URL}/geo/1.0/direct`, {
    params: {
      q: city,
      limit: 1,
      appid: process.env.REACT_APP_WEATHER_API_KEY,
    },
  })
}
