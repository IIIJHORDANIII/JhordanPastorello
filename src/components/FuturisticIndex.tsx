import FuturisticHero from './FuturisticHero';
import FuturisticServices from './FuturisticServices';
import FuturisticPortfolio from './FuturisticPortfolio';
import FuturisticAbout from './FuturisticAbout';
import FuturisticCTA from './FuturisticCTA';
import FuturisticEffects from './FuturisticEffects';
import SideNavigation from './SideNavigation';
import Footer from './Footer';

const FuturisticIndex = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Global Effects */}
      <FuturisticEffects />
      
      {/* Side Navigation */}
      <SideNavigation />

      {/* Main Content */}
      <main className="relative z-20">
        <FuturisticHero />
        <FuturisticServices />
        <FuturisticPortfolio />
        <FuturisticAbout />
        <FuturisticCTA />
        <Footer />
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;900&family=Inter:wght@400;500;600;700;900&display=swap');
        
        :root {
          --accent-cyan: #00D4FF;
          --accent-purple: #7C3AED;
          --accent-orange: #FF6B35;
          --accent-green: #00FF88;
        }
        
        .light {
          --accent-cyan: #00B8E6;
          --accent-purple: #8B5CF6;
          --accent-orange: #FF7A4D;
          --accent-green: #00CC6A;
        }
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
          background: var(--background);
          color: var(--text-primary);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
        }
        
        .font-mono {
          font-family: 'JetBrains Mono', 'Fira Code', 'Roboto Mono', monospace;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 0.5rem;
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .light ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-orange));
        }
        
        /* Selection color */
        ::selection {
          background: rgba(0, 212, 255, 0.3);
          color: var(--text-primary);
        }
        
        .light ::selection {
          background: rgba(0, 136, 204, 0.2);
          color: var(--text-primary);
        }
        
        /* Focus styles */
        :focus {
          outline: 2px solid var(--accent-cyan);
          outline-offset: 2px;
        }
        
        /* Utility classes */
        .bg-background {
          background: var(--bg-primary);
        }
        
        .text-text-primary {
          color: var(--text-primary);
        }
        
        .text-text-secondary {
          color: var(--text-secondary);
        }
        
        .text-accent-cyan {
          color: var(--accent-cyan);
        }
        
        .text-accent-purple {
          color: var(--accent-purple);
        }
        
        .text-accent-orange {
          color: var(--accent-orange);
        }
        
        .text-accent-green {
          color: var(--accent-green);
        }
        
        .bg-accent-cyan {
          background: var(--accent-cyan);
        }
        
        .bg-accent-purple {
          background: var(--accent-purple);
        }
        
        .bg-accent-orange {
          background: var(--accent-orange);
        }
        
        .bg-accent-green {
          background: var(--accent-green);
        }
        
        .border-accent-cyan {
          border-color: var(--accent-cyan);
        }
        
        .border-accent-purple {
          border-color: var(--accent-purple);
        }
        
        .border-accent-orange {
          border-color: var(--accent-orange);
        }
        
        .border-accent-green {
          border-color: var(--accent-green);
        }
        
        .from-accent-cyan {
          --tw-gradient-from: var(--accent-cyan);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 212, 255, 0));
        }
        
        .to-accent-purple {
          --tw-gradient-to: var(--accent-purple);
        }
        
        .to-accent-orange {
          --tw-gradient-to: var(--accent-orange);
        }
        
        .to-accent-green {
          --tw-gradient-to: var(--accent-green);
        }
      `}</style>
    </div>
  );
};

export default FuturisticIndex;