import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AIPravda from './pages/AIPravda'
import AIChroniclesDirectory from './pages/AIChroniclesDirectory'
import AIChroniclesBook from './pages/AIChroniclesBook'
import Curriculum from './pages/Curriculum'

const Studio = lazy(() => import('./pages/Studio'))

function App() {
  return (
    <Routes>
      <Route
        path="/studio/*"
        element={
          <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a1d21', color: '#e0e6f1' }}>Loading Studio...</div>}>
            <Studio />
          </Suspense>
        }
      />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/theaipravda" element={<AIPravda />} />
        <Route path="/aichronicles/directory" element={<AIChroniclesDirectory />} />
        <Route path="/aichronicles/book" element={<AIChroniclesBook />} />
        <Route path="/teaching/:slug" element={<Curriculum />} />
      </Route>
    </Routes>
  )
}

export default App
