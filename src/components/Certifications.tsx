import { motion } from 'framer-motion'
import { FiAward, FiCheck } from 'react-icons/fi'

const certificationGroups = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    certs: [
      'AI Literacy Certificate',
      'Certificate of Completion on AI & Machine Learning Courses',
      'Certificate on Elements of AI',
      'Certificate on Understanding How AI Impacts You and Your Government',
      'Microsoft Certificate: Build a Computer Vision App with Azure Cognitive Services',
    ],
  },
  {
    title: 'DevOps & Cloud Computing',
    certs: [
      'DevOps Beginner (DTP) Certificate',
      'DevOps Cloud Automation: AWS DevOps Tools',
      'DevOps Mindset: Principles & Implementation Approach',
      'DevOps Platforms and Operations: DataOps Principles',
    ],
  },
  {
    title: 'Software Development & Design',
    certs: [
      'Basic Game Development with Scratch (Coursera)',
      'Build a Free Website with WordPress (Coursera)',
      'Build Apps with Google Sheets - Glide No-Code (Coursera)',
      'Build Websites Using Wix Artificial Design Intelligence (Coursera)',
      'Design a Mobile Interface with Moqups (Coursera)',
      'Use Canva to Design Digital Course Collateral (Coursera)',
    ],
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute -left-32 bottom-20 w-[400px] h-[400px] rounded-full blur-[150px] bg-teal-500/10 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="framer-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-teal-300">
              <FiAward className="w-3.5 h-3.5" /> Certifications
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Credentials & Continuous Learning
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl">
              International certificates across AI, Cloud, DevOps, and modern software practices.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {certificationGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="framer-card rounded-[22px] p-6 bg-[#0e131f]"
            >
              <h3 className="font-display font-bold text-base text-white mb-4 flex items-center gap-2">
                <FiAward className="w-5 h-5 text-teal-400" />
                {group.title}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
                {group.certs.map((cert) => (
                  <li key={cert} className="flex items-start gap-3 text-sm text-slate-400">
                    <FiCheck className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}