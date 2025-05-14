import React from 'react'
import { ForecastListProps } from '../type'
import ForecastItemRow from './ForecastItemRow'

const ForecastList: React.FC<ForecastListProps> = ({ data }) => {
  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6 space-y-6 text-center sm:text-left border border-gray-100">
      {data.map(([date, items], index) => {
        const label =
          index === 0
            ? 'Today'
            : new Date(date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                timeZone: 'Asia/Singapore',
              })

        return (
          <div key={date}>
            <p className="text-sm sm:text-base font-medium text-gray-600 mb-2">{label}</p>
            <div className="space-y-1">
              {items.map((item) => (
                <ForecastItemRow key={item.dt_txt} item={item} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ForecastList
