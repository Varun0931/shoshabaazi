import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { to: "/",           label: "Home" },
    { to: "/events",     label: "Events" },
    { to: "/membership", label: "Membership" },
    { to: "/about",      label: "About" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-gold/30 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-heading text-2xl text-ink tracking-tight">
        Shoshabaazi
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8">
        {links.map(l => (
          <Link key={l.to} to={l.to}
            className="font-body text-ink/70 hover:text-saffron transition-colors text-sm uppercase tracking-widest">
            {l.label}
          </Link>
        ))}
        <Link to="/apply"
          className="bg-saffron text-white text-sm px-5 py-2 rounded-full font-body hover:bg-orange-600 transition">
          Join Now
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-cream border-b border-gold/30 flex flex-col p-6 gap-4 md:hidden">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
              className="font-body text-ink text-lg">
              {l.label}
            </Link>
          ))}
          <Link to="/apply" onClick={() => setOpen(false)}
            className="bg-saffron text-white text-sm px-5 py-3 rounded-full text-center">
            Join Now
          </Link>
        </div>
      )}
    </nav>
  )
}