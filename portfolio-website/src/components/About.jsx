import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUser, FiTarget, FiHeart } from 'react-icons/fi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-primary/5" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2 variants={itemVariants} className="section-title">
          About <span className="gradient-text">Me</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Professional Introduction */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-6 group hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <FiUser className="text-primary text-3xl" />
              <h3 className="text-xl font-semibold">Who I Am</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              I'm Venkata Abhilash Kommana, a dedicated AI & Machine Learning student at KIET. 
              My passion lies in creating intelligent solutions that solve real-world problems.
            </p>
          </motion.div>
          
          {/* Career Objective */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-6 group hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <FiTarget className="text-primary text-3xl" />
              <h3 className="text-xl font-semibold">Career Objective</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              To leverage my skills in AI, Machine Learning, and automation to develop 
              innovative solutions that drive efficiency and create meaningful impact.
            </p>
          </motion.div>
          
          {/* Personal Summary */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-6 group hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <FiHeart className="text-primary text-3xl" />
              <h3 className="text-xl font-semibold">My Passion</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Beyond coding, I'm fascinated by how AI can transform industries. 
              I enjoy building automation systems and exploring new technologies.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About