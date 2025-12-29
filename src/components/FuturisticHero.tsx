import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const FuturisticHero = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Designer & Desenvolvedor Digital';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Continue showing cursor with blink effect
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 futuristic-bg">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20 hero-grid-pattern">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      <style jsx>{`
        .light .hero-grid-pattern div {
          background-image: 
            linear-gradient(rgba(0, 184, 230, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 184, 230, 0.05) 1px, transparent 1px) !important;
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 futuristic-title animate-fade-in-up">
              JHORDAN
            </h1>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-8" />
          </div>

          {/* Typing Subtitle */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl font-mono text-text-secondary mb-4">
              {typedText}
              <span className={`inline-block w-1 h-6 bg-cyan-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            </p>
            <p className="text-lg md:text-xl text-text-secondary opacity-80 max-w-2xl mx-auto">
              Transformo ideias em experiências digitais impactantes através de design criativo,
              estratégias de tráfego e landing pages de alta conversão.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <button
              onClick={scrollToNextSection}
              className="neon-button group relative overflow-hidden"
            >
              <span className="relative z-10">Explorar Projetos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-sm text-text-secondary font-mono">PROJETOS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">30+</div>
              <div className="text-sm text-text-secondary font-mono">CLIENTES</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">3+</div>
              <div className="text-sm text-text-secondary font-mono">ANOS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center text-text-secondary hover:text-cyan-400 transition-colors duration-300 group"
        >
          <span className="text-sm font-mono mb-2 opacity-60 group-hover:opacity-100">SCROLL</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-cyan-400" />
        </button>
      </div>

      <style jsx>{`
        .futuristic-title {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 900;
          letter-spacing: -0.02em;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
        }
        
        .light .futuristic-title {
          text-shadow: 0 0 30px rgba(0, 136, 204, 0.2);
        }
        
        .text-text-secondary {
          color: var(--text-secondary);
        }
        
        .neon-button {
          position: relative;
          background: transparent;
          border: 2px solid var(--neon-cyan);
          color: var(--neon-cyan);
          padding: 16px 32px;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .neon-button:hover {
          background: var(--neon-cyan);
          color: var(--bg-primary);
          box-shadow: var(--shadow-neon);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FuturisticHero;