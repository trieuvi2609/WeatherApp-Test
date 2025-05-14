import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Spinner from '../shared/components/ui/Spinner'

const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const SearchPage = lazy(() => import('../pages/Search/SearchPage'))

const AppRouter: React.FC = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default AppRouter
