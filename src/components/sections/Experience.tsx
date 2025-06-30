'use client'

import { motion } from 'framer-motion'
import { Calendar, Trophy } from 'lucide-react'
import { Experience as ExperienceType } from '@/data/types'

const Experience = () => {
  const experiences: ExperienceType[] = [
    {
      id: '1',
      company: 'NTL Precision',
      position: 'Software Engineer Intern - Data Systems',
      startDate: '2025-06-02',
      endDate: '2025-08-31',
      description: 'Designed and implemented scalable full-stack ERP platform using Next.js/React/TypeScript, achieving significant performance improvements and code reduction.',
      technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase'],
      achievements: [
        'Achieved 83% code reduction through modular architecture and component reusability',
        'Reduced query latency from 10s to 1s (10x improvement) through database optimization',
        'Eliminated N+1 queries through batch fetching and Map-based lookup tables',
        'Delivered end-to-end user experience with responsive design and real-time search'
      ]
    },
    {
      id: '2',
      company: 'Theta Tau, Phi Epsilon Chapter',
      position: 'PNM President',
      startDate: '2025-02-01',
      endDate: '2025-05-25',
      description: 'Led as central support figure for the team, guiding peers and empowering others to succeed through consistent leadership.',
      technologies: ['Leadership', 'Project Management', 'Communication', 'Team Building'],
      achievements: [
        'Acted as primary liaison between team and organizational leadership',
        'Ensured transparent communication and alignment on goals and expectations',
        'Collaborated closely with fellow board members on key initiatives',
        'Successfully guided team members and answered questions to empower success'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in software engineering, building impactful solutions and growing technical expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-forest-green"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-forest-green rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-soft-beige dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {experience.position}
                      </h3>
                      <h4 className="text-lg font-semibold text-forest-green dark:text-white mb-2">
                        {experience.company}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(experience.startDate).toLocaleDateString()} - {
                      experience.endDate 
                        ? new Date(experience.endDate).toLocaleDateString()
                        : 'Present'
                    }
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-forest-green text-white px-2 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700 dark:text-white mb-2">
                      <Trophy className="w-4 h-4 mr-2 text-forest-green dark:text-white" />
                      <span className="font-medium">Key Achievements:</span>
                    </div>
                    {experience.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-forest-green dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Beusted/resume/blob/main/brianngo_resume_fall2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-forest-green text-white rounded-lg hover:bg-forest-green-light transition-colors font-medium"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 