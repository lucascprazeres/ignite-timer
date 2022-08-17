import { Route, Routes } from 'react-router-dom'
import { Home, History } from './pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}
