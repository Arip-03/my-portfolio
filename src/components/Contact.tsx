import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, User, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [focused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you ${formData.name}! Your message has been sent.`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id='contact' className='py-24 md:py-32 gradient-bg' style={{ backgroundColor: '#111111' }}>
      <div className='max-w-[1200px] mx-auto px-6 md:px-16'>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='text-sm font-medium text-gray-500 uppercase tracking-widest'>
            Contact
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-2'>
            Get In Touch
          </h2>
          <p className='text-gray-500 mt-4 max-w-xl mx-auto'>
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto'>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className='text-xl md:text-2xl font-semibold mb-4 md:mb-6'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Let's work together
            </motion.h3>
            <motion.p 
              className='text-gray-500 mb-6 md:mb-10 leading-relaxed text-sm md:text-base'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </motion.p>

            <div className='space-y-4 md:space-y-6 mb-8 md:mb-10'>
              {[
                { icon: User, label: 'Name', value: 'Abdel-Arip Saripada' },
                { icon: Mail, label: 'Email', value: 'renzsrpd@gmail.com' },
                { icon: Phone, label: 'Phone', value: '09078611374' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className='flex items-center gap-3 md:gap-4'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  <div className='w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center'>
                    <item.icon size={18} className='text-gray-400' />
                  </div>
                  <div>
                    <span className='block text-xs text-gray-600 uppercase tracking-wider'>{item.label}</span>
                    <span className='text-gray-300 text-sm md:text-base'>{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className='flex gap-3'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {['github', 'facebook', 'linkedin'].map((social, i) => (
                <motion.a
                  key={social}
                  href='#'
                  className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400'
                  whileHover={{ scale: 1.1, y: -3, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <i className={`fab fa-${social} text-lg`} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className='p-4 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10'
          >
            <div className='space-y-6'>
              {['name', 'email', 'message'].map((field) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor={`field-${field}`} className='block text-sm text-gray-500 mb-2 capitalize'>
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
                      className={`w-full bg-white/5 border ${focused === field ? 'border-white' : 'border-white/10'} rounded-xl py-3 md:py-4 px-4 md:px-5 text-white placeholder-gray-600 focus:outline-none transition-colors resize-none`}
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
                      className={`w-full bg-white/5 border ${focused === field ? 'border-white' : 'border-white/10'} rounded-xl py-3 md:py-4 px-4 md:px-5 text-white placeholder-gray-600 focus:outline-none transition-colors`}
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                type='submit'
                className='w-full inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-medium text-sm md:text-base'
                whileHover={{ scale: 1.02, y: -2, boxShadow: '0 10px 30px rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}