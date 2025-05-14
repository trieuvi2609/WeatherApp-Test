import React from 'react'
import { SearchInputProps } from './type'

const SearchInput: React.FC<SearchInputProps> = ({ city, onChange, onSearch, error }) => {
  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={city}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search country or city here..."
          className="w-full sm:flex-1 border border-gray-300 rounded px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={onSearch}
          className="px-4 py-2 bg-blue-500 text-white text-sm sm:text-base rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 text-sm sm:text-base">{error}</p>}
    </div>
  )
}

export default SearchInput
