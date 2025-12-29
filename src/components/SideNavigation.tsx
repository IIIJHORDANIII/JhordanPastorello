import { useState, useEffect } from 'react';

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'hero', label: 'Início' },
    { id: 'services', label: 'Serviços' },
    { id: 'portfolio', label: 'Projetos' },
    { id: 'about', label: 'Sobre' },
    { id: 'contact', label: 'Contato' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(e.clientX < 100);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`side-nav ${isVisible ? 'visible' : ''}`}>
      {sections.map((section) => (
        <div
          key={section.id}
          className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
          data-label={section.label}
          onClick={() => scrollToSection(section.id)}
        />
      ))}
      
      <style jsx>{`
        .side-nav {
          position: fixed;
          left: 0;
          top: 50%;
          transform: translateY(-50%) translateX(-100%);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 24px;
          transition: transform 0.3s ease;
        }
        
        .side-nav.visible {
          transform: translateY(-50%) translateX(0);
        }
        
        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(224, 224, 224, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-dot:hover,
        .nav-dot.active {
          background: var(--neon-cyan);
          box-shadow: var(--shadow-neon);
          transform: scale(1.2);
        }
        
        .nav-dot::after {
          content: attr(data-label);
          position: absolute;
          left: 24px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-primary);
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        
        .nav-dot:hover::after {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .side-nav {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default SideNavigation;