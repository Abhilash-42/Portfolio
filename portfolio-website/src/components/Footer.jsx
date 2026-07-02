import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2024 Venkata Abhilash Kommana. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Abhilash-42"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhi-kommana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:abhikommana@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FiMail size={20} />
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="text-gray-400 hover:text-primary transition-colors duration-300 animate-bounce"
          >
            <FiArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer