import { useState } from 'react'
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
  { name: 'PHP', icon: 'fab fa-php', color: '#777bb4' },
  { name: 'MySQL', icon: 'fas fa-database', color: '#4479a1' },
]

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const handleSkillClick = (skillName: string) => {
    setActiveSkill(activeSkill === skillName ? null : skillName)
  }

  return (
    <section id='skills' className='py-16 sm:py-20 md:py-32 gradient-bg' style={{ backgroundColor: '#0a0a0a' }}>
      <div className='max-w-[1200px] mx-auto px-4 sm:px-6 md:px-16'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className='text-center mb-8 sm:mb-12 md:mb-16'>
            <span className='text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest'>
              Skills
            </span>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2'>
              My Expertise
            </h2>
          </div>

          <div className='grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10 gap-3 sm:gap-4 md:gap-6 justify-items-center'>
            {skills.map((skill, index) => {
              const isActive = activeSkill === skill.name
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.08, 
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 150,
                    damping: 12
                  }}
                  onClick={() => handleSkillClick(skill.name)}
                  className={`group relative w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center cursor-pointer select-none ${
                    isActive ? 'scale-[1.15]' : 'hover:scale-[1.15]'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}20 0%, ${skill.color}10 100%)`,
                    border: `2px solid ${isActive ? skill.color : skill.color + '40'}`,
                    boxShadow: isActive 
                      ? `0 8px 30px rgba(0,0,0,0.4), 0 0 40px ${skill.color}50` 
                      : `0 4px 20px rgba(0,0,0,0.3), 0 0 20px ${skill.color}15`,
                    transition: 'all 0.3s ease'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.i 
                    className={`${skill.icon} text-lg xs:text-xl sm:text-2xl md:text-3xl ${
                      isActive ? 'animate-bounce' : ''
                    }`}
                    style={{ 
                      color: skill.color,
                      transform: isActive ? 'scale(1.2) rotate(5deg)' : 'scale(1)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  
                  <span 
                    className={`absolute -bottom-5 xs:-bottom-6 sm:-bottom-6 left-1/2 -translate-x-1/2 text-[10px] xs:text-xs text-gray-400 whitespace-nowrap transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {skill.name}
                  </span>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}