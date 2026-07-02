import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaCalendar, FaMapMarker } from 'react-icons/fa'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationData = [
    {
      degree: 'Bachelor of Technology',
      field: 'Artificial Intelligence & Machine Learning',
      institution: 'KIET',
      year: '2025 - 2028',
      location: 'Kakinada, India',
    },
    {
      degree: 'Diploma in Computer Science',
      field: 'Computer Science',
      institution: 'KIET',
      year: '2021 - 2024',
      location: 'Kakinada, India',
    },
    {
      degree: 'SSC',
      field: 'Secondary School Certificate',
      institution: 'Z.P.P High School, Vanapalli',
      year: '2020',
      location: 'Vanapalli, India',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-primary/5 to-[#0a0a0a]" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2 variants={itemVariants} className="section-title">
          <span className="gradient-text">Education</span>
        </motion.h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/30" />
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 md:w-1/2" />
                
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-white text-sm" />
                  </div>
                </div>
                
                <div className="flex-1 md:w-1/2 pl-10 md:pl-0">
                  <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-primary font-medium mb-2">{edu.field}</p>
                    <p className="text-gray-300 mb-3">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-primary" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarker className="text-primary" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Education