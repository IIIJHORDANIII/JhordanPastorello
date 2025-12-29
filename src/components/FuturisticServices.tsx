import { Palette, TrendingUp, Layout, Code, Zap, Globe } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: "Social Media Design",
    description: "Criação de conteúdo visual impactante para redes sociais que engaja e converte sua audiência.",
    gradient: "from-cyan-400 to-blue-500",
    tags: ["Instagram", "Facebook", "LinkedIn"]
  },
  {
    icon: TrendingUp,
    title: "Tráfego Pago",
    description: "Estratégias de anúncios otimizadas para maximizar ROI e alcançar seu público ideal.",
    gradient: "from-orange-400 to-red-500",
    tags: ["Google Ads", "Meta Ads", "LinkedIn Ads"]
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Desenvolvimento de páginas de alta conversão, focadas em resultados e experiência do usuário.",
    gradient: "from-purple-400 to-pink-500",
    tags: ["React", "Next.js", "Conversão"]
  },
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Criação de websites modernos e responsivos com as últimas tecnologias do mercado.",
    gradient: "from-green-400 to-teal-500",
    tags: ["React", "TypeScript", "Tailwind"]
  },
  {
    icon: Zap,
    title: "Otimização de Performance",
    description: "Melhoria de velocidade e performance para melhor experiência do usuário e SEO.",
    gradient: "from-yellow-400 to-orange-500",
    tags: ["SEO", "Performance", "Core Web Vitals"]
  },
  {
    icon: Globe,
    title: "Consultoria Digital",
    description: "Análise e estratégias personalizadas para alavancar sua presença digital.",
    gradient: "from-indigo-400 to-purple-500",
    tags: ["Estratégia", "Análise", "Resultados"]
  }
];

const FuturisticServices = () => {
  return (
    <section id="services" className="py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 futuristic-title">
            O Que Eu Faço
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-mono">
            Soluções digitais completas para impulsionar seu negócio online
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card group cursor-pointer p-8 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-white/10 text-text-secondary rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>
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
        
        .text-text-primary {
          color: var(--text-primary);
        }
        
        .text-text-secondary {
          color: var(--text-secondary);
        }
        
        .glass-card {
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          box-shadow: var(--shadow-glass);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .glass-card:hover {
          border-color: var(--neon-cyan);
          box-shadow: var(--shadow-neon);
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
      `}</style>
    </section>
  );
};

export default FuturisticServices;