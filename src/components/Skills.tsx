import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML', icon: 'fab fa-html5', color: '#e34f26' },
  { name: 'CSS', icon: 'fab fa-css3-alt', color: '#264de4' },
  { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e' },
  { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
  { name: 'TypeScript', icon: 'fab fa-js', color: '#3178c6' },
  { name: 'Figma', icon: 'fab fa-figma', color: '#f24e1e' },
  { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
  { name: 'Tailwind', icon: 'fab fa-css3-alt', color: '#06b6d4' },
  { name: 'Video Editing', icon: 'fas fa-video', color: '#8b5cf6' },
]

export default function Skills() {
  return (
    <section id='skills' className='py-24 md:py-32 gradient-bg' style={{ backgroundColor: '#0a0a0a' }}>
      <div className='max-w-[1200px] mx-auto px-6 md:px-16'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className='text-center mb-16'>
            <span className='text-sm font-medium text-gray-500 uppercase tracking-widest'>
              Skills
            </span>
            <h2 className='text-4xl md:text-5xl font-bold mt-2'>
              My Expertise
            </h2>
          </div>

          {/* Circular Cards Grid with Staggered Animation */}
          <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 md:gap-6 justify-items-center'>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.4,
                  type: 'spring',
                  stiffness: 200
                }}
                className='group relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center cursor-pointer'
                style={{
                  background: `linear-gradient(135deg, ${skill.color}20 0%, ${skill.color}10 100%)`,
                  border: `2px solid ${skill.color}40`,
                  boxShadow: `0 4px 20px rgba(0,0,0,0.3), 0 0 20px ${skill.color}15`
                }}
                whileHover={{ 
                  scale: 1.15,
                  boxShadow: `0 8px 30px rgba(0,0,0,0.4), 0 0 40px ${skill.color}50`
                }}
              >
                <motion.i 
                  className={`${skill.icon} text-2xl md:text-3xl`} 
                  style={{ color: skill.color }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                />
                
                {/* Skill name below */}
                <span className='absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity'>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}