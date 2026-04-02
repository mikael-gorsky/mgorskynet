import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import BackgroundCanvas from './BackgroundCanvas'
import { useTheme } from '../lib/ThemeContext'

export default function Layout() {
  const { theme } = useTheme()
  const showCanvas = theme === 'black-orange'

  return (
    <>
      {showCanvas && <BackgroundCanvas />}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
