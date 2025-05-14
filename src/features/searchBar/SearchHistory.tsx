import React from 'react'
import { MagnifyingGlassIcon, TrashIcon } from '@heroicons/react/24/outline'
import { SearchHistoryProps } from './type'

const SearchHistory: React.FC<SearchHistoryProps> = ({ history, onSearch, onDelete }) => {
  if (history.length === 0) return null

  return (
    <div>
      <p className="text-sm sm:text-base font-semibold text-gray-600 mb-2">Search History</p>
      <div className="bg-white rounded-lg shadow-md p-4 space-y-3 sm:space-y-2">
        {history.map((item) => (
          <div
            key={item}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2 text-sm sm:text-base"
          >
            <span className="text-gray-700 break-words">{item}</span>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => onSearch(item)}
                title="Search again"
                className="text-blue-500 hover:text-blue-700"
              >
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => onDelete(item)}
                title="Delete"
                className="text-red-500 hover:text-red-700"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchHistory
