'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import { Project } from '@/data/types'

const Projects = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Custom Digital Smartwatch',
      description: 'Xi-Smartwatch is a touchscreen smartwatch developed by the Xi Class of Theta Tau, featuring three primary applications: a Timer & Stopwatch App with reliable clock functionalities, a Random Number Generator utility app for games and decision-making, and Golden Pony, a Flappy Bird-inspired mini-game designed to boost be a fun way to relieve stress for college students.',
      technologies: ['Python', 'Pygame', 'Raspberry Pi', 'Linux', 'Bash', 'Git'],
      githubUrl: 'https://github.com/Beusted/Xi-Smartwatch',
      featured: true,
      completedAt: '2025-04-29'
    },
    {
      id: '2',
      title: 'Full-Stack ERP Platform',
      description: 'I created a scalable enterprise platform with modular architecture to streamline business operations and improve efficiency. It features a user-friendly interface, real-time data synchronization, and advanced reporting capabilities.',
      technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Beusted/erp-platform',
      featured: true,
      completedAt: '2025-08-01'
    },
    {
      id: '3',
      title: 'ZeroSpam',
      description: 'Developed a comprehensive email spam filtering system as a capstone project for computer science coursework. Built an interactive web application using Streamlit that implements machine learning classification algorithms to automatically detect and filter spam emails.',
      technologies: ['Python', 'Streamlit', 'Scikit-learn', 'pandas', 'numpy', 'NLTK', 'Naive Bayes', 'Git'],
      githubUrl: 'https://github.com/Beusted/ZeroSpam',
      featured: true,
      completedAt: '2025-05-22',
      hidden: true
    },
    {
      id: '4',
      title: 'AWS: Duckling Supplier Diversity',
      description: 'Developed a comprehensive email spam filtering system as a capstone project for computer science coursework. Built an interactive web application using Streamlit that implements machine learning classification algorithms to automatically detect and filter spam emails.',
      technologies: ['Python', 'Streamlit', 'Scikit-learn', 'pandas', 'numpy', 'NLTK', 'Naive Bayes', 'Git'],
      githubUrl: 'https://github.com/Beusted/ZeroSpam',
      featured: true,
      completedAt: '2025-05-22'
    },
    {
      id: '5',
      title: 'Talk-To-Me:Real-Time Multilingual Translator',
      description: 'Built a real-time multilingual voice translation platform with 2 operational modes (single-device and multi-user), integrating 3 AI models (Deepgram STT, GPT-3.5 for translation, OpenAI TTS) to enable live conversations across 5 languages with sub-100ms transcription latency. Won 2nd place in LiveKit\'s "Most Advanced Use of LiveKit" category at CalHacks 12.0.',
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Python', 'Deepgram STT', 'OpenAI TTS', 'LiveKit', 'JWT'],
      githubUrl: 'https://github.com/Beusted/talk-to-me',
      featured: true,
      completedAt: '2025-10-26'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.filter(project => !project.hidden).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-forest-green rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-white/80 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(project.completedAt).toLocaleDateString()}
                    </div>
                  </div>
                  {project.featured && (
                    <span className="dark:bg-[#3c7a4d]/30 text-white px-2 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-white/90 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="dark:bg-[#3c7a4d]/30 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-white/80 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-white/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  )}
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
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Beusted"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-forest-green text-white rounded-lg hover:bg-forest-green-light transition-colors font-medium"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 