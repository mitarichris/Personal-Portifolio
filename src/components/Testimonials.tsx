import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiStar, FiAward } from 'react-icons/fi'

const testimonials = [
  {
    quote:
      'Chris delivered a clean, reliable system that our team actually enjoys using. Communication was clear and deadlines were always respected.',
    name: 'Business Owner',
    company: 'Retail & Store Management',
  },
  {
    quote:
      'We needed a platform connecting staff, teachers, and students in one place. Chris turned a messy workflow into a simple, well-built product.',
    name: 'Program Manager',
    company: 'Education Organization',
  },
  {
    quote:
      'From the first call to launch, everything was structured and thoughtful. The final app looks polished and performs fast on every device.',
    name: 'Founder',
    company: 'Startup',
  },
  {
    quote:
      'Chris built the MyRent platform exactly the way I wanted — fast, fully responsive, and available in my language. Now customers can reach me directly from the site. Communication was smooth from start to finish and he understood exactly what my property business needed.',
    name: 'Janvier Murenzi',
    company: 'MyRent · Property Owner',
  },
]

function TestimonialCard({ t, i }: { t: (typeof testimonials)[number]; i: number }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = t.quote.length > 120

  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: i * 0.1 }}
      whileHover={{ y: -4 }}
      className="framer-card rounded-[24px] p-6 bg-[#0e131f] flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, s) => (
            <FiStar key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
          ))}
        </div>
        <span className="px-2.5 py-1 rounded-full bg-white/5 text-slate-400 text-[10px] font-mono uppercase tracking-wider">
          Pop-up Review
        </span>
      </div>

      <blockquote className={`text-sm text-slate-300 leading-relaxed italic ${expanded ? '' : 'line-clamp-3'}`}>
        "{t.quote}"
      </blockquote>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="self-start mt-2 text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors cursor-pointer"
        >
          {expanded ? 'Read less' : 'Read more…'}
        </button>
      )}

      <figcaption className="mt-6 flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 ring-2 ring-teal-500/30 flex items-center justify-center text-slate-950 font-bold text-sm">
          {t.name.charAt(0)}
        </span>
        <div>
          <p className="font-display font-bold text-sm text-white">{t.name}</p>
          <p className="text-xs text-slate-400">{t.company}</p>
        </div>
      </figcaption>
    </motion.figure>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute -left-32 top-20 w-[400px] h-[400px] rounded-full blur-[150px] bg-cyan-500/10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="framer-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-teal-300">
              <FiAward className="w-3.5 h-3.5" /> Endorsements & Feedback
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Trusted by Teams & Partners
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl">
              What the people I've worked with have to say.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}