import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiPython, SiC, SiTensorflow, 
  SiGit, SiGithub, SiVisualstudiocode,
  SiPowerbi, SiStreamlit 
} from 'react-icons/si'
import { FaBrain, FaDatabase, FaRobot, FaChartLine } from 'react-icons/fa'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'C', icon: SiC, color: '#A8B9CC' },
      ],
    },
    {
      title: 'Machine Learning',
      skills: [
        { name: 'Machine Learning', icon: FaBrain, color: '#FF6B6B' },
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
        { name: 'LSTM', icon: FaChartLine, color: '#4ECDC4' },
        { name: 'Data Analysis', icon: FaDatabase, color: '#45B7D1' },
        { name: 'Recommendation Systems', icon: FaRobot, color: '#96CEB4' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', icon: SiGithub, color: '#F7DF1E' },
        { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
        { name: 'Google Colab', icon: SiGithub, color: '#F9AB00' },
        { name: 'Power BI', icon: SiPowerbi, color: '#F2C811' },
        { name: 'n8n', icon: FaRobot, color: '#FF6B6B' },
      ],
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
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-[#0a0a0a] to-[#0a0a0a]" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2 variants={itemVariants} className="section-title">
          My <span className="gradient-text">Skills</span>
        </motion.h2>
        
        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-300">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card p-4 flex flex-col items-center justify-center group cursor-pointer"
                  >
                    <skill.icon 
                      className="text-4xl mb-2 transition-colors duration-300 group-hover:text-primary"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills