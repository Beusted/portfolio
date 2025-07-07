'use client'

import { motion } from 'framer-motion'
import { personalData } from '@/data/personal'

const Bubble = ({ delay = 0, size = 'w-32 h-32', style }: { delay?: number; size?: string; style?: React.CSSProperties }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: 1,
      opacity: 0.7
    }}
    transition={{
      duration: 1,
      delay: delay,
      ease: 'easeOut'
    }}
    className={`bubble ${size}`}
    style={style}
  />
)

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <Bubble delay={0} size="w-64 h-64" style={{ top: '10%', left: '15%' }} />
        <Bubble delay={0.2} size="w-48 h-48" style={{ top: '60%', right: '20%' }} />
        <Bubble delay={0.4} size="w-32 h-32" style={{ top: '30%', right: '30%' }} />
        <Bubble delay={0.6} size="w-40 h-40" style={{ bottom: '20%', left: '25%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-3xl text-gray-300"
          >
            {personalData.hero.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent pb-8"
          >
            {personalData.name}
          </motion.h1>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero