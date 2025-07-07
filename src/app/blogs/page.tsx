'use client'

import { motion } from 'framer-motion'
import Header from '@/components/sections/Header'

const BlogsPage = () => {
  return (
    <>
      <Header />
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Thoughts, insights, and experiences from my journey in software engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gray-300">
              Blog posts coming soon...
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default BlogsPage
