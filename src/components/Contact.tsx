import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiCopy, FiSend, FiMessageCircle } from 'react-icons/fi'

const services = [
  'Full-Stack Web Development',
  'Business Management Systems',
  'API Development',
  'Database Design & Management',
  'AI-Powered Solutions',
  'Other / Not Sure',
]

const email = 'mitarimurenzichris@gmail.com'
const phone = '+250 795 994 454'
const whatsapp = '250795994454'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [service, setService] = useState(services[0])
  const [name, setName] = useState('')
  const [emailField, setEmailField] = useState('')
  const [message, setMessage] = useState('')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `*New Portfolio Project Inquiry*\n\nName: ${name}\nEmail: ${emailField}\nService: ${service}\n\nMessage: ${message}`
    )
    window.open(`https://wa.me/${whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[150px] bg-teal-500/10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="framer-card rounded-[36px] p-8 sm:p-12 lg:p-16 bg-[#0e131f] grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="framer-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-teal-300">
              <FiSend className="w-3.5 h-3.5" /> Start a Conversation
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Let's Build Something Exceptional Together
            </h2>
            <p className="mt-3 text-slate-400 leading-relaxed">
              I'm always open to collaborations, freelance projects, internships, and partnerships.
              Tell me about your idea and I'll get back to you quickly.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-5 h-5 text-teal-400" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Email</p>
                  <p className="text-sm text-slate-200 truncate">{email}</p>
                </div>
                <button
                  onClick={copyEmail}
                  className="framer-glass-pill p-2.5 rounded-full text-slate-300 hover:text-teal-300 transition-colors cursor-pointer"
                  aria-label="Copy email"
                >
                  {copied ? <FiCopy className="w-4 h-4 text-teal-400" /> : <FiCopy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-5 h-5 text-teal-400" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Phone / WhatsApp</p>
                  <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-200 hover:text-teal-300 transition-colors">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-5 h-5 text-cyan-400" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Location</p>
                  <p className="text-sm text-slate-200">Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-[#0a0e17] rounded-[28px] p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mb-4">
                What service do you need?
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {services.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setService(s)}
                    className={`px-3.5 py-2 rounded-full text-xs transition-colors cursor-pointer ${
                      service === s
                        ? 'bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-400 text-slate-950 font-bold'
                        : 'bg-white/5 border border-white/10 text-slate-300 hover:border-teal-500/40'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-slate-500 font-mono uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#121826] border border-white/10 text-sm text-slate-200 placeholder-slate-500 outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs text-slate-500 font-mono uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={emailField}
                    onChange={(e) => setEmailField(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#121826] border border-white/10 text-sm text-slate-200 placeholder-slate-500 outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-xs text-slate-500 font-mono uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[#121826] border border-white/10 text-sm text-slate-200 placeholder-slate-500 outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-400 text-slate-950 font-bold text-sm hover:opacity-90 transition-opacity cursor-pointer"
              >
                <FiMessageCircle className="w-4 h-4" /> Send Message via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}