'use client'

import { motion } from 'framer-motion'
import { Calendar, Trophy } from 'lucide-react'
import { Experience as ExperienceType } from '@/data/types'
import Image from 'next/image'

const Experience = () => {
  const experiences: ExperienceType[] = [
    {
      id: '5',
      company: 'NEX',
      position: 'Software Engineering Internship',
      startDate: '2025-10-01',
      endDate: 'Present',
      description: 'Implemented centralized pricing systems and built high-performance web scraping tools with advanced anti-detection capabilities.',
      technologies: ['Python', 'Selenium', 'API Development', 'Web Scraping', 'Automation'],
      achievements: [
        'Implemented centralized pricing system with multiple strategies (flat-rate, resolution-based, time-based) and complexity multipliers, adding cost breakdowns and usage tracking to API responses.',
        'Built a high-performance Pinterest web scraper using Python and Selenium that extracts high-resolution images with anti-detection features (randomized human-like behavior, proxy rotation), multi-instance support, and automated Chrome profile generation, successfully scraping thousands of images across multiple keywords with real-time CSV export.'
      ]
    },
    {
      id: '1',
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
      ],
      image: 'csufthetatau_logo.jpg'
    },
    {
      id: '2',
      company: 'AWS AI Summer Camp',
      position: 'Attendee',
      startDate: '2025-07-27',
      endDate: '2025-08-31',
      description: 'Led as central support figure for the team, guiding peers and empowering others to succeed through consistent leadership.',
      technologies: ['Leadership', 'Project Management', 'AWS', 'Python', 'Streamlit', 'Plotly', 'Scikit-Learn', 'Retrieval-Augmented Generation (RAG)'],
      achievements: [
        'Developed and deployed an end-to-end AI platform using Python, Streamlit, and Plotly, delivering real-time procurement analytics via a responsive, full-stack web interface.',
        'Implemented a TF-IDF + cosine similarity engine (Scikit-Learn) to vectorize and compare over 300K procurement records, boosting supplier matching accuracy with >0.4 similarity thresholds.',
        'Addressed critical supplier diversity challenges and solved procurement inefficiency for local small businesses around Cal Poly SLO by developing an AI solution that automates the supplier discovery process, previously reliant on manual research, to help increase their small business participation towards their desired goal.',
        'Architected a scalable serverless pipeline using AWS S3, Lambda, and Bedrock Claude 3.0 with Retrieval-Augmented Generation (RAG) to power a context-aware procurement recommendation chatbot'
      ]
    },
    {
      id: '3',
      company: 'Verdantic',
      position: 'Founder',
      startDate: '2025-06-02',
      endDate: 'Present',
      description: 'Designed and implemented scalable full-stack ERP platform using Next.js/React/TypeScript, achieving significant performance improvements and code reduction.',
      technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase'],
      achievements: [
        'Licensed to a manufacturing company in Silicon Valley.',
        'Reduced client team workload by 66%, enabling employees to reallocate time toward higher-value projects.',
        'Designed and implemented a scalable full-stack ERP platform using Next.js/React/TypeScript, which achieved 83% code reduction through modular architecture and component reusability across order management, production, and inventory systems.',
        'Engineering a high-performance database layer with PostgreSQL/Supabase, eliminating N+1 queries through batch fetching and implemented Map-based lookup tables to enhance data retrieval loading time from 40 seconds to 3 seconds.',
        'Delivering an end-to-end user experience with responsive design, real-time search algorithms, and automated workflow orchestration, which drove operational efficiency across the manufacturing pipeline'
      ]
    },
    {
      id: '4',
      company: 'CalHacks 12.0',
      position: 'Hacker',
      startDate: '2025-10-24',
      endDate: '2025-10-26',
      description: 'Built a real-time multilingual voice translation platform enabling live conversations across 5 languages with advanced AI integration and WebRTC audio streaming.',
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Python', 'WebRTC', 'Deepgram STT', 'GPT-3.5', 'OpenAI TTS', 'LiveKit', 'JWT'],
      achievements: [
        'Won 2nd place in LiveKit\'s "Most Advanced Use of LiveKit" category.',
        'Atteneded an Invite-Only Y Combinator\'s Networking Event.',
        'Built a real-time multilingual voice translation platform with 2 operational modes (single-device and multi-user), integrating 3 AI models (Deepgram STT, GPT-3.5 for translation, OpenAI TTS) to enable live conversations across 5 languages with sub-100ms transcription latency',
        'Developed full-stack application using Next.js 15/React 19 frontend (2,300+ lines across 21 TypeScript components) and Python backend with WebRTC audio streaming, achieving 40fps speaker visualizations through volume-based exponential smoothing',
        'Engineered real-time state synchronization system with 11-action reducer pattern and LiveKit participant attributes for dynamic translator instantiation, enabling just-in-time language switching and audio routing across concurrent users',
        'Implemented token-based access control with JWT authentication, role-based publishing permissions, and RPC-enabled client-server communication to manage audio track filtering and participant-specific caption rendering'
      ]
    }
  ]
 
  // Sort experiences by ID in descending order (highest to lowest)
  const sortedExperiences = [...experiences].sort((a, b) => parseInt(b.id) - parseInt(a.id))

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
      <div className="max-w-[77%] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
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

          {sortedExperiences.map((experience) => {
            const isOddId = parseInt(experience.id) % 2 === 1
            return (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative flex items-center mb-12"
              >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-forest-green rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

              {/* Full width container with content on one side */}
              <div className="ml-12 md:ml-0 w-full md:flex">
                {/* Content side */}
                <div className={`md:w-1/2 ${isOddId ? 'md:order-2 md:pl-10' : 'md:order-1 md:pr-10'}`}>
                  <div className="bg-forest-green rounded-lg p-5 shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {experience.position}
                      </h3>
                      <h4 className="text-base font-semibold text-white mb-2">
                        {experience.company}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-white/80 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(experience.startDate).toLocaleDateString()} - {
                      experience.endDate === 'Present' || !experience.endDate
                        ? 'Present'
                        : new Date(experience.endDate).toLocaleDateString()
                    }
                  </div>

                  <p className="text-sm text-white/90 mb-4">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="dark:bg-[#3c7a4d]/30 text-white px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-white mb-2">
                      <Trophy className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Key Achievements:</span>
                    </div>
                    {experience.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-white/90 text-xs">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                  </div>
                </div>
                
                {/* Image/blank side */}
                <div className={`hidden md:flex md:w-1/2 items-center justify-center ${isOddId ? 'md:order-1 md:pr-10' : 'md:order-2 md:pl-10'}`}>
                  {experience.image && (
                    <Image
                      src={`/images/homepage/${experience.image}`}
                      alt={`${experience.company} logo`}
                      width={280}
                      height={280}
                      className="rounded-lg"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/brianngo_resume_2025.pdf"
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