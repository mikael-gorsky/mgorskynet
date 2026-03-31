import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AIPravda from './pages/AIPravda'
import AIChroniclesDirectory from './pages/AIChroniclesDirectory'
import AIChroniclesBook from './pages/AIChroniclesBook'
import Curriculum from './pages/Curriculum'
import ProBono from './pages/ProBono'
import AcademicResearch from './pages/AcademicResearch'
import Bio from './pages/Bio'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/theaipravda" element={<AIPravda />} />
        <Route path="/aichronicles/directory" element={<AIChroniclesDirectory />} />
        <Route path="/aichronicles/book" element={<AIChroniclesBook />} />
        <Route path="/teaching/:slug" element={<Curriculum />} />
        <Route path="/probono/:slug" element={<ProBono />} />
        <Route path="/research/academic" element={<AcademicResearch />} />
        <Route path="/bio" element={<Bio />} />
      </Route>
    </Routes>
  )
}

export default App
