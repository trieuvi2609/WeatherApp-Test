# 🌤 Weather Forecast App

A responsive weather forecast application that allows users to search for a city and view current weather conditions along with a detailed 5-day forecast (in 3-hour intervals).

---

## 🚀 Features

- 🌍 Search weather by city (using OpenWeather Geocoding API)
- 🌡 View current weather: temperature, humidity, wind speed, visibility
- 📆 5-day forecast grouped by date and time
- 📱 Fully responsive UI for mobile, tablet, and desktop
- 🕵️‍♂️ Encrypted local search history using CryptoJS
- 🧠 Managed global state with Redux Toolkit and Thunks

---

## 🧰 Tech Stack

- ⚛️ React + TypeScript (CRA)
- 🧭 Redux Toolkit + redux-thunk
- 🎨 Tailwind CSS (utility-first styling)
- 🌦 OpenWeatherMap API
- 🔐 CryptoJS (for localStorage encryption)
- 🧹 ESLint + Prettier + strict typing rules

---

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/weather-app.git
cd weather-app

# Install dependencies
npm install

# Create your environment file
cp .env.example .env
# Add your API key inside `.env`
