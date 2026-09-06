import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiChrome, FiX, FiChevronLeft, FiChevronRight, FiLayers } from 'react-icons/fi'

type Phase = {
  number: string
  title: string
  description: string
  deliverables: string[]
}

const phases: Phase[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We clarify your goals, audience, and constraints, then define a clear scope and roadmap before any code is written.',
    deliverables: [
      'Requirements gathering & stakeholder interviews',
      'User stories and success metrics',
      'Tech stack recommendation',
      'Project timeline & milestones',
    ],
  },
  {
    number: '02',
    title: 'Wireframing & Prototype',
    description:
      'Low-fidelity wireframes evolve into clickable prototypes so the direction is validated before heavy building.',
    deliverables: [
      'Wireframes for key screens & flows',
      'UI/UX direction and design system',
      'Clickable high-fidelity prototype',
      'Feedback loop with stakeholders',
    ],
  },
  {
    number: '03',
    title: 'Engineering & AI Build',
    description:
      'Clean, testable code gets shipped in iterations — frontend, backend, database, and AI features all come together.',
    deliverables: [
      'Frontend & responsive interfaces',
      'APIs, database schema & integrations',
      'AI features & automations where valuable',
      'Code reviews & automated testing',
    ],
  },
  {
    number: '04',
    title: 'Optimization & Launch',
    description:
      'We polish performance, fix edge cases, deploy, and support the product so it launches and stays healthy.',
    deliverables: [
      'Performance, SEO & accessibility tuning',
      'Deployment & CI/CD setup',
      'Documentation & handover',
      'Post-launch support & iterations',
    ],
  },
]

export default function Process() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const goTo = (dir: number) => {
    if (selectedIndex === null) return
    const next = (selectedIndex + dir + phases.length) % phases.length
    setSelectedIndex(next)
  }

  return (
    <section id="process" className="relative py-16 sm:py-20 bg-[#0a0e17] overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="framer-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-teal-300">
              <FiChrome className="w-3.5 h-3.5" /> How I Work
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              A Proven 4-Step Engineering & Design Process
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl">
              A structured workflow that keeps every project moving from idea to launch without
              surprises.
            </p>
          </div>
          <span className="framer-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-2">
            <FiLayers className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300">Structured Workflow</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="framer-card rounded-[22px] p-5 bg-[#0e131f]"
            >
              <p className="font-display text-4xl font-extrabold text-teal-400/40">{phase.number}</p>
              <span className="mt-3 inline-block px-2.5 py-1 rounded-full bg-white/5 text-slate-400 text-[10px] font-mono uppercase tracking-wider">
                Phase {phase.number}
              </span>
              <h3 className="mt-3 font-display font-bold text-lg text-white">{phase.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{phase.description}</p>
              <button
                onClick={() => setSelectedIndex(i)}
                className="mt-4 flex items-center gap-1.5 text-sm text-slate-300 hover:text-teal-300 transition-colors cursor-pointer"
              >
                View Deliverables <FiArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="framer-card rounded-[32px] p-6 sm:p-8 w-full max-w-lg bg-[#0e131f]"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-[11px] font-mono uppercase tracking-wider">
                    Phase {phases[selectedIndex].number}
                  </span>
                  <h3 className="mt-3 font-display font-bold text-2xl text-white">
                    {phases[selectedIndex].title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="framer-glass-pill p-2 rounded-full text-slate-300 hover:text-white cursor-pointer"
                  aria-label="Close"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                {phases[selectedIndex].description}
              </p>

              <h4 className="mt-6 font-mono text-[11px] uppercase tracking-wider text-teal-400 mb-3">
                Deliverables
              </h4>
              <ul className="space-y-2.5">
                {phases[selectedIndex].deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between gap-3">
                <button
                  onClick={() => goTo(-1)}
                  className="framer-glass-pill flex items-center gap-2 px-4 py-2.5 rounded-full text-sm text-slate-300 hover:text-teal-300 transition-colors cursor-pointer"
                >
                  <FiChevronLeft className="w-4 h-4" /> Previous Phase
                </button>
                <span className="text-xs font-mono text-slate-500">
                  {selectedIndex + 1} / {phases.length}
                </span>
                <button
                  onClick={() => goTo(1)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-400 text-slate-950 text-sm font-bold cursor-pointer"
                >
                  Next Phase <FiChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}