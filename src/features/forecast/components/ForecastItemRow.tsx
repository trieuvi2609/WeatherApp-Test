import React from 'react'
import { ForecastItemProps } from '../type'
import { get } from 'http'
import { getWeatherIconUrl } from '../../../shared/utils/getIcon'

const ForecastItemRow: React.FC<ForecastItemProps> = ({ item }) => {
  const time = new Date(item.dt_txt).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  const iconUrl = getWeatherIconUrl(item.weather[0].icon)

  return (
    <div className="flex items-center justify-between gap-2 py-1 sm:py-1.5">
      {/* Time */}
      <p className="w-14 text-gray-600 text-sm sm:text-base font-semibold text-left shrink-0">
        {time}
      </p>

      {/* Icon + Temp */}
      <div className="flex items-center gap-2 flex-1 min-w-0 justify-center">
        <img
          src={iconUrl}
          alt={item.weather[0].description}
          className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
        />
        <p className="text-gray-500 text-sm sm:text-base font-medium truncate">
          {item.main.temp.toFixed(1)} / {item.main.feels_like.toFixed(1)}°C
        </p>
      </div>

      {/* Description */}
      <p className="w-28 sm:w-32 text-right text-gray-500 text-sm sm:text-base truncate capitalize">
        {item.weather[0].description}
      </p>
    </div>
  )
}

export default ForecastItemRow
