import { motion } from 'framer-motion'
import { FiStar, FiBookOpen, FiFolder, FiArrowUpRight } from 'react-icons/fi'

const achievements = [
  {
    icon: FiStar,
    title: 'First Lego League & AI Hackathon Competition',
    description:
      'Successfully participated in the First Lego League and AI Hackathon Competition, demonstrating innovation, teamwork, and problem-solving skills. Earned a medal for outstanding participation and contribution.',
    link: 'https://www.youtube.com/watch?v=QA1RGSEjOYs',
    linkLabel: 'Watch Video',
  },
  {
    icon: FiBookOpen,
    title: 'Continuous Professional Development',
    description:
      'Completed numerous international certifications across Artificial Intelligence, Machine Learning, Cloud Computing, DevOps, Web Development, and Software Engineering.',
  },
  {
    icon: FiFolder,
    title: 'Project Development',
    description:
      'Designed and developed multiple software solutions addressing business, educational, and operational challenges.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-16 sm:py-20 bg-[#05070a] border-y border-white/5 overflow-hidden">
      <div className="absolute -right-32 top-20 w-[400px] h-[400px] rounded-full blur-[150px] bg-teal-500/10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="framer-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-teal-300">
              <FiStar className="w-3.5 h-3.5" /> Achievements
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Milestones & Recognition
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl">
              Moments that shaped my problem-solving, teamwork, and love for building.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="framer-card rounded-[22px] p-6 bg-[#0e131f] flex gap-4 items-start group"
            >
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-teal-400" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-base text-white group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm text-teal-300 hover:text-teal-200 transition-colors"
                  >
                    {item.linkLabel} <FiArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}