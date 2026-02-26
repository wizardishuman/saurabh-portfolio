import React from 'react';
import './App.css';
import Projects from "./components/Projects"; // ✅ ADD THIS

const App = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">SP</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#<projects>">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      
      {/* HERO */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h3>Hello, I'm</h3>
              <h1>Hi, I'm <span className="gradient-text">Saurabh Patil</span></h1>
              <h2>Software Engineer | Full Stack Developer</h2>
              <p>
                Passionate full-stack developer specializing in building scalable web applications 
                with modern technologies. I love creating elegant solutions to complex problems 
                and turning ideas into reality through code.
              </p>

              <div className="hero-buttons">
                <button
                  className="btn-primary"
                  onClick={() =>
                    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  View Projects →
                </button>

                <button className="btn-secondary">
                  ↓ Download Resume
                </button>
              </div>

              <div className="social-links">
                  <a href="https://github.com/wizardishuman" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/saurabh-patil-768285375/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:saurabh.pvt.999@gmail.com">Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate Software Engineer with expertise in full-stack development. 
                I specialize in creating robust, scalable web applications using modern technologies 
                like React, Node.js, and cloud platforms.
              </p>
              <p>
                My journey in tech started with a curiosity about how things work on the internet, 
                and it has evolved into a career where I get to solve complex problems and build 
                products that make a difference.
              </p>

              <div className="skills-highlights">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">JAVA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section section-dark" id="experience">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Software Engineer Intern</h3>
                <h4>EasyLearning</h4>
                <p className="date">Jan 2024 - Present</p>
                <ul>
                  <li>Developed and maintained web applications using React and Node.js</li>
                  <li>Implemented responsive designs and improved user experience</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
                  <li>Participated in code reviews and contributed to technical discussions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS COMPONENT INSERTED */}
      <Projects />

      {/* SKILLS */}
      <section className="section section-dark" id="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">

            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-list">
                <div className="skill-item">
                  <span>React.js</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <span>JavaScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <span>JAVA</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-list">
                <div className="skill-item">
                  <span>Node.js</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <span>Express.js</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <span>MongoDB</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Bachelor of Engineering in Computer Science</h3>
                <h4>Pune University</h4>
                <p className="date">2021 - 2025</p>
                <p>Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management, Machine Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-dark" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>
                I'm always interested in hearing about new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <strong>Email:</strong> saurabh.pvt.999@gmail.com
                </div>
                <div className="contact-item">
                  <strong>Location:</strong> Pune, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">

            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <a href="https://github.com/wizardishuman" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/saurabh-patil-768285375/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:saurabh.pvt.999@gmail.com">Email</a>
            </div>

          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Saurabh Patil. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;