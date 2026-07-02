import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'

const Contact = () => {
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

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'abhikommana@gmail.com',
      link: 'mailto:abhikommana@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 9121872599',
      link: 'tel:+919121872599',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: '@abhi-kommana',
      link: 'https://www.linkedin.com/in/abhi-kommana',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: '@Abhilash-42',
      link: 'https://github.com/Abhilash-42',
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-primary/5 to-[#0a0a0a]" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <motion.p variants={itemVariants} className="text-gray-400 mb-8 text-lg">
              I'm always interested in hearing about new opportunities, collaborations, 
              or just having a conversation about AI, ML, and automation!
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 flex items-center gap-3 group hover:border-primary/50 transition-all duration-300"
                >
                  <info.icon className="text-primary text-xl group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-xs text-gray-400">{info.label}</p>
                    <p className="text-sm font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-white resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <FiSend /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact