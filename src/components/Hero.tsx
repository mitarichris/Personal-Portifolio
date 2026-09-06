import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiMail, FiCopy, FiBriefcase, FiCpu, FiMapPin } from 'react-icons/fi'

const roles = [
  'Full-Stack Web Engineering',
  'Software Engineering',
  'AI-Powered Solutions',
  'Database & Backend Systems',
  'UI/UX & Brand Design',
]

const email = 'mitarimurenzichris@gmail.com'

const marqueeItems = [
  'React.js',
  'TypeScript',
  'JavaScript (ES6+)',
  'Node.js',
  'Express.js',
  'Laravel',
  'PHP',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'MySQL',
  'MongoDB',
  'PostgreSQL',
  'Git & GitHub',
  'AWS',
  'AI & Machine Learning',
  'Figma',
  'REST API',
]

const stats = [
  { label: 'Years of Experience', value: '3+', suffix: 'Years' },
  { label: 'Software & Web Apps', value: '15+', suffix: 'Shipped' },
  { label: 'Professional Certifications', value: '25+', suffix: 'Earned' },
  { label: 'Solutions Delivered', value: '10+', suffix: 'Worldwide' },
]

function useKigaliClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Africa/Kigali',
          hour: '2-digit',
          minute: '2-digit',
        })
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function RotatingRole() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3.5 py-2 text-sm text-slate-300">
      <svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      <span className="text-slate-400">Specializing in:</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="font-medium text-teal-300"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const time = useKigaliClock()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[140px] bg-teal-500/10 animate-pulse-slow pointer-events-none" />
      <div className="absolute top-20 -right-32 w-[400px] h-[400px] rounded-full blur-[150px] bg-cyan-500/10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap gap-2.5 mb-8">
          <span className="framer-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-teal-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            Available for Freelance & Full-Time
          </span>
          <span className="framer-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-slate-300">
            <FiMapPin className="w-3.5 h-3.5 text-teal-400" />
            Kigali, Rwanda
            {time && <span className="text-slate-500">• {time} CAT</span>}
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <RotatingRole />

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
            >
              Building <span className="gradient-text">Software, Web & AI</span> Solutions.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed"
            >
              I'm Mitari Murenzi Chris — a full-stack developer and AI enthusiast turning ideas into
              modern, scalable, and user-friendly applications. I ship business systems, web
              platforms, and AI-powered tools that drive real digital transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-400 text-slate-950 font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Explore Code Works <FiArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-bold text-sm hover:opacity-90 transition-opacity"
              >
                What I Offer <FiArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={copyEmail}
                className="framer-glass-pill inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-slate-200 hover:border-teal-500/40 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <FiCopy className="w-4 h-4 text-teal-400" /> Email Copied!
                  </>
                ) : (
                  <>
                    <FiMail className="w-4 h-4 text-teal-400" /> Copy Email
                  </>
                )}
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 relative"
          >
            <div className="max-w-[340px] mx-auto">
              <div className="framer-card rounded-[32px] p-4 bg-gradient-to-b from-[#121826] to-[#0a0e17]">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#121826] to-[#0a0e17]">
                  <img
                    src="/profile.jpg"
                    alt="Mitari Murenzi Chris"
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 framer-glass-pill rounded-2xl px-4 py-3">
                    <p className="font-display font-bold text-white text-sm">Mitari Murenzi Chris</p>
                    <p className="flex items-center gap-1.5 text-[11px] text-slate-300 mt-0.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500" />
                      </span>
                      Full-Stack Developer & AI Enthusiast
                    </p>
                  </div>
                </div>

                <div className="p-2 pt-3 space-y-2.5">
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <FiBriefcase className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" /> Current Role
                    </span>
                    <span className="text-slate-200 font-medium">Open to Work</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <FiCpu className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" /> Focus
                    </span>
                    <span className="text-slate-200 font-medium text-right">Full-Stack, AI & Cloud</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="framer-card rounded-2xl p-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mb-2">
                {stat.label}
              </p>
              <p className="font-display text-3xl font-extrabold text-white">
                {stat.value}{' '}
                <span className="text-base font-medium text-teal-400">{stat.suffix}</span>
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 bg-[#0a0e17]/80 border-y border-white/5 overflow-hidden py-5">
        <div className="flex gap-8 whitespace-nowrap animate-marquee w-max">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-slate-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}