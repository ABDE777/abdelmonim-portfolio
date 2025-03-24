
import React, { useEffect, useRef } from "react";
import { Globe } from "lucide-react";

const skills = [
  { 
    name: "HTML", 
    icon: <i className="bi bi-filetype-html text-2xl" style={{ color: "#E34F26" }}></i>, 
    color: "#E34F26",
    level: 90,
    description: "Langage de balisage utilisé pour structurer le contenu des pages web."
  },
  { 
    name: "CSS", 
    icon: <i className="bi bi-filetype-css text-2xl" style={{ color: "#1572B6" }}></i>, 
    color: "#1572B6",
    level: 85,
    description: "Langage de style utilisé pour définir la présentation des documents HTML."
  },
  { 
    name: "Bootstrap", 
    icon: <i className="bi bi-bootstrap text-2xl" style={{ color: "#7952B3" }}></i>, 
    color: "#7952B3",
    level: 80,
    description: "Framework CSS populaire pour créer des sites web réactifs et mobiles en premier."
  },
  { 
    name: "JavaScript", 
    icon: <i className="bi bi-filetype-js text-2xl" style={{ color: "#F7DF1E" }}></i>, 
    color: "#F7DF1E", 
    level: 75,
    description: "Langage de programmation qui permet d'implémenter des fonctionnalités complexes sur les pages web."
  },
  { 
    name: "MySQL", 
    icon: <i className="bi bi-database-fill text-2xl" style={{ color: "#4479A1" }}></i>, 
    color: "#4479A1",
    level: 65,
    description: "Système de gestion de base de données relationnelle open-source."
  },
  { 
    name: "Git", 
    icon: <i className="bi bi-git text-2xl" style={{ color: "#F05032" }}></i>, 
    color: "#F05032",
    level: 70,
    description: "Système de contrôle de version distribué pour suivre les changements dans le code source."
  },
  { 
    name: "GitHub", 
    icon: <i className="bi bi-github text-2xl" style={{ color: "#FFFFFF" }}></i>, 
    color: "#FFFFFF",
    level: 85,
    description: "Plateforme d'hébergement pour le développement de logiciels et le contrôle de version utilisant Git."
  },
  { 
    name: "Python", 
    icon: <i className="bi bi-filetype-py text-2xl" style={{ color: "#3776AB" }}></i>, 
    color: "#3776AB",
    level: 60,
    description: "Langage de programmation polyvalent qui met l'accent sur la lisibilité du code."
  },
  { 
    name: "PHP", 
    icon: <i className="bi bi-filetype-php text-2xl" style={{ color: "#777BB4" }}></i>, 
    color: "#777BB4",
    level: 55,
    description: "Langage de script côté serveur conçu pour le développement web."
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      itemsRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section 
      id="skills" 
      className="py-24 bg-portfolio-dark px-6 md:px-12"
      style={{ backgroundColor: "#0B0F19" }}
    >
      <div 
        ref={sectionRef}
        className="max-w-5xl mx-auto animate-on-scroll"
      >
        <div className="text-center mb-16">
          <span className="inline-block text-portfolio-accent text-sm tracking-wider uppercase font-semibold">
            MES COMPÉTENCES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight text-white">
            Compétences & Technologies
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              ref={el => itemsRef.current[index] = el}
              className="animate-on-scroll group perspective"
              style={{ 
                animationDelay: `${index * 100}ms`,
                perspective: "1000px" 
              }}
            >
              <div 
                className="relative h-full bg-[#12162B] rounded-xl overflow-hidden transform transition-all duration-500 
                          hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)] group-hover:-rotate-y-2 group-hover:rotate-x-12 
                          border border-[#282D45] preserve-3d"
                style={{
                  background: `linear-gradient(135deg, #12162B 0%, #171a2e 100%)`,
                  boxShadow: "0 10px 30px -8px rgba(0, 0, 0, 0.4)",
                  transform: "translateZ(0)",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Glowing border effect */}
                <div 
                  className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(90deg, ${skill.color}60, transparent, ${skill.color}40)`,
                    filter: "blur(8px)",
                    zIndex: -1
                  }}
                ></div>
                
                {/* Card content */}
                <div className="p-6 relative z-10">
                  <div 
                    className="w-12 h-12 flex items-center justify-center mx-auto rounded-xl mb-4 transform transition-transform duration-500 group-hover:scale-110"
                    style={{ 
                      background: `linear-gradient(135deg, ${skill.color}30 0%, ${skill.color}10 100%)`,
                      boxShadow: `0 10px 20px -10px ${skill.color}50`,
                      transform: "translateZ(20px)"
                    }}
                  >
                    {skill.icon}
                  </div>
                  
                  <div className="flex items-center justify-between mb-3 transform" style={{ transform: "translateZ(30px)" }}>
                    <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                    <span 
                      className="font-mono text-sm px-2 py-1 rounded-md bg-black/20 backdrop-blur-sm"
                      style={{ color: skill.color }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full h-2 bg-[#282D45] rounded-full overflow-hidden" style={{ transform: "translateZ(10px)" }}>
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out progress-bar"
                      style={{ 
                        width: "0%", 
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}80`,
                      }}
                      data-level={skill.level}
                    ></div>
                  </div>
                  
                  <p className="mt-4 text-gray-400 text-sm" style={{ transform: "translateZ(20px)" }}>
                    {skill.description}
                  </p>
                </div>
                
                {/* Light reflection effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ 
                    background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 80%)",
                    transform: "translateZ(5px)"
                  }}
                ></div>
                
                {/* Accent color at the bottom */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1.5 transform transition-transform duration-500 group-hover:scale-100"
                  style={{ 
                    backgroundColor: skill.color,
                    boxShadow: `0 0 15px ${skill.color}`,
                    transform: "scaleX(0.6) translateZ(0)",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Je continue constamment à élargir mes compétences et à me tenir au courant des dernières technologies de développement web.
          </p>
        </div>
      </div>

      {/* Add keyframes for progress bar animation */}
      <style>
        {`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .perspective {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        /* Add these rotation utility classes */
        .rotate-x-12 {
          transform: rotateX(12deg);
        }
        
        .-rotate-y-2 {
          transform: rotateY(-2deg);
        }
        
        /* Specific animation for progress bars */
        .progress-bar {
          animation: progress 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }
        
        /* Adjust the width of each progress bar based on its data attribute */
        .progress-bar[data-level="90"] { animation-name: progress90; }
        .progress-bar[data-level="85"] { animation-name: progress85; }
        .progress-bar[data-level="80"] { animation-name: progress80; }
        .progress-bar[data-level="75"] { animation-name: progress75; }
        .progress-bar[data-level="70"] { animation-name: progress70; }
        .progress-bar[data-level="65"] { animation-name: progress65; }
        .progress-bar[data-level="60"] { animation-name: progress60; }
        .progress-bar[data-level="55"] { animation-name: progress55; }
        
        @keyframes progress90 { from { width: 0%; } to { width: 90%; } }
        @keyframes progress85 { from { width: 0%; } to { width: 85%; } }
        @keyframes progress80 { from { width: 0%; } to { width: 80%; } }
        @keyframes progress75 { from { width: 0%; } to { width: 75%; } }
        @keyframes progress70 { from { width: 0%; } to { width: 70%; } }
        @keyframes progress65 { from { width: 0%; } to { width: 65%; } }
        @keyframes progress60 { from { width: 0%; } to { width: 60%; } }
        @keyframes progress55 { from { width: 0%; } to { width: 55%; } }
        `}
      </style>
    </section>
  );
};

export default Skills;
