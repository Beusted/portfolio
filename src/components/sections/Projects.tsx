'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import { Project } from '@/data/types'

const Projects = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Custom Digital Smartwatch',
      description: 'Led 18-person team to build fully functional smartwatch using Raspberry Pi Zero',
      longDescription: 'Led an 18-person team as Software Team Lead and Project Lead for Theta Tau to design, build, and deploy a fully functional smartwatch using Raspberry Pi Zero. Developed custom applications in Python and Pygame including games, utilities, and system integrations. Managed version control with GitHub and coordinated team contributions.',
      technologies: ['Python', 'Pygame', 'Raspberry Pi', 'Linux', 'Bash', 'Git'],
      githubUrl: 'https://github.com/Beusted/smartwatch-project',
      featured: true,
      completedAt: '2025-04-01'
    },
    {
      id: '2',
      title: 'Full-Stack ERP Platform',
      description: 'Scalable enterprise platform achieving 83% code reduction through modular architecture',
      longDescription: 'Designed and implemented scalable full-stack ERP platform using Next.js/React/TypeScript at NTL Precision. Engineered high-performance database layer with PostgreSQL/Supabase, achieving 10x query performance improvement through optimization. Delivered responsive design with real-time search and automated workflows.',
      technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Beusted/erp-platform',
      featured: true,
      completedAt: '2025-08-01'
    },
    {
      id: '3',
      title: 'AI/ML Portfolio Projects',
      description: 'Various machine learning projects using PyTorch and modern ML frameworks',
      longDescription: 'Collection of AI/ML projects developed during coursework and AWS AI Summer Camp. Includes computer vision applications using OpenCV and MediaPipe, data analysis with Pandas and NumPy, and deep learning models with PyTorch.',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'MediaPipe', 'Pandas', 'NumPy', 'AWS Bedrock'],
      githubUrl: 'https://github.com/Beusted/ml-projects',
      featured: false,
      completedAt: '2025-08-01'
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
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(project.completedAt).toLocaleDateString()}
                    </div>
                  </div>
                  {project.featured && (
                    <span className="bg-forest-green text-white px-2 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-forest-green text-white px-3 py-1 rounded-full text-sm"
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
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-forest-green dark:hover:text-white transition-colors"
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
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-forest-green dark:hover:text-white transition-colors"
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