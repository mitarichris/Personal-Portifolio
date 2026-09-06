import { FiArrowUp, FiLinkedin, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi'

const socials = [
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mitari-murenzi-chris-358526324',
  },
  {
    icon: FiTwitter,
    label: 'X / Twitter',
    href: 'https://x.com/Mitarichris23',
  },
  {
    icon: FiInstagram,
    label: 'Instagram',
    href: 'https://instagram.com/mitarichris',
  },
  {
    icon: FiMail,
    label: 'Email',
    href: 'mailto:mitarimurenzichris@gmail.com',
  },
]

export default function Footer() {
  return (
    <footer className="py-12 bg-[#030508] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-extrabold text-white">
            MITARI<span className="text-teal-400">.DEV</span>
          </p>
          <p className="mt-1 text-xs text-slate-500">
            © {new Date().getFullYear()} Mitari Murenzi Chris. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="framer-glass-pill flex items-center gap-2 px-3.5 py-2 text-sm text-slate-300 hover:border-teal-500/40 hover:text-teal-300 transition-colors"
            >
              <social.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{social.label}</span>
            </a>
          ))}

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="framer-glass-pill p-2.5 rounded-full text-slate-300 hover:text-teal-300 hover:border-teal-500/40 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <FiArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}