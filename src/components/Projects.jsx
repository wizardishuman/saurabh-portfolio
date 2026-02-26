import React, { useState } from "react";
import { Github } from "lucide-react";

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "GreenShelf – Nursery E-Commerce Platform",
      description:
        "AI-powered shopping platform with ML recommendations and AR/VR visualization for plant shopping.",
      tech: ["React.js","Node.js","Express.js","SQL","Java APIs","ML","Three.js"],
      
      images: [
        "/src/assets/images/greenshelf/IMG1.jpeg",
        "/src/assets/images/greenshelf/IMG2.jpeg",
        "/src/assets/images/greenshelf/IMG3.jpeg",
        "/src/assets/images/greenshelf/IMG4.jpeg"
      ]
    },
    {
      id: 2,
      title: "Tripify – Hotel Property Portal",
      description:
        "Comprehensive hotel booking platform with real-time availability, pricing, and reservation management.",
      tech: ["React.js","Node.js","MongoDB","Express.js","JWT","Stripe API"],
      github: "https://github.com/wizardishuman/MAJOR_PROJECT",
      images: [
        "/src/assets/images/tripify/IMG1.png",
        "/src/assets/images/tripify/IMG2.png",
        "/src/assets/images/tripify/IMG3.png",
        "/src/assets/images/tripify/IMG4.png"
      ]
    },
    {
      id: 3,
      title: "Confess It Out – Anonymous Platform",
      description:
        "Anonymous confession platform with real-time messaging, user authentication, and secure data handling.",
      tech: ["React.js","Socket.io","Express.js","MongoDB","JWT Auth"],
      github: "https://github.com/wizardishuman/confess-it-out",
      images: [
        "/src/assets/images/confessitout/conf1.png",
        "/src/assets/images/confessitout/conf2.png",
        "/src/assets/images/confessitout/conf3.png",
        "/src/assets/images/confessitout/conf4.png"
      ]
    }
  ];

  const [indexes, setIndexes] = useState({});

  const next = (id, length) => {
    setIndexes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) === length - 1 ? 0 : (prev[id] || 0) + 1
    }));
  };

  const prev = (id, length) => {
    setIndexes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) === 0 ? length - 1 : (prev[id] || 0) - 1
    }));
  };

  return (
    <section style={{ padding: "80px 20px", background: "#000" }}>
      <div style={{ maxWidth: "1200px", margin: "auto" }}>

        <h2 style={{
          textAlign: "center",
          fontSize: "40px",
          color: "white",
          marginBottom: "60px"
        }}>
          Featured Projects
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px"
        }}>

          {projects.map(p => {

            const index = indexes[p.id] || 0;

            return (
              <div key={p.id} style={{
                background: "#111",
                borderRadius: "20px",
                padding: "25px",
                border: "1px solid #222"
              }}>

                {/* IMAGE SLIDER */}
                <div style={{
                  position: "relative",
                  height: "220px",
                  background: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                  marginBottom: "20px"
                }}>

                  <img
                    src={p.images[index]}
                    alt=""
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain"
                    }}
                  />

                  {/* LEFT BUTTON */}
                  <button
                    onClick={() => prev(p.id, p.images.length)}
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "rgba(0,0,0,0.6)",
                      border: "none",
                      color: "white",
                      fontSize: "22px",
                      padding: "6px 12px",
                      cursor: "pointer",
                      borderRadius: "8px"
                    }}>
                    ‹
                  </button>

                  {/* RIGHT BUTTON */}
                  <button
                    onClick={() => next(p.id, p.images.length)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "rgba(0,0,0,0.6)",
                      border: "none",
                      color: "white",
                      fontSize: "22px",
                      padding: "6px 12px",
                      cursor: "pointer",
                      borderRadius: "8px"
                    }}>
                    ›
                  </button>

                </div>

                <h3 style={{ color: "white", marginBottom: "10px" }}>
                  {p.title}
                </h3>

                <p style={{ color: "#aaa", marginBottom: "20px" }}>
                  {p.description}
                </p>

                {/* TECH STACK */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "20px"
                }}>
                  {p.tech.map((t, i) => (
                    <span key={i} style={{
                      fontSize: "12px",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      background: "#1e1e1e",
                      color: "#4da6ff"
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* GITHUB BUTTON */}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "10px 20px",
                    borderRadius: "10px",
                    background: "#2563eb",
                    color: "white",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <Github size={16}/> Code
                </a>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Projects;