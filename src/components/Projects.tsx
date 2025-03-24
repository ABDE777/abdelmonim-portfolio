import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "SITE WEB DE NOTRE CLUB",
    description: "Un site web dynamique pour présenter les activités, événements et membres de notre club. Conçu pour être interactif et facile à naviguer.",
    url: "https://clubitisfo.vercel.app/",
    image: "/lovable-uploads/project1.jpg",
    tags: ["HTML", "CSS", "JavaScript", "React", "Vercel"]
  },
  {
    id: 2,
    title: "My Linktree",
    description: "Une page personnalisée qui regroupe tous mes liens importants (réseaux sociaux, projets, contacts) en un seul endroit.",
    url: "https://abde777.github.io/MY-LINKTREE/GITHUB.html",
    image: "/lovable-uploads/project2.jpg",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 3,
    title: "ABDE MARKET",
    description: "Une plateforme e-commerce simple et intuitive pour explorer une variété de produits. Idéal pour les achats en ligne.",
    url: "https://abde777.github.io/ABDE-MARKET/",
    image: "/lovable-uploads/project3.jpg",
    tags: ["HTML", "CSS", "JavaScript", "E-commerce"]
  },
  {
    id: 4,
    title: "Mini Site",
    description: "Un petit site web pour démontrer mes compétences en développement front-end. Conçu pour être léger et réactif.",
    url: "https://abde777.github.io/tp/",
    image: "/lovable-uploads/project4.jpg",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 5,
    title: "AB Store",
    description: "Une boutique en ligne moderne avec une interface utilisateur conviviale. Parfait pour découvrir et acheter des produits en ligne.",
    url: "https://abde777.github.io/AB-STORE/iindex.html",
    image: "/lovable-uploads/project5.jpg",
    tags: ["HTML", "CSS", "JavaScript", "E-commerce"]
  },
  {
    id: 6,
    title: "Python Types Game",
    description: "Un jeu interactif pour apprendre et pratiquer l'identification des types de variables en Python. Idéal pour les débutants en programmation.",
    url: "https://abde777.github.io/python-type-game/py%20game/index.html",
    image: "/lovable-uploads/project6.jpg",
    tags: ["Python", "JavaScript", "HTML", "CSS", "Game", "Education"]
  }
];

const tagIcons = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  React: <FaReact className="text-blue-400" />,
  Vercel: <SiVercel className="text-black" />,
  Python: <FaPython className="text-blue-600" />,
  "E-commerce": <span>🛒</span>,
  Game: <span>🎮</span>,
  Education: <span>📚</span>,
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

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

    return () => {
      clearTimeout(timer);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleImageError = (e) => {
    const target = e.target;
    target.onerror = null; // Prevent infinite loop
    target.src = "https://via.placeholder.com/800x450?text=Project+Image";
  };

  return (
    <section 
      id="projects" 
      className="py-24 bg-gradient-to-br from-[#12162B] to-[#1A1F2C] text-white px-6 md:px-12 overflow-hidden"
    >
      <div 
        ref={sectionRef}
        className="max-w-6xl mx-auto animate-on-scroll"
      >
        <div className="text-center mb-16">
          <span className="inline-block text-portfolio-accent text-sm tracking-wider uppercase font-semibold">
            Mes Projets
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">
            Projets en Vedette
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          <div className="relative z-10 lg:order-2">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              <a 
                href={projects[activeProject].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative glass-card overflow-hidden transform rotate-1 hover:rotate-0 transition-all duration-500 border-2 border-white/10 shadow-xl"
              >
                <AspectRatio ratio={16/9} className="bg-black/20">
                  {isLoading ? (
                    <Skeleton className="w-full h-full" />
                  ) : (
                    <img 
                      src={projects[activeProject].image} 
                      alt={projects[activeProject].title}
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                  )}
                </AspectRatio>
              </a>
              
              <div className="absolute -right-4 -top-4 animate-float w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                {activeProject + 1}/{projects.length}
              </div>
            </div>
          </div>
          
          <div className="lg:order-1 animate-slide-in-left">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[activeProject].tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-white/10 border border-white/5"
                  >
                    {tagIcons[tag]}
                    <span className="ml-2">{tag}</span>
                  </span>
                ))}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-white">
                {projects[activeProject].title}
              </h3>
              
              <p className="text-gray-300 text-lg">
                {projects[activeProject].description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a 
                  href={projects[activeProject].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visiter le Site
                </a>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={prevProject}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
                    aria-label="Projet précédent"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={nextProject}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
                    aria-label="Projet suivant"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={cn(
                "group relative transition-all duration-300",
                activeProject === index ? "scale-110" : "opacity-50 hover:opacity-75"
              )}
              aria-label={`Aller au projet ${index + 1}`}
            >
              <div className={cn(
                "w-16 h-2 rounded-full bg-white/20 overflow-hidden",
                activeProject === index ? "bg-white/40" : ""
              )}>
                <div className={cn(
                  "h-full bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300", 
                  activeProject === index ? "w-full" : "w-0 group-hover:w-1/4"
                )}></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
