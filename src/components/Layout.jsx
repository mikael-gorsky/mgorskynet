import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import BackgroundCanvas from './BackgroundCanvas'

export default function Layout() {
  return (
    <>
      <BackgroundCanvas />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
