import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import profileImg from '../assets/profile1.png'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  const scrollToWork = () => {
    const element = document.querySelector('#portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id='home'
      className='min-h-screen flex items-center relative overflow-hidden gradient-hero pt-20'
    >
      {/* Animated gradient orbs - reduced on mobile */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        <div className='absolute top-[-10%] right-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full gradient-orb-1 animate-float-1' />
        <div className='absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full gradient-orb-2 animate-float-2' />
        <div className='hidden md:block absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full gradient-orb-3 animate-float-1' style={{ animationDelay: '-5s' }} />
        <div className='hidden md:block absolute top-[10%] right-[30%] w-[200px] h-[200px] rounded-full gradient-orb-4 animate-float-2' style={{ animationDelay: '-10s' }} />
      </div>

      <div className='max-w-[1200px] mx-auto px-6 md:px-16 relative z-10 w-full'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='order-2 lg:order-1 text-center lg:text-left'
          >
            <motion.div variants={itemVariants} className='mb-4 md:mb-6'>
              <span className='inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-gray-400'>
                <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
                Available for work
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 leading-[1.1] tracking-tight'
            >
              Hi I'm<br />
              <span className='text-gray-500'>Abdel-Arip</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className='text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 md:mb-6'
            >
              Web Designer
            </motion.p>

            <motion.p
              variants={itemVariants}
              className='text-gray-500 text-sm md:text-lg max-w-lg mx-auto lg:mx-0 mb-6 md:mb-8 leading-relaxed'
            >
              I craft beautiful, functional, and user-friendly websites that help businesses stand out in the digital world.
            </motion.p>

            <motion.div variants={itemVariants} className='flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4'>
              <motion.button
                onClick={scrollToWork}
                className='inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full text-sm md:text-base font-medium'
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Work
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className='flex gap-3 md:gap-4 mt-8 md:mt-12 justify-center lg:justify-start'>
              <motion.a
                href='https://github.com/Arip-03'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors'
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <i className='fab fa-github text-lg' />
              </motion.a>
              <motion.a
                href='https://www.facebook.com/abdel.arip.srpd?mibextid=ZbWKwL'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors'
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <i className='fab fa-facebook-f text-lg' />
              </motion.a>
              <motion.a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors'
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <i className='fab fa-linkedin-in text-lg' />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='order-1 lg:order-2 flex justify-center'
          >
            <div className='relative'>
              <motion.div
                className='w-[250px] h-[320px] sm:w-[300px] sm:h-[380px] md:w-[350px] md:h-[420px] lg:w-[380px] lg:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden'
                style={{
                  boxShadow: '0 30px 60px -15px rgba(0,0,0,0.5)',
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={profileImg}
                  alt='Abdel-Arip'
                  className='w-full h-full object-cover'
                  style={{ backgroundColor: '#333' }}
                />
              </motion.div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className='absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-md border border-white/10'
                style={{ boxShadow: '0 15px 30px -8px rgba(0,0,0,0.5)' }}
              >
                <span className='block text-lg md:text-2xl font-bold'>4</span>
                <span className='block text-xs md:text-sm text-gray-500'>Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className='absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block'
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className='w-6 h-10 rounded-full border border-gray-700 flex justify-center pt-2'
        >
          <div className='w-1 h-2 bg-gray-600 rounded-full' />
        </motion.div>
      </motion.div>
    </section>
  )
}