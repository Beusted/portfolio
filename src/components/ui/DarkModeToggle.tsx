'use client'

import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useDarkMode } from './DarkModeProvider'

const DarkModeToggle = () => {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-warm-beige dark:bg-gray-800 text-forest-green dark:text-gray-200 hover:bg-soft-beige dark:hover:bg-gray-700 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  )
}

export default DarkModeToggle 