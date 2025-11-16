'use client'

import { useState, useEffect } from 'react'
import { Home, User, Briefcase, Landmark, GraduationCap, Smartphone } from 'lucide-react'

interface Section {
  id: string
  title: string
  icon?: React.ReactNode
}

const sections: Section[] = [
  { id: 'hero', title: 'Home', icon: <Home className="w-4 h-4" /> },
  { id: 'about', title: 'About', icon: <User className="w-4 h-4" /> },
  // { id: 'skills', title: 'Skills', icon: <Code className="w-4 h-4" /> },
  { id: 'projects', title: 'Projects', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'experience', title: 'Experience', icon: <Landmark className="w-4 h-4" /> },
  { id: 'education', title: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
  { id: 'contact', title: 'Contact', icon: <Smartphone className="w-4 h-4" /> },
]

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // Section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that's most visible
        const visibleSections = entries.filter(entry => entry.isIntersecting)
        if (visibleSections.length > 0) {
          // Sort by intersection ratio and pick the most visible one
          const mostVisible = visibleSections.sort((a, b) => 
            b.intersectionRatio - a.intersectionRatio
          )[0]
          setActiveSection(mostVisible.target.id)
        }
      },
      {
        rootMargin: '-10% 0px -60% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75, 1.0],
      }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    // Scroll progress tracking
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / documentHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed left-7 top-[24%] -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex items-center gap-4">
        {/* Scroll Progress Line */}
        <div className="relative w-0.5 h-[230px] bg-white/20 rounded-t-full rounded-b-none overflow-hidden">
          {/* Progress fill */}
          <div
            className="absolute top-0 left-0 w-full bg-forest-green rounded-t-full rounded-b-none"
            style={{ height: `${scrollProgress}%` }}
          />
          
          {/* Moving dot */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-sm"
            style={{ 
              top: `${scrollProgress}%`,
              transform: 'translate(-50%, 0)',
              transition: 'none'
            }}
          />
        </div>

        {/* Table of Contents */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-3 shadow-lg">
          <div className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left transition-all duration-300 group relative ${
                  activeSection === section.id
                    ? 'bg-forest-green text-white shadow-lg shadow-forest-green/30 scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 hover:scale-102'
                }`}
              >
                {/* Magnifying glass glow effect for active section */}
                {activeSection === section.id && (
                  <div
                    className="absolute inset-0 bg-forest-green/20 rounded-lg blur-sm"
                  />
                )}
                
                <span className={`text-xs transition-all duration-300 ${
                  activeSection === section.id ? 'text-sm' : ''
                }`}>
                  {section.icon}
                </span>
                <span className={`font-medium transition-all duration-300 ${
                  activeSection === section.id ? 'text-sm font-semibold' : 'text-xs'
                }`}>
                  {section.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableOfContents 