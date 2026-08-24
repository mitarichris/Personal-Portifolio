import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Store Management System',
    description:
      'A comprehensive store management solution featuring inventory tracking, sales processing, customer management, and reporting dashboards. Built with Laravel for robust backend logic and Blade templates for a clean UI.',
    tech: ['Laravel', 'PHP', 'SQLite', 'Blade', 'Vite'],
    live: 'https://store-management-system.infinityfreeapp.com/login',
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&h=400&fit=crop',
  },
  {
    title: 'School Hub',
    description:
      'A school management portal for managing student records, classes, attendance, grades, and announcements. Designed to connect administrators, teachers, and students on one unified platform.',
    tech: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://igahub.netlify.app',
    image: '/school-hub.jpg',
  },
  {
    title: 'Online Buying Ticket Platform',
    description:
      'A ticket booking platform where users can browse events, register, authenticate, and purchase tickets online. Built with Next.js and Prisma on a Neon PostgreSQL database.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    live: '#',
    image: '/ticket-platform.jpg',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Projects
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden flex flex-col hover:shadow-lg hover:border-teal-300 dark:hover:border-teal-500 transition-all"
            >
              <div className="h-[28rem] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors"
                >
                  <FiExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
