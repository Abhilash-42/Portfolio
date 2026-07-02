import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCertificate, FaAward } from 'react-icons/fa'
import { SiOracle, SiMicrosoft, SiInfosys } from 'react-icons/si'

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      title: 'Oracle AI Foundations Associate',
      issuer: 'Oracle',
      icon: SiOracle,
      color: '#F80000',
    },
    {
      title: 'Oracle AI Agent Studio Foundations Associate',
      issuer: 'Oracle',
      icon: SiOracle,
      color: '#F80000',
    },
    {
      title: 'Microsoft AI Skills Fest 2026',
      issuer: 'Microsoft',
      icon: SiMicrosoft,
      color: '#00A4EF',
    },
    {
      title: 'Programming in C',
      issuer: 'Infosys Springboard',
      icon: SiInfosys,
      color: '#0078D4',
    },
    {
      title: 'Programming Fundamentals using Python',
      issuer: 'Infosys Springboard',
      icon: SiInfosys,
      color: '#0078D4',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-primary/5 to-[#0a0a0a]" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2 variants={itemVariants} className="section-title">
          <span className="gradient-text">Certifications</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card p-6 text-center group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-400" />
              
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <cert.icon className="text-3xl" style={{ color: cert.color }} />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              
              <div className="mt-4 flex justify-center">
                <FaCertificate className="text-primary/50 group-hover:text-primary/80 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certifications