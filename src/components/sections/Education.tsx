'use client'

import { motion } from 'framer-motion'
import { MapPin, Landmark, BookText, GraduationCap } from 'lucide-react'

const Education = () => {
  return (
    <section id="education" className="py-20">
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
          <div className="bg-forest-green rounded-lg shadow-lg p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  California State University - Fullerton
                </h3>
                <p className="text-xl text-white font-semibold mb-2">
                  Bachelor of Science in Computer Science
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-white/80 mb-4">
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Expected Graduation: May 2026
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Fullerton, CA
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <BookText className="w-5 h-5 mr-2" />
                  Relevant Coursework
                </h4>
                <ul className="space-y-2">
                  <li className="text-white/90 flex items-start">
                    <span className="text-white mr-2 mt-1 flex-shrink-0">•</span>
                    Artificial Intelligence
                  </li>
                  <li className="text-white/90 flex items-start">
                    <span className="text-white mr-2 mt-1 flex-shrink-0">•</span>
                    Algorithm Engineering
                  </li>
                  <li className="text-white/90 flex items-start">
                    <span className="text-white mr-2 mt-1 flex-shrink-0">•</span>
                    Software Engineering
                  </li>
                  <li className="text-white/90 flex items-start">
                    <span className="text-white mr-2 mt-1 flex-shrink-0">•</span>
                    Operating Systems
                  </li>
                  <li className="text-white/90 flex items-start">
                    <span className="text-white mr-2 mt-1 flex-shrink-0">•</span>
                    Database Systems
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Landmark className="w-5 h-5 mr-2" />
                  Organizations
                </h4>
                <ul className="space-y-2">
                  <li className="text-white/90 flex items-start">
                    <span className="text-white mr-2 mt-1 flex-shrink-0">•</span>
                    Theta Tau - Engineering Society (PNM President)
                  </li>
                  <li className="text-white/90 flex items-start">
                    <span className="text-white mr-2 mt-1 flex-shrink-0">•</span>
                    PASA (Pilipinx-American Student Association)
                  </li>
                  <li className="text-white/90 flex items-start">
                    <span className="text-white mr-2 mt-1 flex-shrink-0">•</span>
                    VSA (Vietnamese Student Union)
                  </li>
                  <li className="text-white/90 flex items-start">
                    <span className="text-white mr-2 mt-1 flex-shrink-0">•</span>
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
