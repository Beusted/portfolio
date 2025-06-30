'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone } from 'lucide-react'
import { personalData } from '@/data/personal'

const About = () => {
  const skillIcons = {
    Frontend: <Globe className="w-6 h-6" />,
    Backend: <Code className="w-6 h-6" />,
    Database: <Database className="w-6 h-6" />,
    Mobile: <Smartphone className="w-6 h-6" />
  }
  
  const skills = personalData.skills.map(skill => ({
    ...skill,
    icon: skillIcons[skill.category as keyof typeof skillIcons] || <Code className="w-6 h-6" />
  }))

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {personalData.about.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              {personalData.about.journey.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-soft-beige dark:bg-gray-800 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-3">
                    <div className="text-forest-green dark:text-white mr-3">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-forest-green text-white dark:bg-gray-700 dark:text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 