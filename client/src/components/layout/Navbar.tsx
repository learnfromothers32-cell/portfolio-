import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog',     href: '#blog'     },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setActive(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 max(2rem, calc(50% - 600px))',
        height: 60,
        background: scrolled ? 'rgba(6,6,8,0.92)' : 'rgba(6,6,8,0.6)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border2)' : 'var(--border)'}`,
        transition: 'all 0.3s',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        onClick={e => { e.preventDefault(); handleNav('#hero') }}
        style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: 13, color: 'var(--green)',
          textDecoration: 'none', letterSpacing: '0.05em',
          display: 'flex', alignItems: 'center', gap: 6,
        }}
      >
        <span style={{ color: 'var(--muted)' }}>{'> '}</span>asante.kelvin
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={e => { e.preventDefault(); handleNav(link.href) }}
            style={{
              color: active === link.href ? 'var(--green)' : 'var(--muted)',
              fontSize: 11, textDecoration: 'none',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              transition: 'color 0.2s', position: 'relative',
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://github.com/learnfromothers32-cell"
          target="_blank"
          rel="noreferrer"
          style={{
            background: 'transparent',
            border: '1px solid var(--green)',
            color: 'var(--green)', padding: '6px 16px',
            fontFamily: 'monospace', fontSize: 11,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            textDecoration: 'none', transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = 'var(--green)'
            ;(e.currentTarget as HTMLElement).style.color = 'var(--bg)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'transparent'
            ;(e.currentTarget as HTMLElement).style.color = 'var(--green)'
          }}
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  )
}
