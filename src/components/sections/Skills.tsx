'use client'

import { motion } from 'framer-motion'
import { Code, Database, Brain, Wrench } from 'lucide-react'
import { personalData } from '@/data/personal'

const Skills = () => {
  const skillIcons = {
    'Languages': <Code className="w-6 h-6" />,
    'ML/Data Science': <Brain className="w-6 h-6" />,
    'Full-Stack & Cloud': <Database className="w-6 h-6" />,
    'Tools & Platforms': <Wrench className="w-6 h-6" />
  }
  
  const skills = personalData.skills.map(skill => ({
    ...skill,
    icon: skillIcons[skill.category as keyof typeof skillIcons] || <Code className="w-6 h-6" />
  }))

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
        </motion.div>

        {/* Main Container - Dark forest green background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-forest-green rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              /* Skill Type Container - Semi-transparent white overlay */
              <motion.div
                key={`skill-${skill.category}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="dark:bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md"
              >
                {/* Skill Header - Category name and icon */}
                <div className="flex items-center mb-3">
                  <div className="text-white mr-3">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {skill.category}
                  </h4>
                </div>
                {/* Individual Skills Container - Technology tags */}
                <div className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block dark:bg-[#3c7a4d]/30 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"
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
    </section>
  )
}

export default Skills 