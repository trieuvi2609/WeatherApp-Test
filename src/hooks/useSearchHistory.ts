import { useState, useEffect } from 'react'
import { encrypt, decrypt } from '../shared/utils/secureStorage'

export const useSearchHistory = () => {
  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(process.env.REACT_APP_HISTORY_KEY as string)
    if (stored) {
      const decrypted = decrypt(stored)
      if (decrypted) {
        setHistory(JSON.parse(decrypted))
      }
    }
  }, [])

  const addToHistory = (city: string) => {
    const newHistory = [city, ...history.filter((h) => h !== city)].slice(0, 5)
    const encrypted = encrypt(JSON.stringify(newHistory))
    localStorage.setItem(process.env.REACT_APP_HISTORY_KEY as string, encrypted)
    setHistory(newHistory)
  }

  const removeFromHistory = (city: string) => {
    const updated = history.filter((h) => h !== city)
    const encrypted = encrypt(JSON.stringify(updated))
    localStorage.setItem(process.env.REACT_APP_HISTORY_KEY as string, encrypted)
    setHistory(updated)
  }

  return { history, addToHistory, removeFromHistory }
}
