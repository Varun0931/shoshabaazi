import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <Link className="nav-brand" to="/">
          <span className="wordmark">Shoshabaazi</span>
          <span className="hindi">शोशाबाज़ी</span>
        </Link>
        <ul className="nav-links">
          <li><a href="#events" className="active">Events</a></li>
          <li><a href="#about">Community</a></li>
          <li><a href="#">Stories</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Merch</a></li>
        </ul>
        <div className="nav-right">
          <span className="nav-city">Delhi NCR</span>
          <Link className="nav-cta" to="/register">Join the Tamasha</Link>
        </div>
      </div>
    </nav>
  )
}