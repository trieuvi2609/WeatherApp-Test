import { ForecastItem } from '../type'

export const groupForecastByDay = (list: ForecastItem[]) => {
  const groups: { [date: string]: ForecastItem[] } = {}

  list.forEach((item) => {
    const date = item.dt_txt.split(' ')[0]
    if (!groups[date]) groups[date] = []
    groups[date].push(item)
  })

  return Object.entries(groups)
}
