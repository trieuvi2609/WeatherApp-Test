import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCurrentWeather } from '../currentWeatherSlice'
import { AppDispatch } from '../../../store/store'
import { CurrentWeatherCard } from './WeatherCard'
import { useAppSelector } from '../../../hooks/useAppSelector'
import Spinner from '../../../shared/components/ui/Spinner'
import { CurrentWeatherProps } from '../type'

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ lat, lon }) => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, error } = useAppSelector((state: any) => state.currentWeather)
  useEffect(() => {
    dispatch(getCurrentWeather({ lat, lon }))
  }, [lat, lon, dispatch])

  if (loading) return <Spinner />
  if (error) return <p className="text-center text-red-500">{error}</p>
  if (!data) return null

  return (
    <CurrentWeatherCard
      temperature={data.main.temp}
      description={data.weather[0].description}
      iconCode={data.weather[0].icon}
      humidity={data.main.humidity}
      windSpeed={data.wind.speed}
      visibility={data.visibility}
    />
  )
}

export default CurrentWeather
