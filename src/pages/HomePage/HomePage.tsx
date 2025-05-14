import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CurrentWeather from '../../features/currentWeather/components/CurrentWeather'
import Forecast from '../../features/forecast/components/Forecast'

const DEFAULT_COORDS = { lat: 10, lon: 100 }

const HomePage = () => {
  const location = useLocation()
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null)

  useEffect(() => {
    const state = location.state as { lat?: number; lon?: number } | null

    if (state?.lat && state?.lon) {
      setCoords({ lat: state.lat, lon: state.lon })
    } else {
      setCoords(DEFAULT_COORDS)
    }
  }, [])

  if (!coords) return null

  return (
    <div className="flex flex-col items-center justify-center">
      <CurrentWeather lat={coords.lat} lon={coords.lon} />
      <Forecast lat={coords.lat} lon={coords.lon} />
    </div>
  )
}

export default HomePage
