'use client'

import { motion } from 'framer-motion'
import { personalData } from '@/data/personal'
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <Bubble delay={0} size="w-64 h-64" style={{ top: '10%', left: '15%' }} />
        <Bubble delay={0.2} size="w-48 h-48" style={{ top: '60%', right: '20%' }} />
        <Bubble delay={0.4} size="w-32 h-32" style={{ top: '30%', right: '30%' }} />
        <Bubble delay={0.6} size="w-40 h-40" style={{ bottom: '20%', left: '25%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300"
          >
            {personalData.hero.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
          >
            {personalData.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200"
          >
            {personalData.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {personalData.hero.description}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a
              href={personalData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personalData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              View My Work
            </a>
            <a
              href={personalData.hero.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-8 h-8 text-white/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero