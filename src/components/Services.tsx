import { motion } from 'framer-motion'
import { Palette, Code, Layers, Video } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Custom website design tailored to your brand identity. Creating visually stunning, modern designs that capture your unique value proposition.',
    features: ['UI/UX Design', 'Brand Identity', 'Responsive Layout', 'Prototyping']
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Clean, semantic code using modern technologies. Building responsive, fast-performing websites that work seamlessly across all devices.',
    features: ['Frontend Development', 'React/Next.js', 'Performance Optimization', 'API Integration']
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    description: 'User-centered design focused on creating intuitive and enjoyable experiences. Ensuring users can easily navigate and engage with your site.',
    features: ['User Research', 'Wireframing', 'Usability Testing', 'Design Systems']
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Creating and editing engaging video content using transitions, effects, color grading, and storytelling.',
    features: ['Video Editing', 'Motion Graphics', 'Color Grading', 'Sound Design']
  }
]

export default function Services() {
  return (
    <section id='services' className='py-24 md:py-32 gradient-bg' style={{ backgroundColor: '#111111' }}>
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
            Services
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-2'>
            What I Offer
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ margin: '-50px' }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.5,
                type: 'spring',
                stiffness: 100
              }}
              className='group relative p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500'
              whileHover={{ y: -12, scale: 1.02 }}
              style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}
            >
              <motion.div 
                className='w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center mb-3 md:mb-4'
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <service.icon size={24} className='text-gray-300' />
              </motion.div>
              
              <h3 className='text-base md:text-lg font-semibold mb-2 md:mb-3'>{service.title}</h3>
              <p className='text-gray-500 leading-relaxed text-xs md:text-sm mb-3 md:mb-4'>{service.description}</p>
              
              <ul className='space-y-2'>
                {service.features.map((feature) => (
                  <li key={feature} className='flex items-center gap-2 text-xs text-gray-400'>
                    <span className='w-1.5 h-1.5 rounded-full bg-gray-600' />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.div
                className='absolute bottom-6 left-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100'
                whileHover={{ x: 4 }}
              >
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                  <path d='M5 12h14M12 5l7 7-7 7' />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}