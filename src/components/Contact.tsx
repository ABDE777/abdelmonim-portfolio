
import React, { useRef, useEffect } from "react";
import { Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="contact" 
      className="py-24 bg-portfolio-dark px-6 md:px-12"
    >
      <div 
        ref={sectionRef}
        className="max-w-6xl mx-auto animate-on-scroll"
      >
        <div className="text-center mb-16">
          <span className="inline-block text-portfolio-accent text-sm tracking-wider uppercase font-semibold">
            Contactez-Moi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight text-portfolio-light">
            Me Contacter
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-portfolio-light">Discutons</h3>
              <p className="text-portfolio-light/70">
                N'hésitez pas à me contacter pour des collaborations, des questions ou simplement pour dire bonjour. Je vous répondrai dès que possible.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-accent/10 flex items-center justify-center">
                  <i className="bi bi-envelope text-portfolio-accent text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-light">Email</h4>
                  <a href="mailto:mazgouraabdalmounim@gmail.com" className="text-portfolio-accent hover:underline">
                    mazgouraabdalmounim@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-portfolio-light">Connectez-Vous Avec Moi</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Instagram", icon: <Instagram size={18} />, url: "https://www.instagram.com/techmo_x?igsh=Y3c2czZhbWVkZnB2" },
                  { name: "LinkedIn", icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/abd-el-monim-mazgoura-webfullstack/" },
                  { name: "GitHub", icon: <Github size={18} />, url: "https://github.com/ABDE777" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-portfolio-secondary hover:bg-portfolio-accent text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-portfolio-secondary rounded-2xl p-6 shadow-lg border border-portfolio-border w-full max-w-none">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-light">Envoyez-Moi un Message</h3>
            <div className="overflow-hidden rounded-lg h-[600px]">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeZq8xS-ZOPZOmx9aX1L5IxH5C76Xd0oA5c78GiUqE2-DJibA/viewform?embedded=true" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                className="border-0 overflow-hidden w-full h-full bg-transparent"
                title="Contact Form"
              >
                Chargement du Formulaire Google...
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
