import { motion } from 'framer-motion'
import { FiCode, FiSmartphone, FiDatabase, FiBriefcase, FiServer, FiCpu } from 'react-icons/fi'

const services = [
  {
    icon: FiCode,
    title: 'Full-Stack Web Development',
    description:
      'Design and development of modern, responsive, and scalable web applications for businesses, organizations, and individuals.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile-Friendly Applications',
    description:
      'Building applications optimized for mobile, tablet, and desktop devices with a seamless user experience.',
  },
  {
    icon: FiDatabase,
    title: 'Database Design & Management',
    description:
      'Designing efficient database structures, ERDs, DFDs, and business information systems tailored to your needs.',
  },
  {
    icon: FiBriefcase,
    title: 'Business Management Systems',
    description:
      'Custom solutions including HR, Fleet, Vehicle Rental, Transport, School, and Inventory Management Systems.',
  },
  {
    icon: FiServer,
    title: 'API Development',
    description:
      'Creating secure and scalable backend APIs for web and mobile applications with best practices.',
  },
  {
    icon: FiCpu,
    title: 'AI-Powered Solutions',
    description:
      'Integrating Artificial Intelligence technologies into software products and business processes.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Services
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-teal-300 dark:hover:border-teal-500 transition-all"
            >
              <service.icon className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
