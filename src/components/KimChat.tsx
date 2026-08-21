import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GoogleGenerativeAI } from '@google/generative-ai'

const portfolioData = {
  name: 'Mitari Murenzi Chris',
  role: 'Full-Stack Developer | Software Engineer | AI Enthusiast',
  location: 'Rwanda',
  about: [
    'Highly motivated technology professional with strong expertise in full-stack web development, software engineering, database design, and modern development practices.',
    'Experience includes developing business management systems, transport management systems, HR management systems, fleet management solutions, and AI-powered applications.',
    'Passionate about continuous learning with certifications in AI, ML, Cloud Technologies, DevOps, and Web Development.',
  ],
  skills: {
    'Frontend Development': ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Responsive Web Design', 'UI Development'],
    'Backend Development': ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication & Authorization'],
    'Database Technologies': ['MySQL', 'MongoDB', 'Database Design', 'SQL Query Optimization'],
    'Development Tools': ['Git', 'GitHub', 'VS Code', 'Postman', 'npm'],
    'Cloud & DevOps': ['AWS Fundamentals', 'DevOps Principles', 'Cloud Automation', 'CI/CD Concepts', 'DataOps Fundamentals'],
    'Artificial Intelligence': ['AI Literacy', 'Machine Learning Fundamentals', 'Computer Vision Fundamentals', 'AI Applications Development'],
  },
  projects: [
    { title: 'Store Management System', description: 'Comprehensive store management with inventory tracking, sales processing, customer management, and reporting dashboards. Built with Laravel.', tech: ['Laravel', 'PHP', 'SQLite', 'Blade', 'Vite'] },
    { title: 'School Hub', description: 'School management portal for managing student records, classes, attendance, grades, and announcements.', tech: ['TypeScript', 'React', 'Node.js', 'Express', 'GitHub Actions'] },
    { title: 'Online Buying Ticket Platform', description: 'Ticket booking platform where users can browse events, register, authenticate, and purchase tickets online. Built with Next.js and Prisma.', tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'] },
  ],
  services: [
    'Full-Stack Web Development',
    'Mobile-Friendly Applications',
    'Database Design & Management',
    'Business Management Systems (HR, Fleet, Transport, School, Inventory)',
    'API Development',
    'AI-Powered Solutions',
  ],
  achievements: [
    'First Lego League & AI Hackathon Competition - Earned a medal for outstanding participation',
    'Continuous Professional Development - Numerous international certifications across AI, ML, Cloud, DevOps, Web Dev, and Software Engineering',
    'Project Development - Multiple software solutions for business, educational, and operational challenges',
  ],
  certifications: {
    'AI & Machine Learning': ['AI Literacy Certificate', 'AI & Machine Learning Courses', 'Elements of AI', 'Understanding How AI Impacts You', 'Computer Vision App with Azure Cognitive Services'],
    'DevOps & Cloud Computing': ['DevOps Beginner (DTP)', 'DevOps Cloud Automation: AWS DevOps Tools', 'DevOps Mindset: Principles & Approach', 'DevOps Platforms and Operations: DataOps Principles'],
    'Software Development & Design': ['Basic Game Development with Scratch', 'Build a Free Website with WordPress', 'Build Apps with Google Sheets - Glide', 'Build Websites Using Wix ADI', 'Design a Mobile Interface with Moqups', 'Use Canva to Design Digital Course Collateral'],
  },
  contact: {
    email: 'mitarimurenzichris@gmail.com',
    phone: '+250 795 994 454',
    whatsapp: 'https://wa.me/250795994454',
    linkedin: 'https://www.linkedin.com/in/mitari-murenzi-chris-358526324',
    twitter: 'https://x.com/Mitarichris23',
    instagram: 'https://instagram.com/mitarichris',
  },
}

const apiKey = import.meta.env.VITE_GEMINI_API_KEY

const localAnswers: { keywords: string[]; response: string }[] = [
  { keywords: ['who', 'are you', 'tell me about yourself', 'introduce'], response: `I'm Kim, Chris's AI assistant! I'm here to help you learn more about ${portfolioData.name}. He's a ${portfolioData.role} based in ${portfolioData.location}. Feel free to ask me about his skills, projects, experience, or anything else!` },
  { keywords: ['skills', 'technologies', 'tech stack', 'what does he know', 'expertise', 'technologies'], response: `Chris has expertise across multiple areas:\n\n🎨 Frontend: HTML5, CSS3, JavaScript, React.js, Tailwind CSS\n⚙️ Backend: Node.js, Express.js, RESTful APIs\n🗄️ Databases: MySQL, MongoDB, Database Design\n☁️ Cloud & DevOps: AWS, CI/CD, DevOps Principles\n🤖 AI: Machine Learning, Computer Vision, AI Applications` },
  { keywords: ['projects', 'built', 'portfolio', 'work', 'applications'], response: `Chris has built several projects:\n\n1️⃣ Store Management System (Laravel, PHP, SQLite)\n2️⃣ School Hub (TypeScript, React, Node.js)\n3️⃣ Online Buying Ticket Platform (Next.js, TypeScript, Prisma)\n\nYou can check them out in the Projects section!` },
  { keywords: ['contact', 'reach', 'email', 'phone', 'call', 'message', 'whatsapp', 'hire'], response: `You can reach Chris through:\n\n📧 Email: ${portfolioData.contact.email}\n📞 Phone: ${portfolioData.contact.phone}\n💬 WhatsApp: ${portfolioData.contact.whatsapp}\n🔗 LinkedIn: ${portfolioData.contact.linkedin}\n🐦 X (Twitter): ${portfolioData.contact.twitter}\n📸 Instagram: ${portfolioData.contact.instagram}` },
  { keywords: ['service', 'offer', 'help', 'hire', 'freelance'], response: `Chris offers these services:\n\n💻 Full-Stack Web Development\n📱 Mobile-Friendly Applications\n🗄️ Database Design & Management\n🏢 Business Management Systems\n🔌 API Development\n🤖 AI-Powered Solutions` },
  { keywords: ['achievement', 'award', 'medal', 'accomplish', 'lego', 'hackathon'], response: `Chris's achievements include:\n\n🏆 First Lego League & AI Hackathon Competition - Earned a medal for outstanding participation\n📚 Continuous Professional Development - Multiple international certifications\n💡 Project Development - Built solutions for business, education, and operations` },
  { keywords: ['certification', 'certificate', 'cert', 'course'], response: `Chris holds certifications in:\n\n🤖 AI & Machine Learning: AI Literacy, Elements of AI, Computer Vision with Azure\n☁️ DevOps & Cloud: DevOps Beginner, AWS DevOps Tools, DataOps Principles\n💻 Software Development: Game Development, WordPress, Glide, Wix ADI, Canva, Moqups` },
  { keywords: ['experience', 'background', 'bio', 'history', 'professional', 'about him'], response: `${portfolioData.name} is a ${portfolioData.role} from ${portfolioData.location}. He has experience building business management systems, transport systems, HR platforms, fleet management solutions, and AI-powered applications. He's passionate about continuous learning and holds numerous international certifications.` },
  { keywords: ['resume', 'cv', 'curriculum vitae'], response: `You can contact Chris directly at ${portfolioData.contact.email} to request his resume/CV. He'd be happy to share it with you!` },
  { keywords: ['location', 'based', 'rwanda', 'where'], response: `Chris is based in ${portfolioData.location}! 🇷🇼` },
  { keywords: ['thanks', 'thank you', 'appreciate'], response: `You're welcome! 😊 I'm happy to help. If you have any more questions about Chris or his work, just ask!` },
]

function getLocalAnswer(input: string): string | null {
  const lower = input.toLowerCase().trim()
  const greetingWords = ['hi', 'hello', 'hey', 'yo', 'sup']

  const isGreeting = greetingWords.some(w => {
    const regex = new RegExp(`\\b${w}\\b`)
    return regex.test(lower)
  })

  if (lower.includes('how are you') || lower.includes("how're you") || lower.includes("how's it going") || lower.includes("how ya doing")) {
    return `I'm doing great, thanks for asking! 😊 I'm here to help you learn more about Chris. What would you like to know?`
  }

  if (isGreeting) {
    return `Hello! 👋 I'm Kim, Chris's AI assistant. How can I help you today? You can ask me about his skills, projects, experience, certifications, or anything else!`
  }

  for (const entry of localAnswers) {
    if (entry.keywords.some(k => lower.includes(k))) {
      return entry.response
    }
  }

  return null
}

function buildSystemPrompt(): string {
  return `You are Kim, a friendly AI assistant for ${portfolioData.name}'s portfolio website. 
Your role is to answer visitor questions about Chris and also chat about general topics.

Here is Chris's portfolio information:

Name: ${portfolioData.name}
Role: ${portfolioData.role}
Location: ${portfolioData.location}

About: ${portfolioData.about.join(' ')}

Skills:
${Object.entries(portfolioData.skills).map(([cat, items]) => `- ${cat}: ${items.join(', ')}`).join('\n')}

Projects:
${portfolioData.projects.map(p => `- ${p.title}: ${p.description} (${p.tech.join(', ')})`).join('\n')}

Services:
${portfolioData.services.map(s => `- ${s}`).join('\n')}

Achievements:
${portfolioData.achievements.map(a => `- ${a}`).join('\n')}

Contact:
Email: ${portfolioData.contact.email}
Phone: ${portfolioData.contact.phone}
LinkedIn: ${portfolioData.contact.linkedin}

When asked about Chris, answer enthusiastically and accurately using this data.
When asked general questions, feel free to answer naturally as a helpful assistant.
Keep responses concise, friendly, and use emojis occasionally.
Always sign off or identify as Kim.`
}

const initialMessage = `Hey there! 👋 I'm Kim, Chris's AI assistant. What would you like to know about him?`

export default function KimChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ from: 'user' | 'kim'; text: string }[]>([
    { from: 'kim', text: initialMessage },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function handleSend() {
    const text = input.trim()
    if (!text) return
    setMessages(prev => [...prev, { from: 'user', text }])
    setInput('')

    const local = getLocalAnswer(text)
    if (local) {
      setTimeout(() => {
        setMessages(prev => [...prev, { from: 'kim', text: local }])
      }, 300)
      return
    }

    if (genAI) {
      setLoading(true)
      try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash', systemInstruction: buildSystemPrompt() })
        const result = await model.generateContent(text)
        const reply = result.response.text()
        setMessages(prev => [...prev, { from: 'kim', text: reply || 'Sorry, I could not generate a response.' }])
      } catch {
        setMessages(prev => [...prev, { from: 'kim', text: "I've hit my daily chat limit 😅. Ask Chris for a fresh API key or try again tomorrow!" }])
      } finally {
        setLoading(false)
      }
    } else {
      setTimeout(() => {
        setMessages(prev => [...prev, { from: 'kim', text: `I'm not sure about that one! 🤔 Try asking me about Chris's skills, projects, or experience.` }])
      }, 300)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (!loading) handleSend()
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat with Kim"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: '520px' }}
          >
            <div className="bg-teal-600 px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm font-bold">
                K
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Kim</p>
                <p className="text-teal-100 text-xs">AI Assistant</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: '300px' }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                      msg.from === 'user'
                        ? 'bg-teal-600 text-white rounded-br-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 p-3 flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                disabled={loading}
                className="flex-1 px-4 py-2 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full outline-none focus:ring-2 focus:ring-teal-500 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="w-9 h-9 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
