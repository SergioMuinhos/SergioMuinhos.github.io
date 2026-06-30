import { useState, useEffect } from 'react'
import PortfolioHero from '@/components/ui/portfolio-hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Synchronize document dark class on state changes
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div
      className="min-h-screen transition-colors duration-300 font-sans selection:bg-[#C3E41D] selection:text-black"
      style={{
        backgroundColor: isDark ? 'hsl(0 0% 0%)' : 'hsl(0 0% 98%)',
        color: isDark ? 'hsl(0 0% 100%)' : 'hsl(0 0% 10%)',
      }}
    >
      {/* Google Fonts preload */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@750&family=Antic&family=Inter:wght@400;500;600;700&display=swap"
      />

      {/* Hero Section */}
      <PortfolioHero isDark={isDark} setIsDark={setIsDark} />

      {/* Main Content */}
      <main className="relative z-10">
        {/* About Section */}
        <div className="border-t border-neutral-200/20 dark:border-neutral-800/20">
          <About />
        </div>

        {/* Experience Section */}
        <div className="border-t border-neutral-200/20 dark:border-neutral-800/20">
          <Experience />
        </div>

        {/* Projects Section */}
        <div className="border-t border-neutral-200/20 dark:border-neutral-800/20">
          <Projects />
        </div>

        {/* Education Section */}
        <div className="border-t border-neutral-200/20 dark:border-neutral-800/20">
          <Education />
        </div>

        {/* Skills Section */}
        <div className="border-t border-neutral-200/20 dark:border-neutral-800/20">
          <Skills />
        </div>

        {/* Contact Section */}
        <div className="border-t border-neutral-200/20 dark:border-neutral-800/20">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-neutral-500 dark:text-neutral-400 border-t border-neutral-200/10 dark:border-neutral-800/10">
        <p>© {new Date().getFullYear()} Sergio Muiños García. Todos los derechos reservados.</p>
        <p className="mt-1 font-mono text-[10px]">Desarrollado con React, TypeScript y Tailwind CSS v4</p>
      </footer>
    </div>
  )
}

export default App
