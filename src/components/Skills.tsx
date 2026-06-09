import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js',
      'Tailwind CSS', 'Responsive Web Design', 'UI Development',
    ],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication & Authorization'],
  },
  {
    title: 'Database Technologies',
    skills: ['MySQL', 'MongoDB', 'Database Design', 'SQL Query Optimization'],
  },
  {
    title: 'Development Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS Fundamentals', 'DevOps Principles', 'Cloud Automation', 'CI/CD Concepts', 'DataOps Fundamentals'],
  },
  {
    title: 'Artificial Intelligence',
    skills: ['AI Literacy', 'Machine Learning Fundamentals', 'Computer Vision Fundamentals', 'AI Applications Development'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-teal-300 dark:hover:border-teal-500 transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm rounded-lg"
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
