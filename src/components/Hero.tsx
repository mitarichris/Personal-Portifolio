import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

function Typewriter({ text, className, inView }: { text: string; className?: string; inView: boolean }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!inView) return
    setDisplayed('')
    setDone(false)
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [text, inView])

  return (
    <h1 className={className}>
      {displayed}
      {!done && inView && <span className="animate-pulse text-teal-600">|</span>}
    </h1>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' })

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <img
            src="/profile.jpg"
            alt="Mitari Murenzi Chris"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto border-4 border-teal-500 shadow-lg"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-teal-600 font-medium mb-4"
        >
          Hello, I'm
        </motion.p>

        <Typewriter
          text="Mitari Murenzi Chris"
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          inView={isInView}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Full-Stack Developer | Software Engineer | AI Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build modern, scalable, and user-friendly web applications.
          Passionate about leveraging technology to create impactful solutions
          that drive digital transformation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-full font-medium hover:border-teal-600 hover:text-teal-600 transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  )
}
