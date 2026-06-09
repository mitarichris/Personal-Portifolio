import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'

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
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {certificationGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FiAward className="text-teal-600" />
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.certs.map((cert) => (
                  <li key={cert} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0" />
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
