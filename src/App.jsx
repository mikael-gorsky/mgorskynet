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
import ASE26Overview from './pages/ase26/Overview'
import ASE26CurriculumIndex from './pages/ase26/CurriculumIndex'
import ASE26ModuleDetail from './pages/ase26/ModuleDetail'
import ASE26ConceptualModel from './pages/ase26/ConceptualModel'
import ASE26Outcomes from './pages/ase26/Outcomes'
import ASE26Assessment from './pages/ase26/Assessment'
import ASE26Tooling from './pages/ase26/Tooling'
import ASE26Glossary from './pages/ase26/Glossary'

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
          <Route path="/ase26" element={<ASE26Overview />} />
          <Route path="/ase26/curriculum" element={<ASE26CurriculumIndex />} />
          <Route path="/ase26/module/:id" element={<ASE26ModuleDetail />} />
          <Route path="/ase26/conceptual-model" element={<ASE26ConceptualModel />} />
          <Route path="/ase26/outcomes" element={<ASE26Outcomes />} />
          <Route path="/ase26/assessment" element={<ASE26Assessment />} />
          <Route path="/ase26/tooling" element={<ASE26Tooling />} />
          <Route path="/ase26/glossary" element={<ASE26Glossary />} />
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
