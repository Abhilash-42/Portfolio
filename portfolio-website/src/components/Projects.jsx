import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { FaChartLine, FaSchool, FaRobot } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'ChainSol',
      description: 'Turning global market chaos into clear enterprise clarity. A Fabric IQ reasoning agent that maps geopolitical disruption data directly to your product lines in real time.',
      icon:  FaChartLine,
      technologies: ['Python', 'Pandas', 'Streamlit', 'Markdown'],
      github: 'https://github.com/Abhilash-42',
      color: '#FF6B6B',
    },
    {
      title: 'Smart Student Management',
      description: 'A Student Academic & Attendance Management System developed using Python, Flask, and MongoDB. This project helps manage student academic records, marks, attendance, and performance analytics through a simple web dashboard interface.',
      icon: FaSchool,
      technologies: ['Python', 'Flask', 'MongoDB', 'ReportLab', 'FE:HTML,CSS,JavaScript'],
      github: 'https://github.com/Abhilash-42/Smart_Management_System',
      live: 'https://smart-management-system-9kzi.onrender.com',
      color: '#4ECDC4',
    },
    {
      title: 'Automation Workflows',
      description: 'Building workflow automations using n8n and APIs to automate repetitive tasks, notifications, and integrations.',
      icon: FaRobot,
      technologies: ['n8n', 'REST APIs', 'Automation'],
      github: 'https://github.com/Abhilash-42/ChainSol',
      color: '#FF7A00',
    },
  ]

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-primary/5 to-[#0a0a0a]" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2 variants={itemVariants} className="section-title">
          My <span className="gradient-text">Projects</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-card p-6 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
              
              <div className="flex items-center gap-3 mb-4">
                <project.icon className="text-3xl" style={{ color: project.color }} />
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <FiGithub /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
