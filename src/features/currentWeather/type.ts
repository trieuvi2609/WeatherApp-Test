export interface CurrentWeatherData {
  name: string
  weather: { icon: string; description: string }[]
  main: {
    temp: number
    humidity: number
  }
  wind: {
    speed: number
    deg: number
  }
  visibility: number
  dt: number
}

export interface CurrentWeatherCardProps {
  temperature: number
  description: string
  iconCode: string
  humidity: number
  windSpeed: number
  visibility: number
}

export interface WeatherState {
  data: any
  loading: boolean
  error: string | null
}

export interface CurrentWeatherProps {
  lat: number
  lon: number
}
