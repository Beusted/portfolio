import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'
import TableOfContents from '@/components/ui/TableOfContents'

export default function Home() {
  return (
    <main className="min-h-screen">
      <TableOfContents />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
        <p className="text-sm">
          Engineered by Brian Ngo :) | Last Updated: November 2025
        </p>
      </footer>
    </main>
  )
}
