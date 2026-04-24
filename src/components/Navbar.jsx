import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Navbar() {
  const { user, loading, logout } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const navigate = useNavigate()

  const firstName = user?.user_metadata?.full_name?.split(' ')[0] ?? user?.email

  const handleLogout = async () => {
    setDropdownOpen(false)
    await logout()
    navigate('/')
  }

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

          {!loading && (
            user ? (
              <div className="nav-user-wrap">
                <button
                  className="nav-cta nav-user-btn"
                  onClick={() => setDropdownOpen(o => !o)}
                  aria-expanded={dropdownOpen}
                >
                  <span className="nav-user-avatar">{firstName?.[0]?.toUpperCase()}</span>
                  Shoshabaaz {firstName}
                  <span className="nav-user-chevron">{dropdownOpen ? '▲' : '▼'}</span>
                </button>
                {dropdownOpen && (
                  <div className="nav-dropdown">
                    <button className="nav-dropdown-item" onClick={handleLogout}>
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link className="nav-cta" to="/register">Join the Tamasha</Link>
            )
          )}
        </div>
      </div>
    </nav>
  )
}