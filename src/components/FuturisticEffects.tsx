import { useEffect, useState } from 'react';

const FuturisticEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number; life: number }>>([]);

  // Custom Cursor Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Scroll Progress Indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Particle System
  useEffect(() => {
    const createParticle = () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      life: 1
    });

    // Initialize particles
    const initialParticles = Array.from({ length: 50 }, createParticle);
    setParticles(initialParticles);

    // Animate particles
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          life: particle.life > 0 ? particle.life - 0.01 : 0
        })).filter(particle => particle.life > 0)
      );
    };

    const particleInterval = setInterval(animateParticles, 50);
    
    // Add new particles periodically
    const addParticleInterval = setInterval(() => {
      setParticles(prev => [...prev, createParticle()]);
    }, 2000);

    return () => {
      clearInterval(particleInterval);
      clearInterval(addParticleInterval);
    };
  }, []);

  // Scroll Animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements for scroll animations
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div className="fixed pointer-events-none z-50 transition-all duration-100 ease-out"
           style={{
             left: mousePosition.x - 10,
             top: mousePosition.y - 10,
             transform: isHovering ? 'scale(1.5)' : 'scale(1)'
           }}>
        <div className={`w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 ${isHovering ? 'opacity-100' : 'opacity-70'}`} />
        <div className={`absolute inset-0 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 animate-ping ${isHovering ? 'opacity-75' : 'opacity-0'}`} />
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-40 bg-black/20 scroll-progress-bg">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-400 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden particles-container">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full particle"
            style={{
              left: particle.x,
              top: particle.y,
              opacity: particle.life * 0.6,
              background: 'var(--neon-cyan)',
              boxShadow: '0 0 4px var(--neon-cyan)'
            }}
          />
        ))}
      </div>

      {/* Animated Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 dark-gradient-overlay" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-primary))' }} />
      </div>

      {/* Scroll Animation Styles */}
      <style jsx global>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .scroll-animate-delay-1 {
          transition-delay: 0.1s;
        }
        
        .scroll-animate-delay-2 {
          transition-delay: 0.2s;
        }
        
        .scroll-animate-delay-3 {
          transition-delay: 0.3s;
        }
        
        .scroll-animate-delay-4 {
          transition-delay: 0.4s;
        }
        
        .scroll-animate-delay-5 {
          transition-delay: 0.5s;
        }
        
        /* Grid Background Pattern */
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }
        
        .light .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
        }
        
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        /* Hide default cursor on desktop */
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
          
          a, button, input, textarea, select {
            cursor: none !important;
          }
        }
        
        /* Floating animation for elements */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delay-1 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-float-delay-2 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        /* Pulse animation for interactive elements */
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(0, 212, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
          }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Text reveal animation */
        @keyframes text-reveal {
          0% {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
        
        .animate-text-reveal {
          animation: text-reveal 1s ease-out forwards;
        }
        
        .scroll-progress-bg {
          background: rgba(0, 0, 0, 0.2);
        }
        
        .light .scroll-progress-bg {
          background: rgba(0, 0, 0, 0.05);
        }
        
        /* Neon flicker effect */
        @keyframes neon-flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            text-shadow:
              0 0 5px rgba(0, 212, 255, 0.8),
              0 0 10px rgba(0, 212, 255, 0.6),
              0 0 15px rgba(0, 212, 255, 0.4);
          }
          20%, 24%, 55% {
            text-shadow: none;
          }
        }
        
        .animate-neon-flicker {
          animation: neon-flicker 3s infinite alternate;
        }
      `}</style>
    </>
  );
};

export default FuturisticEffects;