import React from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-white">SP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Saurabh Patil</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-medium">
            Software Engineer | Full Stack Developer
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate full-stack developer specializing in building scalable web applications 
            with modern technologies. I love creating elegant solutions to complex problems 
            and turning ideas into reality through code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-blue-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white"
            >
              View Projects
              <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </button>

            <button className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              <Download size={18} />
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { Icon: Github, href: 'https://github.com', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:saurabh@example.com', label: 'Email' }
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
