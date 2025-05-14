export interface ForecastItem {
  dt_txt: string
  main: {
    temp: number
    feels_like: number
  }
  weather: {
    description: string
    icon: string
  }[]
}

export interface ForecastData {
  list: ForecastItem[]
}

export interface ForecastProps {
  lat: number
  lon: number
}

export interface ForecastItemProps {
  item: ForecastItem
}

export interface ForecastState {
  data: ForecastData | null
  loading: boolean
  error: string | null
}

export interface ForecastListProps {
  data: [string, ForecastItem[]][]
}
