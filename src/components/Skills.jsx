import React from 'react';
import { motion } from 'framer-motion';
import { 
  ReactIcon, 
  Html5, 
  Css3, 
  Javascript, 
  Bootstrap, 
  MaterialUi,
  Nodejs,
  Express,
  Java,
  Api,
  Database,
  GitAlt,
  Aws,
  Bot,
  CursorLogo
} from './TechIcons';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const skillsData = {
    Frontend: [
      { name: 'React.js', icon: ReactIcon, color: 'text-cyan-400' },
      { name: 'HTML', icon: Html5, color: 'text-orange-500' },
      { name: 'CSS', icon: Css3, color: 'text-blue-500' },
      { name: 'JavaScript', icon: Javascript, color: 'text-yellow-400' },
      { name: 'Bootstrap', icon: Bootstrap, color: 'text-purple-600' },
      { name: 'Material UI', icon: MaterialUi, color: 'text-blue-400' },
      { name: 'EJS', icon: Javascript, color: 'text-gray-400' }
    ],
    Backend: [
      { name: 'Node.js', icon: Nodejs, color: 'text-green-500' },
      { name: 'Express.js', icon: Express, color: 'text-gray-300' },
      { name: 'Java', icon: Java, color: 'text-red-500' },
      { name: 'REST API', icon: Api, color: 'text-blue-400' },
      { name: 'Maven', icon: Java, color: 'text-orange-600' }
    ],
    Database: [
      { name: 'SQL', icon: Database, color: 'text-blue-600' }
    ],
    Tools: [
      { name: 'Git', icon: GitAlt, color: 'text-orange-600' },
      { name: 'AWS', icon: Aws, color: 'text-yellow-500' },
      { name: 'ChatGPT', icon: Bot, color: 'text-green-400' },
      { name: 'Cursor AI', icon: CursorLogo, color: 'text-purple-400' },
      { name: 'Vercel', icon: ReactIcon, color: 'text-gray-300' }
    ]
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="glass rounded-xl p-6 border border-white/10 hover:border-electric-blue/50 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center gradient-text">
                {category}
              </h3>
              
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="skill-card flex items-center space-x-3 cursor-pointer"
                  >
                    <div className={`w-8 h-8 ${skill.color} flex items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors`}>
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white font-medium transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Skill Bars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 glass rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Level</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Frontend Development', level: 90 },
              { name: 'Backend Development', level: 85 },
              { name: 'Database Management', level: 75 },
              { name: 'API Development', level: 88 }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-electric-blue font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 1 }}
                    className="h-full bg-gradient-to-r from-electric-blue to-electric-purple rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
