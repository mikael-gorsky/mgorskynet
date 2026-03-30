import { Link } from 'react-router-dom'

export function Card({ variant = 'card-v1', className = '', children, ...props }) {
  return (
    <div className="card-wrap">
      <div className={`card ${variant} ${className}`} {...props}>
        {children}
      </div>
    </div>
  )
}

export function CardLink({ to, href, variant = 'card-v1', className = '', children, ...props }) {
  const inner = (
    <div className="card-wrap">
      <div className={`card ${variant} ${className}`}>
        {children}
      </div>
    </div>
  )

  if (to) {
    return <Link to={to} className="block" {...props}>{inner}</Link>
  }
  return <a href={href} className="block" {...props}>{inner}</a>
}
