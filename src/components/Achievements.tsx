import { motion } from 'framer-motion'
import { FiStar, FiBookOpen, FiFolder } from 'react-icons/fi'

const achievements = [
  {
    icon: FiStar,
    title: 'First Lego League & AI Hackathon Competition',
    description:
      'Successfully participated in the First Lego League and AI Hackathon Competition, demonstrating innovation, teamwork, and problem-solving skills. Earned a medal for outstanding participation and contribution.',
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
    <section id="achievements" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex gap-4 items-start hover:shadow-lg transition-all"
            >
              <div className="p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg flex-shrink-0">
                <item.icon className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
