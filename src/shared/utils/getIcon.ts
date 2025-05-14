// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const getWeatherIconUrl = (iconCode: string, size: number = 2): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@${size}x.png`
}
