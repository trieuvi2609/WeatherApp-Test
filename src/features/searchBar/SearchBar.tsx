import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch } from '../../store/store'
import { searchLocationByCity } from '../location/locationSlice'
import { useSearchHistory } from '../../hooks/useSearchHistory'
import { MapPinIcon } from '@heroicons/react/24/outline'
import SearchInput from './SearchInput'
import SearchHistory from './SearchHistory'

const SearchBar: React.FC = () => {
  const [city, setCity] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { history, addToHistory, removeFromHistory } = useSearchHistory()

  const handleSearch = (cityName: string) => {
    if (!cityName.trim()) return

    dispatch(
      searchLocationByCity({
        city: cityName,
        onSuccess: (name, lat, lon) => {
          addToHistory(name)
          setError('')
          navigate('/', { state: { lat, lon } })
        },
      }),
    )
      .unwrap()
      .catch((err: string) => {
        setError(err || 'City not found')
      })

    setCity('')
  }

  return (
    <div className="p-4 w-full max-w-md mx-auto space-y-4">
      <div className="flex items-center gap-2 text-gray-600">
        <MapPinIcon className="w-4 h-4 text-gray-500" />
        <span className="font-medium text-sm">Singapore, SG</span>
      </div>

      <SearchInput
        city={city}
        onChange={setCity}
        onSearch={() => handleSearch(city)}
        error={error}
      />

      <SearchHistory history={history} onSearch={handleSearch} onDelete={removeFromHistory} />
    </div>
  )
}

export default SearchBar
