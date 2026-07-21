import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { MenuIcon, CloseIcon, FlameIcon } from './Icons'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/clients', label: 'Clients' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-ink-100">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="w-11 h-11 rounded-full bg-primary-600 flex items-center justify-center">
            <FlameIcon className="w-6 h-6 text-white" />
          </span>
          <span className="leading-tight">
            <span className="block font-heading font-bold text-lg text-ink-900">VIRAJ <span className="text-primary-600">FIRE</span></span>
            <span className="block text-[11px] tracking-wide text-ink-400 uppercase">Fire Protection Engineers</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  isActive ? 'bg-primary-50 text-primary-600' : 'text-ink-600 hover:text-primary-600'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-3 px-5 py-2.5 rounded-full bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        <button className="lg:hidden p-2 text-ink-800" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-ink-100 bg-white px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg text-base font-semibold ${
                  isActive ? 'bg-primary-50 text-primary-600' : 'text-ink-700'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}