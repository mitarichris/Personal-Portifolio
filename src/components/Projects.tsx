import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiX, FiZap, FiExternalLink } from 'react-icons/fi'

type Project = {
  title: string
  category: string
  year: string
  readTime: string
  description: string
  tech: string[]
  live?: string
  image: string
  caseStudy: {
    challenge: string
    solution: string
    impact: string
  }
}

const projects: Project[] = [
  {
    title: 'Store Management System',
    category: 'Business Systems',
    year: '2024',
    readTime: '5 min read',
    description:
      'Comprehensive store management with inventory tracking, sales processing, customer management, and reporting dashboards.',
    tech: ['Laravel', 'PHP', 'SQLite', 'Blade', 'Vite'],
    live: 'https://store-management-system.infinityfreeapp.com/login',
    image: '/store-system.jpg',
    caseStudy: {
      challenge:
        'Inventory, sales, and customer records were scattered across spreadsheets, making daily operations slow and error-prone.',
      solution:
        'Built a Laravel monolith with a clean Blade UI, role-based dashboards, POS-style sales, real-time stock tracking, and automated reporting.',
      impact:
        'Managers now have a single source of truth, cutting reconciliation time and improving day-to-day efficiency.',
    },
  },
  {
    title: 'Iga Hub',
    category: 'Web App',
    year: '2025',
    readTime: '4 min read',
    description:
      'School management portal for student records, classes, attendance, grades, and announcements — one unified platform for admins, teachers, and students.',
    tech: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://igahub.netlify.app',
    image: '/school-hub.jpg',
    caseStudy: {
      challenge:
        'Schools juggled multiple disconnected tools for rosters, grades, and attendance with no shared view.',
      solution:
        'Designed a responsive React front end with an Express + MongoDB API, role-based access, and a clear dashboard for every stakeholder.',
      impact:
        'Centralized the school workflow, improved communication, and gave staff a fast, reliable record system.',
    },
  },
  {
    title: 'Online Buying Ticket Platform',
    category: 'Web App',
    year: '2025',
    readTime: '4 min read',
    description:
      'Ticket booking platform where users browse events, register, authenticate, and purchase tickets online.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    live: 'https://online-buying-ticket-platform.vercel.app',
    image: '/ticket-platform.jpg',
    caseStudy: {
      challenge:
        'Event organizers needed a simple, secure way for attendees to discover events and book tickets without manual handling.',
      solution:
        'Developed a Next.js app with Prisma on Neon PostgreSQL, authentication, event browsing, and checkout flows.',
      impact:
        'End-to-end digital booking reduced manual coordination and gave organizers real-time visibility.',
    },
  },
  {
    title: 'MyRent',
    category: 'Business Systems',
    year: '2026',
    readTime: '3 min read',
    description:
      'Bilingual rental marketplace connecting renters with verified residential and commercial spaces — search, filters, favorites, and instant contact.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'RWF pricing'],
    live: 'https://my-shop-platform-nine.vercel.app/',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    caseStudy: {
      challenge:
        'Finding reliable rental spaces meant chasing scattered listings and agents, with no way to compare options in one place.',
      solution:
        'Built a responsive React + Vite app with categorized property listings, image galleries, search and filters, favorite tracking, and direct call/WhatsApp contact.',
      impact:
        'Renters can discover, compare, and contact owners instantly in one interface — fully responsive across mobile, tablet, and desktop.',
    },
  },
]

const filters = ['All', 'Web App', 'Business Systems']

export default function Projects() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute -left-32 top-40 w-[400px] h-[400px] rounded-full blur-[150px] bg-teal-500/10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="framer-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-teal-300">
              <FiZap className="w-3.5 h-3.5" /> Software & Web Apps ({projects.length})
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Featured Case Studies & Software.
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl">
              Real products I've engineered end-to-end — from databases and APIs to polished,
              responsive interfaces.
            </p>
          </div>
        </div>

        <div className="framer-glass-pill inline-flex items-center gap-1 p-1.5 rounded-full mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                active === f ? 'text-slate-950' : 'text-slate-300 hover:text-teal-300'
              }`}
            >
              {active === f && (
                <motion.span
                  layoutId="activeProjectTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-400"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="framer-card rounded-[28px] p-4 bg-[#0e131f] group"
              >
                <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-teal-500/90 backdrop-blur text-slate-950 text-[11px] font-mono uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="absolute top-3 right-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur text-slate-300 text-[11px] font-mono">
                      {project.readTime}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur text-slate-300 text-[11px] font-mono">
                      {project.year}
                    </span>
                  </span>
                  <button
                    onClick={() => setSelected(project)}
                    aria-label={`Open case study for ${project.title}`}
                    className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-400 text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <FiArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-3">
                  <h3 className="mt-3 font-display font-bold text-lg text-white group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-teal-300 text-[11px] font-mono uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-5">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-400 hover:text-teal-300 transition-colors flex items-center gap-1.5"
                      >
                        <FiExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                    <button
                      onClick={() => setSelected(project)}
                      className="px-4 py-2 rounded-full border border-white/10 text-sm text-slate-200 hover:border-teal-400 hover:text-teal-300 transition-colors cursor-pointer"
                    >
                      Case Details
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="framer-card rounded-[32px] p-6 sm:p-8 w-full max-w-lg bg-[#0e131f] max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-[11px] font-mono uppercase tracking-wider">
                    {selected.category}
                  </span>
                  <h3 className="mt-3 font-display font-bold text-2xl text-white">{selected.title}</h3>
                  <p className="mt-1 text-xs text-slate-400">{selected.year} • {selected.readTime}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="framer-glass-pill p-2 rounded-full text-slate-300 hover:text-white cursor-pointer"
                  aria-label="Close"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>

              <img
                src={selected.image}
                alt={selected.title}
                className="w-full aspect-video object-cover rounded-2xl mb-6"
              />

              <div className="space-y-5">
                <CaseStudy block="The Challenge" text={selected.caseStudy.challenge} />
                <CaseStudy block="The Solution" text={selected.caseStudy.solution} />
                <CaseStudy block="The Impact" text={selected.caseStudy.impact} />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {selected.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-white/5 text-teal-300 text-[11px] font-mono uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {selected.live && (
                <a
                  href={selected.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-400 text-slate-950 font-bold text-sm"
                >
                  <FiExternalLink className="w-4 h-4" /> Launch Live Demo
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function CaseStudy({ block, text }: { block: string; text: string }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-wider text-teal-400 mb-1.5">{block}</h4>
      <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
    </div>
  )
}