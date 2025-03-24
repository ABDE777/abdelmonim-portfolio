
import React, { useEffect, useRef } from "react";
import { Download } from "lucide-react";

const AboutMe = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center py-24 px-6 md:px-12 bg-[#111827]"
    >
      <div ref={sectionRef} className="max-w-6xl w-full mx-auto animate-on-scroll">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Text Section */}
          <div className="md:w-1/2 space-y-8">
            <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: "200ms" }}>
              <span className="text-purple-500 text-sm tracking-wider uppercase font-semibold">
                À PROPOS DE MOI
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                Abd El Monim<br />Mazgoura
              </h2>
            </div>

            {/* Description - Shortened */}
            <p className="text-lg text-gray-300 leading-relaxed animate-fade-in" style={{ animationDelay: "400ms" }}>
              Développeur <span className="text-purple-400 font-semibold">Full Stack</span> en formation,
              passionné par le web et les technologies modernes. 
              Mon objectif : créer des expériences numériques performantes et innovantes.
            </p>

            <div className="space-y-4">
              <h3 className="text-white text-xl font-semibold">💡 Ce que je fais :</h3>
              <ul className="text-gray-300 space-y-2 list-disc pl-5">
                <li><span className="text-purple-400 font-semibold">Développement Web</span></li>
                <li><span className="text-purple-400 font-semibold">Apprentissage Continu</span></li>
                <li><span className="text-purple-400 font-semibold">Collaboration & Innovation</span></li>
              </ul>
            </div>

            {/* CTA Buttons with 3D Effect */}
            <div className="flex flex-col sm:flex-row gap-4 w-full animate-fade-in" style={{ animationDelay: "600ms" }}>
              <a 
                href="#contact" 
                className="button-3d bg-purple-600 text-white rounded-md hover:bg-purple-700 text-center font-medium transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md"
              >
                Me Contacter
              </a>
              <a 
                href="#projects" 
                className="button-3d border border-purple-600 text-purple-500 rounded-md hover:bg-purple-600/10 text-center font-medium transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md"
              >
                Voir Projets
              </a>
              <a 
                href="/resume.pdf" 
                download 
                className="button-3d flex items-center justify-center gap-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 font-medium w-full sm:w-auto transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md"
                onClick={(e) => {
                  // Check if the file exists, if not, prevent the default action
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.onabort = () => {
                    e.preventDefault();
                    alert("Le CV n'est pas disponible pour le moment.");
                  };
                }}
              >
                <Download className="w-4 h-4" />
                Télécharger CV
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div ref={imageRef} className="md:w-1/2 flex justify-center animate-slide-in-right relative" style={{ animationDelay: "300ms" }}>
            <div className="absolute -top-12 right-0 bg-gray-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-purple-500/20 z-20 animate-float">
              <p className="text-white font-medium">Développeur Full Stack<br />(Phase d'apprentissage)</p>
            </div>

            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden relative">
              <div className="w-full h-full overflow-hidden rounded-full border-4 border-purple-500/30 relative z-10">
                <div className="w-full h-full rounded-full overflow-hidden" style={{ background: "linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(91, 33, 182, 0.3))" }}>
                  <img 
                    src="/lovable-uploads/img.png" 
                    alt="Abd El Monim Mazgoura"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/400x400?text=Abd+El+Monim";
                    }}
                  />
                </div>
              </div>

              {/* Circular gradient border */}
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-purple-500/50" style={{ transform: "scale(1.2)" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
