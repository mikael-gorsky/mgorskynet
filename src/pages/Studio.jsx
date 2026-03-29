import { Studio as SanityStudio } from 'sanity'
import config from '../../sanity.config'

export default function Studio() {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
      <SanityStudio config={config} />
    </div>
  )
}
