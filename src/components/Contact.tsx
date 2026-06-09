import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiLinkedin, FiInstagram, FiMessageCircle, FiTwitter } from 'react-icons/fi'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'mitarimurenzichris@gmail.com',
    href: 'mailto:mitarimurenzichris@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+250 795 994 454',
    href: 'tel:+250795994454',
  },
  {
    icon: FiMessageCircle,
    label: 'WhatsApp',
    value: '0795994454',
    href: 'https://wa.me/250795994454',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mitari-murenzi-chris-358526324',
    href: 'https://www.linkedin.com/in/mitari-murenzi-chris-358526324',
  },
  {
    icon: FiTwitter,
    label: 'X (Twitter)',
    value: '@Mitarichris23',
    href: 'https://x.com/Mitarichris23',
  },
  {
    icon: FiInstagram,
    label: 'Instagram',
    value: '@mitarichris',
    href: 'https://instagram.com/mitarichris',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Let's Build Something Amazing Together
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            I am always open to collaborating on exciting projects, innovative ideas,
            freelance opportunities, internships, and professional partnerships.
            Whether you need a modern website, a business management system, a custom
            web application, or an AI-powered solution, I am ready to help bring your
            vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactInfo.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg hover:border-teal-300 dark:hover:border-teal-500 transition-all group"
            >
              <item.icon className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-0.5">{item.label}</p>
                <p className="text-gray-800 dark:text-gray-200 font-medium break-words text-sm">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:mitarimurenzichris@gmail.com?subject=Ideas%20%26%20Collaboration&body=Hi%20Mitari%2C%0A%0AI%20have%20an%20idea%20I'd%20love%20to%20share%20with%20you...%0A%0A"
            className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
          >
            <FiMail className="w-5 h-5" />
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  )
}
