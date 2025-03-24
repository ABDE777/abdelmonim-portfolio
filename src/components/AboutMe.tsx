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
            <div className="space-y-2 animate-slide-in-left">
              <span className="text-purple-500 text-sm tracking-wider uppercase font-semibold">
                À PROPOS DE MOI
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                Abd El Monim<br />Mazgoura
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed animate-fade-in">
              Développeur <span className="text-purple-400 font-semibold">Full Stack</span> en formation,
              passionné par le web et les technologies modernes. 
              Mon objectif : créer des expériences numériques performantes et innovantes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full animate-fade-in">
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
              >
                <Download className="w-4 h-4" />
                Télécharger CV
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div ref={imageRef} className="md:w-1/2 flex justify-center animate-slide-in-right relative">
            {/* Carte flottante */}
            <div className="absolute -top-16 right-0 bg-gray-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-purple-500/20 z-20 animate-float">
              <p className="text-white font-medium">Développeur Full Stack<br />(Phase d'apprentissage)</p>
            </div>

            {/* Conteneur de l'image avec effet lumineux */}
            <div className="relative group">
              {/* Halo lumineux */}
              <div className="absolute inset-0 w-full h-full rounded-full bg-purple-500/30 blur-3xl opacity-50 group-hover:opacity-100 transition duration-500"></div>

              {/* Image */}
              <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-[6px] border-purple-500/50 shadow-2xl transition-transform transform group-hover:scale-105 duration-500">
                <img 
                  src="/lovable-uploads/1.png" 
                  alt="Abd El Monim Mazgoura"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/500x500?text=Abd+El+Monim";
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
