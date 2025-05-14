import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
  history: string[]
  currentCity: string
  error: string | null
}

const loadHistory = (): string[] => {
  try {
    const data = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY as string)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const saveHistory = (history: string[]) => {
  localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_KEY as string, JSON.stringify(history))
}

const initialState: SearchState = {
  history: loadHistory(),
  currentCity: '',
  error: null,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.currentCity = action.payload
      state.error = null
      if (!state.history.includes(action.payload)) {
        state.history.unshift(action.payload)
        if (state.history.length > 5) state.history.pop()
        saveHistory(state.history)
      }
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
    clearHistory(state) {
      state.history = []
      saveHistory([])
    },
    deleteHistoryItem(state, action: PayloadAction<string>) {
      state.history = state.history.filter((item) => item !== action.payload)
      saveHistory(state.history)
    },
  },
})

export const { setCity, setError, clearHistory, deleteHistoryItem } = searchSlice.actions

export default searchSlice.reducer
