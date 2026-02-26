import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
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

  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'AISSMS IOIT, Pune',
      period: '2022 – 2026',
      cgpa: '7.17',
      type: 'graduation'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Maharashtra Board',
      period: '2020 – 2022',
      percentage: '78.17%',
      type: 'hsc'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Maharashtra Board',
      period: '2019 – 2020',
      percentage: '85.20%',
      type: 'ssc'
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)'
              }}
              className="glass rounded-xl p-6 border border-white/10 hover:border-electric-blue/50 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-electric-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-electric-blue to-electric-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <div className="text-center relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                  {edu.degree}
                </h3>
                
                <p className="text-electric-purple font-semibold mb-3">
                  {edu.institution}
                </p>

                <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Pune</span>
                  </div>
                </div>

                {/* Grade/Percentage */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="inline-block glass px-4 py-2 rounded-full border border-electric-blue/30"
                >
                  <span className="text-electric-blue font-semibold">
                    {edu.cgpa || edu.percentage}
                  </span>
                  <span className="text-gray-400 text-sm ml-1">
                    {edu.cgpa ? 'CGPA' : ''}
                  </span>
                </motion.div>

                {/* Special Badge for Current Education */}
                {edu.type === 'graduation' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="mt-3"
                  >
                    <span className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400 font-medium">
                      Currently Pursuing
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-electric-blue rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-electric-purple rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-xl p-8 max-w-3xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Academic Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              My academic journey has been marked by consistent growth and a passion for technology. 
              From building foundational knowledge in school to specializing in Information Technology, 
              I've developed strong analytical and problem-solving skills that complement my technical expertise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="glass p-4 rounded-lg">
                <div className="text-2xl font-bold gradient-text mb-1">5+</div>
                <div className="text-sm text-gray-400">Years of Coding</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-2xl font-bold gradient-text mb-1">10+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-2xl font-bold gradient-text mb-1">3.5+</div>
                <div className="text-sm text-gray-400">GPA in Major Courses</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
