import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const skills = [
    { icon: Code, name: 'Full Stack Development', color: 'text-electric-blue' },
    { icon: Database, name: 'REST APIs', color: 'text-electric-purple' },
    { icon: Globe, name: 'Scalable Applications', color: 'text-blue-400' },
    { icon: Zap, name: 'Problem Solving', color: 'text-purple-400' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative glass rounded-2xl p-8 group">
              <div className="aspect-square bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-electric-blue to-electric-purple rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">SP</span>
                  </div>
                  <p className="text-gray-300">Professional Photo</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 bg-gradient-to-r from-electric-blue/20 to-electric-purple/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Crafting Digital Experiences
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Software Engineer with expertise in full-stack development. 
                My journey in tech has been driven by curiosity and a desire to create impactful 
                solutions that solve real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                With a strong foundation in modern web technologies, I specialize in building 
                scalable applications that deliver exceptional user experiences. I believe in 
                writing clean, maintainable code and staying updated with the latest industry trends.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Skill Badges */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-4 rounded-lg border border-white/10 hover:border-electric-blue/50 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <skill.icon className={`w-5 h-5 ${skill.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
