'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / documentHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-2 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      {/* Vertical line */}
      <div className="relative w-0.5 h-80 bg-white/20 rounded-full overflow-hidden">
        {/* Progress fill */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-forest-green rounded-full"
          style={{ height: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
        
        {/* Moving dot */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-forest-green rounded-full shadow-lg shadow-forest-green/30 border-2 border-white"
          style={{ top: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      
      {/* Percentage label */}
      <motion.div
        className="absolute -right-12 top-0 text-xs text-gray-300 font-medium"
        style={{ top: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      >
        {Math.round(scrollProgress)}%
      </motion.div>
    </motion.div>
  )
}

export default ScrollIndicator 