import React from 'react'
import { CurrentWeatherCardProps } from '../type'
import { getWeatherIconUrl } from '../../../shared/utils/getIcon'

export const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({
  temperature,
  description,
  iconCode,
  humidity,
  windSpeed,
  visibility,
}) => {
  const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const iconUrl = getWeatherIconUrl(iconCode) // defaults to @2x

  return (
    <div className="bg-white rounded-xl shadow-md px-4 py-6 sm:px-6 max-w-xs sm:max-w-sm md:max-w-md mx-auto text-center border border-gray-200 space-y-4">
      {/* Ngày */}
      <p className="text-xs sm:text-sm text-gray-500 text-left">{formattedDate}</p>

      {/* Thông tin chính: icon + temp */}
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <img src={iconUrl} alt={description} className="w-16 h-16 sm:w-20 sm:h-20" />
        <div>
          <p className="text-3xl sm:text-4xl font-bold">{Math.round(temperature)}°C</p>
          <p className="capitalize text-gray-700 text-sm sm:text-base">{description}</p>
        </div>
      </div>

      {/* Thông tin phụ */}
      <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm text-gray-600 mt-4">
        <div className="flex flex-col items-center">
          <p className="font-medium">Humidity</p>
          <p>{humidity} %</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-medium">Winds</p>
          <p>↓ {windSpeed.toFixed(2)} m/s</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-medium">Visibility</p>
          <p>{(visibility / 1000).toFixed(1)} km</p>
        </div>
      </div>
    </div>
  )
}
