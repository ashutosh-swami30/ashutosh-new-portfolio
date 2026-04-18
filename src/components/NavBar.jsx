import { useState } from 'react'

const navLinks = [
  { href: '#about',    label: 'About'      },
  { href: '#tech',     label: 'Tech Stack' },
  { href: '#projects', label: 'Projects'   },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        <a href="#" className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          AS
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-8 text-lg font-medium text-[#aaaaaa]">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setOpen(prev => !prev)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-[#0a0a0a]/95 border-b border-[#1a1a1a] px-4 py-3 space-y-3 text-[#aaaaaa]">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="block hover:text-white transition-colors" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}