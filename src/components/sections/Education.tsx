'use client'

import { motion } from 'framer-motion'

const Education = () => {
  return (
    <section id="education" className="py-20 bg-warm-beige dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic background in Computer Science and technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  California State University, Fullerton
                </h3>
                <p className="text-xl text-forest-green dark:text-white font-semibold mb-2">
                  Bachelor of Science in Computer Science
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <span className="mr-1">📅</span>
                    Expected Graduation: May 2026
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">📍</span>
                    Fullerton, CA
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="mr-2">📚</span>
                  Relevant Coursework
                </h4>
                <ul className="space-y-2">
                  <li className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-forest-green dark:text-white mr-2 mt-1 flex-shrink-0">•</span>
                    Artificial Intelligence
                  </li>
                  <li className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-forest-green dark:text-white mr-2 mt-1 flex-shrink-0">•</span>
                    Algorithm Engineering
                  </li>
                  <li className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-forest-green dark:text-white mr-2 mt-1 flex-shrink-0">•</span>
                    Software Engineering
                  </li>
                  <li className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-forest-green dark:text-white mr-2 mt-1 flex-shrink-0">•</span>
                    Operating Systems
                  </li>
                  <li className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-forest-green dark:text-white mr-2 mt-1 flex-shrink-0">•</span>
                    Database Systems
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="mr-2">🏛️</span>
                  Organizations
                </h4>
                <ul className="space-y-2">
                  <li className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-forest-green dark:text-white mr-2 mt-1 flex-shrink-0">•</span>
                    Theta Tau - Engineering Society (PNM President)
                  </li>
                  <li className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-forest-green dark:text-white mr-2 mt-1 flex-shrink-0">•</span>
                    PASA (Pilipinx-American Student Association)
                  </li>
                  <li className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-forest-green dark:text-white mr-2 mt-1 flex-shrink-0">•</span>
                    VSA (Vietnamese Student Union)
                  </li>
                  <li className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-forest-green dark:text-white mr-2 mt-1 flex-shrink-0">•</span>
                    ACM (Association for Computing Machinery)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
