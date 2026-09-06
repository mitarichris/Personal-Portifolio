import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Process', href: '#process' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > last && y > 80)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 pb-2 transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        <a href="#hero" className="framer-glass-pill flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-slate-950 font-bold text-sm">
            M
          </span>
          <span className="leading-tight">
            <span className="block font-display font-extrabold text-sm tracking-tight text-white">
              MITARI<span className="text-teal-400">.</span>
            </span>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500">
              Software Studio
            </span>
          </span>
        </a>

        <nav className="hidden md:block">
          <ul className="framer-glass-pill flex items-center gap-1 rounded-full px-1.5 py-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-slate-300 hover:text-teal-400 transition-colors rounded-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden lg:flex framer-glass-pill items-center gap-2 rounded-full px-3 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            <span className="text-xs text-slate-300">Available for Hire</span>
          </span>

          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-400 text-slate-950 text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Get in Touch <FiArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden framer-glass-pill p-2.5 rounded-full text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mt-3 framer-glass rounded-3xl p-4"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm text-slate-300 hover:text-teal-400 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-400 text-slate-950 text-sm font-bold"
            >
              Get in Touch <FiArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}