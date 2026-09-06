import { motion } from 'framer-motion'
import { FiLayers, FiTerminal, FiDatabase, FiTool, FiCloud, FiCpu } from 'react-icons/fi'

const skillCategories = [
  {
    icon: FiLayers,
    title: 'Frontend Development',
    description: 'Interfaces that feel fast, polished, and intuitive.',
    skills: [
      'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js',
      'Tailwind CSS', 'Responsive Web Design', 'UI Development',
    ],
  },
  {
    icon: FiTerminal,
    title: 'Backend Development',
    description: 'APIs and server logic built to scale.',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication & Authorization'],
  },
  {
    icon: FiDatabase,
    title: 'Database Technologies',
    description: 'Structures that keep your data clean and fast.',
    skills: ['MySQL', 'MongoDB', 'Database Design', 'SQL Query Optimization'],
  },
  {
    icon: FiTool,
    title: 'Development Tools',
    description: 'The workflow that keeps delivery smooth.',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm'],
  },
  {
    icon: FiCloud,
    title: 'Cloud & DevOps',
    description: 'Cloud fundamentals, automation, and CI/CD.',
    skills: ['AWS Fundamentals', 'DevOps Principles', 'Cloud Automation', 'CI/CD Concepts', 'DataOps Fundamentals'],
  },
  {
    icon: FiCpu,
    title: 'Artificial Intelligence',
    description: 'Applying AI to real products and workflows.',
    skills: ['AI Literacy', 'Machine Learning Fundamentals', 'Computer Vision Fundamentals', 'AI Applications Development'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-20 bg-[#05070a] border-y border-white/5 overflow-hidden">
      <div className="absolute -right-32 top-20 w-[400px] h-[400px] rounded-full blur-[150px] bg-cyan-500/10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="framer-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-teal-300">
              <FiLayers className="w-3.5 h-3.5" /> The Technical Arsenal
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              My Technology Stack & Capabilities
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl">
              The tools and disciplines I combine to design, build, and ship reliable software.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="framer-card rounded-[22px] p-5 bg-[#0e131f]"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 border border-teal-500/20 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-teal-400" />
                </span>
                <h3 className="font-display font-bold text-base text-white">{cat.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-400">{cat.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-[11px] font-mono uppercase tracking-wider hover:bg-teal-500/10 hover:text-teal-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}