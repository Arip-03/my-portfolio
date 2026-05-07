import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, User, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [focused] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('https://formspree.io/f/maqvbgqb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        const data = await response.json()
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id='contact' className='py-16 sm:py-20 md:py-32 gradient-bg' style={{ backgroundColor: '#111111' }}>
      <div className='max-w-[1200px] mx-auto px-4 sm:px-6 md:px-16'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className='text-center mb-8 sm:mb-12 md:mb-16'
        >
          <span className='text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest'>
            Contact
          </span>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2'>
            Get In Touch
          </h2>
          <p className='text-gray-500 mt-3 sm:mt-4 max-w-xl mx-auto text-sm sm:text-base'>
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className='text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Let's work together
            </motion.h3>
            <motion.p 
              className='text-gray-500 mb-4 sm:mb-6 md:mb-10 leading-relaxed text-xs sm:text-sm md:text-base'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </motion.p>

            <div className='space-y-3 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-10'>
              {[
                { icon: User, label: 'Name', value: 'Abdel-Arip Saripada' },
                { icon: Mail, label: 'Email', value: 'renzsrpd@gmail.com' },
                { icon: Phone, label: 'Phone', value: '09078611374' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className='flex items-center gap-2 sm:gap-3 md:gap-4'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 4, scale: 1.01 }}
                >
                  <div className='w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center'>
                    <item.icon size={16} className='sm:w-[18px] text-gray-400' />
                  </div>
                  <div>
                    <span className='block text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider'>{item.label}</span>
                    <span className='text-gray-300 text-xs sm:text-sm md:text-base'>{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className='flex gap-2 sm:gap-3'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { name: 'github', url: 'https://github.com/Arip-03' },
                { name: 'facebook', url: 'https://www.facebook.com/abdel.arip.srpd?mibextid=ZbWKwL' },
                { name: 'linkedin', url: 'https://www.linkedin.com/in/abdel-arip-saripada-590634408/' }
              ].map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400'
                  whileHover={{ scale: 1.1, y: -3, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <i className={`fab fa-${social.name} text-base sm:text-lg`} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.form
            action='https://formspree.io/f/maqvbgqb'
            method='POST'
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className='p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10'
          >
            <div className='space-y-4 sm:space-y-6'>
              {['name', 'email', 'message'].map((field) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor={`field-${field}`} className='block text-xs sm:text-sm text-gray-500 mb-2 capitalize'>
                    Your {field}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={`field-${field}`}
                      name={field}
                      placeholder={`Tell me about your project...`}
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full bg-white/5 border ${focused === field ? 'border-white' : 'border-white/10'} rounded-xl py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 text-white placeholder-gray-600 focus:outline-none transition-colors resize-none text-sm sm:text-base`}
                    />
                  ) : (
                    <input
                      id={`field-${field}`}
                      name={field}
                      type={field === 'email' ? 'email' : 'text'}
                      placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                      required
                      value={formData[field as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className={`w-full bg-white/5 border ${focused === field ? 'border-white' : 'border-white/10'} rounded-xl py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm sm:text-base`}
                    />
                  )}
                </motion.div>
              ))}

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-xs sm:text-sm'
                >
                  <CheckCircle size={16} className='sm:w-[20px]' />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-xs sm:text-sm'
                >
                  <AlertCircle size={16} className='sm:w-[20px]' />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              <motion.button
                type='submit'
                disabled={status === 'loading'}
                className='w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 md:px-8 md:py-4 bg-white text-black rounded-full font-medium text-xs sm:text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed'
                whileHover={status !== 'loading' ? { scale: 1.02, y: -2, boxShadow: '0 10px 30px rgba(255,255,255,0.2)' } : {}}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className='sm:w-[18px] animate-spin' />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} className='sm:w-[18px]' />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}