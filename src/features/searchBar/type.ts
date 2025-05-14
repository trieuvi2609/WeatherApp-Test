export interface SearchInputProps {
  city: string
  onChange: (val: string) => void
  onSearch: () => void
  error?: string
}

export interface SearchHistoryProps {
  history: string[]
  onSearch: (city: string) => void
  onDelete: (city: string) => void
}
