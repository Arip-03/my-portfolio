import { motion } from 'framer-motion'
import profileImg from '../assets/profile2.jpg'

const stats = [
  { value: '4', label: 'Projects' },
  { value: '2', label: 'Years Exp' },
  { value: '3', label: 'Clients' },
  { value: '80%', label: 'Satisfaction' }
]

export default function About() {
  return (
    <section id='about' className='py-24 md:py-32 gradient-bg' style={{ backgroundColor: '#111111' }}>
      <div className='max-w-[1200px] mx-auto px-6 md:px-16'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Image with 3D animation */}
          <motion.div 
            className='order-2 lg:order-1'
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <motion.div
              className='relative'
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.4 }}
            >
              <div
                className='w-full max-w-md mx-auto rounded-3xl overflow-hidden'
                style={{ boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5)' }}
              >
                <img
                  src={profileImg}
                  alt='About Me'
                  className='w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover'
                />
              </div>
              
              {/* Stats overlay with stagger animation */}
              <motion.div
                className='absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-4'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                    className='px-2 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-[#1a1a1a] border border-white/10 text-center min-w-[60px] sm:min-w-[70px]'
                  >
<span className='block text-sm sm:text-lg font-bold'>{stat.value}</span>
                      <span className='block text-[10px] sm:text-xs text-gray-500'>{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content with staggered animation */}
          <div className='order-1 lg:order-2'>
            <motion.div
              initial={{ opacity: 0, x: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
              viewport={{ margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className='text-sm font-medium text-gray-500 uppercase tracking-widest'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                About Me
              </motion.span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className='text-4xl md:text-5xl font-bold mt-2 mb-6'
            >
              Creating beautiful digital experiences
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className='text-gray-400 text-lg mb-6 leading-relaxed'
            >
              I'm a passionate web designer and developer with a keen eye for detail and a love for creating beautiful, functional digital experiences. My approach combines technical expertise with creative design to deliver websites that not only look great but also perform exceptionally.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className='text-gray-500 mb-8 leading-relaxed'
            >
              With expertise in UI/UX design, frontend development, and branding, I bring a comprehensive skill set to every project. I believe in creating designs that are not only visually appealing but also intuitive and user-friendly.
            </motion.p>

            <motion.div 
              className='flex flex-wrap gap-4'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a 
                href='#contact' 
                className='inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors'
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
              <motion.a 
                href='#portfolio' 
                className='inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-colors'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}