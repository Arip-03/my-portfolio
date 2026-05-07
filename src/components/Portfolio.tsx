import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Code, Layers, Zap, Palette, Database } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import coffeeImg from '../assets/Coffee app.png'
import weddingImg from '../assets/wedding-system.png'
import thaiBoranImg from '../assets/ThaiBoran.png'
import portfolioImg from '../assets/my-portfolio.png'

const projects = [
  {
    id: 1,
    title: 'Thai Boran',
    category: 'Web App',
    image: thaiBoranImg,
    description: 'A premium spa landing page for Thai Boran Massage, an authentic Thai massage business in Marawi City, Philippines. The site showcases services, pricing, and provides booking via Facebook links with a sophisticated dark luxury aesthetic.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Google Fonts'],
    features: [
      'Service showcase with animated cards',
      'Dynamic pricing display with combo packages',
      'Hero slideshow with rotating backgrounds',
      'Scroll-triggered fade-in animations',
      'Testimonials carousel with infinite scroll',
      'Mobile-responsive navigation',
      'SEO optimized with Schema.org markup',
      'Contact integration via phone & Facebook'
    ],
    demoUrl: 'https://thai-boran.vercel.app/',
    githubUrl: 'https://github.com/Arip-03/ThaiBoran'
  },
  {
    id: 2,
    title: 'Coffee App',
    category: 'Mobile',
    image: coffeeImg,
    description: 'A beautifully crafted coffee ordering app that brings the café experience to your fingertips. Browse menus, customize orders, and track deliveries in real-time with an intuitive interface.',
    technologies: ['Figma', 'Flutter', 'Dart', 'Firebase'],
    features: [
      'Intuitive menu browsing',
      'Custom drink customization',
      'Real-time order tracking',
      'Loyalty rewards system',
      'Store locator with map view'
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/Arip-03'
  },
  {
    id: 3,
    title: 'Wedding System',
    category: 'Web App',
    image: weddingImg,
    description: 'An elegant wedding planning platform that helps couples organize their special day. Includes guest management, seating arrangements, and timeline coordination all in one beautiful interface.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    features: [
      'Guest list management',
      'Seating arrangement tools',
      'Budget tracking',
      'Timeline scheduler',
      'Vendor directory'
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/Arip-03'
  },
  {
    id: 4,
    title: 'My Portfolio',
    category: 'Web App',
    image: portfolioImg,
    description: 'A modern, responsive personal portfolio website showcasing skills, projects, and services. Built with React, TypeScript, and Tailwind CSS with smooth animations and an elegant dark theme design.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Interactive project showcase with modal details',
      'Smooth scroll animations and transitions',
      'Responsive design for all devices',
      'Contact form with email integration',
      'Modern dark luxury aesthetic',
      'Animated skill badges',
      'Social media integration',
      'SEO optimized'
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/Arip-03/my-portfolio'
  }
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'webapp', label: 'Web App' }
]

const techIcons: Record<string, any> = {
  'Figma': Palette,
  'React Native': Code,
  'Flutter': Layers,
  'React': Code,
  'Next.js': Code,
  'TypeScript': Code,
  'Firebase': Zap,
  'Node.js': Code,
  'Dart': Code,
  'PostgreSQL': Database,
  'Prisma': Layers,
  'Tailwind CSS': Palette,
  'HTML5': Code,
  'CSS3': Code,
  'JavaScript': Code,
  'Google Fonts': Palette
}

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true
    if (filter === 'mobile') return project.category === 'Mobile'
    if (filter === 'webapp') return project.category === 'Web App'
    return true
  })

  return (
    <>
      <section id='portfolio' className='py-24 md:py-32 gradient-bg' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20'>
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

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
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
                onClick={() => setSelectedProject(project)}
              >
                <div className='aspect-[4/3] overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                </div>
                
                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='text-xs text-gray-400 uppercase tracking-wider mb-2'>
                    {project.category}
                  </span>
                  <h4 className='text-xl font-semibold text-white mb-2'>{project.title}</h4>
                  <motion.button
                    className='inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors'
                    whileHover={{ x: 4 }}
                  >
                    View Details
                    <ExternalLink size={14} />
                  </motion.button>
                </div>

                <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8'
            onClick={() => setSelectedProject(null)}
          >
            <div className='absolute inset-0 bg-black/80 backdrop-blur-sm' />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className='relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111111] rounded-3xl border border-white/10 shadow-2xl'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='sticky top-0 z-10 bg-[#111111]/95 backdrop-blur-md border-b border-white/10 p-4 md:p-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <span className='text-xs text-gray-500 uppercase tracking-wider'>{selectedProject.category}</span>
                    <h2 className='text-2xl md:text-3xl font-bold text-white mt-1'>{selectedProject.title}</h2>
                  </div>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className='w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all'
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>
              </div>

              <div className='p-4 md:p-8 space-y-8'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className='rounded-2xl overflow-hidden'
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className='w-full h-auto object-cover'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className='text-lg font-semibold text-white mb-3'>Description</h3>
                  <p className='text-gray-400 leading-relaxed'>{selectedProject.description}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className='text-lg font-semibold text-white mb-4'>Technologies Used</h3>
                  <div className='flex flex-wrap gap-2'>
                    {selectedProject.technologies.map((tech) => {
                      const IconComponent = techIcons[tech] || Code
                      return (
                        <motion.span
                          key={tech}
                          className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300'
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        >
                          <IconComponent size={14} />
                          {tech}
                        </motion.span>
                      )
                    })}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className='text-lg font-semibold text-white mb-4'>Key Features</h3>
                  <ul className='space-y-3'>
                    {selectedProject.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.05 }}
                        className='flex items-start gap-3 text-gray-400'
                      >
                        <span className='w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0' />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className='flex flex-col sm:flex-row gap-4'
                >
                  <motion.a
                    href={selectedProject.demoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors'
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-colors'
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SiGithub size={18} />
                    View Code
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}