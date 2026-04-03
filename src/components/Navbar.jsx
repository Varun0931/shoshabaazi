import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const SCRIPTS = [
  { text: "Shoshabaazi", font: "font-heading",    color: "text-cream"        },
  { text: "शोशाबाज़ी",   font: "font-Playfair Display", color: "text-mag-gold"     },
  { text: "شوشہ بازی",   font: "font-urdu",       color: "text-mag-hotpink"  },
]

export default function Navbar() {
  const [open,    setOpen]    = useState(false)
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out first, then swap text, then fade in
      setVisible(false)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % SCRIPTS.length)
        setVisible(true)
      }, 300)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const links = [
    { to: "/",           label: "Home"       },
    { to: "/events",     label: "Events"     },
    { to: "/membership", label: "Membership" },
    { to: "/about",      label: "About"      },
  ]

  const active = SCRIPTS[current]

  return (
    <nav className="sticky top-0 z-50 bg-mag-charcoal border-b-2 border-mag-red px-6 py-4 flex justify-between items-center">

      <Link to="/" className="block min-w-[220px]">
        <span
          className={`
            brand-slide
            block whitespace-nowrap text-2xl tracking-tight
            ${active.font} ${active.color}
            transition-all duration-300
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
          `}>
          {active.text}
        </span>
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8 items-center">
        {links.map(l => (
          <Link key={l.to} to={l.to}
            className="font-label text-cream/60 hover:text-mag-red transition-colors text-xs">
            {l.label}
          </Link>
        ))}
        <Link to="/apply"
          className="bg-mag-red text-cream text-xs px-5 py-2 font-label hover:bg-mag-burnt transition">
          Join Now
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden text-cream" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-mag-charcoal border-b border-mag-red/30 flex flex-col p-6 gap-4 md:hidden">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
              className="font-label text-cream/70 text-sm hover:text-mag-red transition">
              {l.label}
            </Link>
          ))}
          <Link to="/apply" onClick={() => setOpen(false)}
            className="bg-mag-red text-cream text-xs px-5 py-3 font-label text-center hover:bg-mag-burnt transition">
            Join Now
          </Link>
        </div>
      )}
    </nav>
  )
}