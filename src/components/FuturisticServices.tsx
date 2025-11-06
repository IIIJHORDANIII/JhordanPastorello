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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="neon-button group">
            <span className="relative z-10">Ver Todos os Serviços</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .futuristic-title {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 900;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #00D4FF, #0099CC);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
        }
        
        .text-text-primary {
          color: #E0E0E0;
        }
        
        .text-text-secondary {
          color: #A0A0A0;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .glass-card:hover {
          border-color: #00D4FF;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }
        
        .neon-button {
          position: relative;
          background: transparent;
          border: 2px solid #00D4FF;
          color: #00D4FF;
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
          background: #00D4FF;
          color: #0A0A0A;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }
      `}</style>
    </section>
  );
};

export default FuturisticServices;