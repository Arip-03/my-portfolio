import { useState } from 'react'
import { motion } from 'framer-motion'
import fitnessImg from '../assets/fitness-app.jpeg'
import eventImg from '../assets/event-management.png'
import weddingImg from '../assets/wedding-system.png'
import coffeeImg from '../assets/Coffee app.png'

const projects = [
  {
    title: 'Fitness App',
    category: 'Mobile',
    image: fitnessImg
  },
  {
    title: 'Coffee App',
    category: 'Mobile',
    image: coffeeImg
  },
  {
    title: 'Event Management',
    category: 'Web App',
    image: eventImg
  },
  {
    title: 'Wedding System',
    category: 'Web App',
    image: weddingImg
  }
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'webapp', label: 'Web App' }
]

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  return (
    <section id='portfolio' className='py-24 md:py-32 gradient-bg' style={{ backgroundColor: '#0a0a0a' }}>
      <div className='max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20'>
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <span className='text-sm font-medium text-gray-500 uppercase tracking-widest'>
            Portfolio
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-2'>
            My Projects
          </h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className='flex flex-wrap justify-center gap-3 mb-12'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-white text-black'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
          {projects
            .filter(project => {
              if (filter === 'all') return true
              if (filter === 'mobile') return project.category === 'Mobile'
              if (filter === 'webapp') return project.category === 'Web App'
              return true
            })
            .map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5
              }}
              className='group relative rounded-3xl overflow-hidden cursor-pointer'
              style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.4)' }}
              whileHover={{ y: -8 }}
            >
              <div className='aspect-[4/3] overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                />
              </div>
              
              {/* Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-xs text-gray-400 uppercase tracking-wider mb-2'>
                  {project.category}
                </span>
                <h4 className='text-xl font-semibold text-white'>{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}