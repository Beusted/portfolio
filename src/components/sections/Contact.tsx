'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Download } from 'lucide-react'
import { personalData } from '@/data/personal'

const Contact = () => {
  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      name: 'Email',
      subtext: 'ngobrian17@gmail.com',
      url: `mailto:${personalData.email}`,
      color: 'hover:text-forest-green'
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: personalData.social.github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: personalData.social.linkedin,
      color: 'hover:text-forest-green'
    },
    {
      icon: <Download className="w-6 h-6" />,
      name: 'Resume',
      url: '/resume/resume.pdf',
      color: 'hover:text-forest-green'
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-4 gap-4">
            {contactLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-[116px] ${link.subtext ? '' : 'justify-center'}`}
              >
                <div className="text-forest-green dark:text-white mb-2">
                  {link.icon}
                </div>
                <span className="font-medium text-gray-900 dark:text-white">
                  {link.name}
                </span>
                {link.subtext && (
                  <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {link.subtext}
                  </span>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 