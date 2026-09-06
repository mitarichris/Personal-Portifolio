import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCode, FiSmartphone, FiDatabase, FiBriefcase, FiServer, FiCpu, FiArrowUpRight, FiCheck, FiX, FiZap } from 'react-icons/fi'

type Service = {
  icon: typeof FiCode
  title: string
  metric: string
  description: string
  tags: string[]
  deliverables: string[]
}

const services: Service[] = [
  {
    icon: FiCode,
    title: 'Full-Stack Web Development',
    metric: '<100ms TBT',
    description:
      'Design and development of modern, responsive, and scalable web applications for businesses, organizations, and individuals.',
    tags: ['React', 'Node.js', 'Laravel', 'Tailwind'],
    deliverables: [
      'Custom web applications from idea to launch',
      'Responsive, accessible frontend interfaces',
      'RESTful APIs and secure authentication',
      'Performance & SEO optimizations',
    ],
  },
  {
    icon: FiSmartphone,
    title: 'Mobile-Friendly Applications',
    metric: 'All Screens',
    description:
      'Building applications optimized for mobile, tablet, and desktop devices with a seamless user experience.',
    tags: ['PWA', 'Responsive', 'UX'],
    deliverables: [
      'Mobile-first responsive layouts',
      'Cross-device consistency & testing',
      'Fast load times on slow networks',
      'Touch-friendly interactions',
    ],
  },
  {
    icon: FiDatabase,
    title: 'Database Design & Management',
    metric: 'ERDs + DFDs',
    description:
      'Designing efficient database structures, ERDs, DFDs, and business information systems tailored to your needs.',
    tags: ['MySQL', 'MongoDB', 'PostgreSQL'],
    deliverables: [
      'Schema design & normalization',
      'ER diagrams and data-flow documents',
      'Query optimization & indexing',
      'Backup & security best practices',
    ],
  },
  {
    icon: FiBriefcase,
    title: 'Business Management Systems',
    metric: '6+ Domains',
    description:
      'Custom solutions including HR, Fleet, Vehicle Rental, Transport, School, and Inventory Management Systems.',
    tags: ['HR', 'Fleet', 'School', 'Inventory'],
    deliverables: [
      'Role-based admin dashboards',
      'Inventory & reporting modules',
      'Staff, transport & fleet workflows',
      'Tailored business logic & rules',
    ],
  },
  {
    icon: FiServer,
    title: 'API Development',
    metric: 'REST Standard',
    description:
      'Creating secure and scalable backend APIs for web and mobile applications with best practices.',
    tags: ['REST', 'JWT', 'Node.js'],
    deliverables: [
      'Well-documented REST endpoints',
      'Token-based authentication & authorization',
      'Input validation & error handling',
      'Integration with frontends & third parties',
    ],
  },
  {
    icon: FiCpu,
    title: 'AI-Powered Solutions',
    metric: 'GenAI + ML',
    description:
      'Integrating Artificial Intelligence technologies into software products and business processes.',
    tags: ['Gemini', 'ML', 'Automation'],
    deliverables: [
      'AI chat assistants & chatbots',
      'Intelligent automation workflows',
      'Content generation & summarization',
      'ML fundamentals & computer vision',
    ],
  },
]

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null)

  return (
    <section id="services" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="framer-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-teal-300">
              <FiZap className="w-3.5 h-3.5" /> Expert Capabilities
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              High-Impact Engineering & Creative Solutions
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl">
              From full-stack builds to AI-powered products — pick a discipline and I'll take it
              from concept to production.
            </p>
          </div>
          <span className="framer-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
              {services.length} Core Disciplines
            </span>
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -4, scale: 1.01 }}
              className="framer-card rounded-[22px] p-5 bg-[#0e131f]"
            >
              <div className="flex items-start justify-between">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 border border-teal-500/20 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-teal-400" />
                </span>
                <span className="px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 text-[10px] font-mono uppercase tracking-wider">
                  {service.metric}
                </span>
              </div>

              <h3 className="mt-5 font-display font-bold text-lg text-white group-hover:text-teal-300">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-2">
                {service.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-white/5 text-teal-300 text-[11px] font-mono uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelected(service)}
                className="mt-5 flex items-center gap-1.5 text-sm text-slate-300 hover:text-teal-300 transition-colors cursor-pointer"
              >
                View Details <FiArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
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
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 border border-teal-500/20 flex items-center justify-center">
                    <selected.icon className="w-7 h-7 text-teal-400" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">{selected.title}</h3>
                    <span className="mt-1 inline-block px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 text-[10px] font-mono uppercase tracking-wider">
                      {selected.metric}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="framer-glass-pill p-2 rounded-full text-slate-300 hover:text-white cursor-pointer"
                  aria-label="Close"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">{selected.description}</p>

              <h4 className="mt-6 font-mono text-[11px] uppercase tracking-wider text-teal-400 mb-3">
                What's Included
              </h4>
              <ul className="space-y-2.5">
                {selected.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-slate-300">
                    <FiCheck className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {selected.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-white/5 text-teal-300 text-[11px] font-mono uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setSelected(null)}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-400 text-slate-950 font-bold text-sm"
              >
                Discuss This Project <FiArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}