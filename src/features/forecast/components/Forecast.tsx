import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { ForecastProps } from '../type'
import { AppDispatch } from '../../../store/store'
import { useEffect } from 'react'
import { getForecast } from '../forecastSlice'
import ForecastList from './ForecastList'
import { groupForecastByDay } from '../utils/function'
import Spinner from '../../../shared/components/ui/Spinner'

const Forecast = ({ lat, lon }: ForecastProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, error } = useAppSelector((state: any) => state.forecast)

  useEffect(() => {
    dispatch(getForecast({ lat, lon }))
  }, [lat, lon, dispatch])

  if (loading)
    return (
      <div className="flex justify-center items-center py-6 text-sm sm:text-base text-gray-500">
        <Spinner />
      </div>
    )

  if (error)
    return <p className="text-center py-6 text-red-500 text-sm sm:text-base">Error: {error}</p>

  if (!data) return null

  const groupedForecast = groupForecastByDay(data.list)

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-4">
      <p className="mb-3 text-gray-600 text-base sm:text-lg font-semibold text-center sm:text-left">
        5-Day Forecast (3-hour intervals)
      </p>
      <ForecastList data={groupedForecast} />
    </div>
  )
}

export default Forecast
