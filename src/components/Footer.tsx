import { motion } from 'framer-motion'

const quickLinks = ['Home', 'About', 'Skills', 'Services', 'Contact']

const servicesLinks = ['Web Design', 'Web Development', 'UI/UX Design', 'Branding']

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className='gradient-bg' style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className='max-w-[1200px] mx-auto px-6 md:px-16 py-16'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12'>
          {/* Brand Section */}
          <motion.div 
            className='md:col-span-2'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.a
              href='#home'
              className='text-2xl font-semibold tracking-tight inline-block mb-4'
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#home')
              }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              Portfolio<span className='text-gray-500'>.</span>
            </motion.a>
            <motion.p 
              className='text-gray-500 mb-6 max-w-md leading-relaxed'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Creating beautiful, functional, and user-friendly websites that help businesses achieve their online goals.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              className='flex gap-3'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                { href: 'https://github.com/Arip-03', icon: 'fab fa-github' },
                { href: 'https://www.facebook.com/abdel.arip.srpd?mibextid=ZbWKwL', icon: 'fab fa-facebook-f' },
                { href: 'https://linkedin.com', icon: 'fab fa-linkedin-in' }
              ].map((social, i) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500'
                  whileHover={{ scale: 1.15, y: -4, backgroundColor: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.3)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <i className={social.icon} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className='text-sm font-medium text-gray-400 uppercase tracking-wider mb-4'>Quick Links</h4>
            <ul className='space-y-3'>
              {quickLinks.map((link, i) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(`#${link.toLowerCase()}`)
                    }}
                    className='text-gray-500 hover:text-white transition-colors'
                    whileHover={{ x: 5, color: '#fff' }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className='text-sm font-medium text-gray-400 uppercase tracking-wider mb-4'>Services</h4>
            <ul className='space-y-3'>
              {servicesLinks.map((service, i) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <span className='text-gray-500'>{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className='pt-8 border-t border-white/5'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-600 text-sm'>
              © {currentYear} Portfolio. All Rights Reserved.
            </p>
            <p className='text-gray-600 text-sm'>
              Designed & Built with passion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}