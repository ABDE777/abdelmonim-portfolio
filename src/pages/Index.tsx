
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/toaster";

// Add link to Bootstrap Icons in the document head
const addBootstrapIcons = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css';
  document.head.appendChild(link);
};

// Set portfolio favicon
const setPortfolioFavicon = () => {
  const link = document.querySelector("link[rel='icon']") as HTMLLinkElement || document.createElement('link');
  link.type = 'image/svg+xml';
  link.rel = 'icon';
  link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="0.9em" font-size="90">💼</text></svg>';
  document.head.appendChild(link);
  
  // Set the document title
  document.title = "Abd El Monim | Portfolio";
};

// Add custom background color to body
const setDarkBackground = () => {
  document.body.style.backgroundColor = "#111827";
  
  // Add CSS for purple accents
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --portfolio-accent: #8B5CF6;
    }
    .btn-primary {
      background-color: #8B5CF6 !important;
    }
    .text-portfolio-accent {
      color: #8B5CF6 !important;
    }
    .border-portfolio-accent {
      border-color: #8B5CF6 !important;
    }
  `;
  document.head.appendChild(style);
};

const Index = () => {
  useEffect(() => {
    // Add Bootstrap Icons CSS
    addBootstrapIcons();
    
    // Set favicon
    setPortfolioFavicon();
    
    // Set dark background
    setDarkBackground();
    
    // Page load animations
    document.body.classList.add('opacity-0');
    setTimeout(() => {
      document.body.classList.remove('opacity-0');
      document.body.classList.add('transition-opacity', 'duration-500', 'opacity-100');
    }, 100);

    // Handle scroll animations
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.animate-on-scroll');
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.9) {
          element.classList.add('animated');
        }
      });
    };

    // Initialize skill progress bars
    const initSkillBars = () => {
      const skillBars = document.querySelectorAll('[style*="width: 0%"]');
      skillBars.forEach((bar) => {
        const parentElement = bar.parentElement;
        if (parentElement) {
          const progressValue = parentElement.previousElementSibling?.querySelector('.text-sm')?.textContent;
          if (progressValue) {
            (bar as HTMLElement).style.setProperty('--progress-value', progressValue);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    // Initialize skill bars
    setTimeout(initSkillBars, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Reviews />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
