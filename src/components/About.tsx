import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-10 rounded-full" />

          <div className="space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <p>
              I am a highly motivated technology professional with strong expertise in
              full-stack web development, software engineering principles, database
              design, and modern development practices. I enjoy transforming ideas into
              fully functional applications that are efficient, secure, and visually
              appealing.
            </p>
            <p>
              My experience includes developing business management systems, transport
              management systems, HR management systems, fleet management solutions,
              and AI-powered applications. I believe that technology should not only work
              effectively but also provide meaningful value to users and organizations.
            </p>
            <p>
              I am passionate about continuous learning and have earned numerous
              certifications in Artificial Intelligence, Machine Learning, Cloud
              Technologies, DevOps, and Web Development. My ability to combine technical
              expertise with problem-solving skills enables me to deliver high-quality
              solutions that meet business requirements and user expectations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
