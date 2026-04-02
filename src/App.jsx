import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './lib/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import AIPravda from './pages/AIPravda'
import AIChronicles from './pages/AIChronicles'
import AIChroniclesRolodex from './pages/AIChroniclesRolodex'
import AIChroniclesBook from './pages/AIChroniclesBook'
import AIChroniclesDigest from './pages/AIChroniclesDigest'
import Curriculum from './pages/Curriculum'
import ProBono from './pages/ProBono'
import AcademicResearch from './pages/AcademicResearch'
import Bio from './pages/Bio'
import Terms from './pages/Terms'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/theaipravda" element={<AIPravda />} />
          <Route path="/aichronicles" element={<AIChronicles />} />
          <Route path="/aichronicles/rolodex" element={<AIChroniclesRolodex />} />
          <Route path="/aichronicles/book" element={<AIChroniclesBook />} />
          <Route path="/aichronicles/digest" element={<AIChroniclesDigest />} />
          <Route path="/teaching/:slug" element={<Curriculum />} />
          <Route path="/probono/:slug" element={<ProBono />} />
          <Route path="/research/academic" element={<AcademicResearch />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
