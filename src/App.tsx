import './index.css'
import AppRouter from './routes/AppRouter'

const App = () => {
  return (
    <div className="app-container min-h-screen flex flex-col items-center p-4 bg-gray-200">
      <h1 className="text-center text-4xl font-bold mb-6">Weather App</h1>
      <div className="w-full max-w-2xl space-y-6">
        <AppRouter />
      </div>
    </div>
  )
}

export default App
