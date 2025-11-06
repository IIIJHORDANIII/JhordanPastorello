import { useState } from 'react';
import { ExternalLink, TrendingUp, Users, Target, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "EcoVida Orgânicos",
    category: "Social Media + Tráfego",
    description: "Campanha completa para e-commerce de produtos orgânicos, resultando em 300% de aumento em vendas online.",
    metrics: [
      { icon: TrendingUp, label: "ROI", value: "450%" },
      { icon: Users, label: "Alcance", value: "2.5M" },
      { icon: Target, label: "Conversão", value: "8.5%" }
    ],
    tags: ["Instagram", "Facebook Ads", "Branding"],
    gradient: "from-green-400 to-emerald-500",
    size: "large"
  },
  {
    title: "TechStart Academy",
    category: "Landing Page",
    description: "Landing page de alta conversão para curso online de programação, com funil de vendas otimizado.",
    metrics: [
      { icon: TrendingUp, label: "Conversão", value: "12.3%" },
      { icon: Users, label: "Leads", value: "15K" },
      { icon: Target, label: "Inscritos", value: "1.8K" }
    ],
    tags: ["React", "Landing Page", "Funil de Vendas"],
    gradient: "from-blue-400 to-cyan-500",
    size: "medium"
  },
  {
    title: "Beleza Natural",
    category: "Social Media Design",
    description: "Identidade visual e conteúdo para rede de salões, crescimento de 500% no Instagram em 6 meses.",
    metrics: [
      { icon: Users, label: "Seguidores", value: "+85K" },
      { icon: TrendingUp, label: "Engajamento", value: "9.2%" },
      { icon: Target, label: "Agendamentos", value: "+320%" }
    ],
    tags: ["Design", "Instagram", "Reels"],
    gradient: "from-pink-400 to-rose-500",
    size: "small"
  },
  {
    title: "FitPro Suplementos",
    category: "Tráfego Pago",
    description: "Estratégia de anúncios para loja de suplementos, otimização de CAC e aumento de ticket médio.",
    metrics: [
      { icon: TrendingUp, label: "ROAS", value: "6.8x" },
      { icon: Target, label: "CAC", value: "-45%" },
      { icon: Users, label: "Clientes", value: "+4.2K" }
    ],
    tags: ["Google Ads", "Meta Ads", "E-commerce"],
    gradient: "from-orange-400 to-amber-500",
    size: "medium"
  },
  {
    title: "Advocacia Santos & Silva",
    category: "Landing Page + Tráfego",
    description: "Landing page institucional com captação de leads qualificados via Google Ads e LinkedIn.",
    metrics: [
      { icon: Users, label: "Leads", value: "892" },
      { icon: Target, label: "Qualificados", value: "67%" },
      { icon: TrendingUp, label: "Contratações", value: "124" }
    ],
    tags: ["LinkedIn Ads", "Google Ads", "B2B"],
    gradient: "from-slate-400 to-zinc-500",
    size: "small"
  },
  {
    title: "PetLove Veterinária",
    category: "Social Media + Design",
    description: "Conteúdo educativo e campanhas de conscientização, construindo autoridade e fidelização.",
    metrics: [
      { icon: Users, label: "Alcance", value: "1.2M" },
      { icon: TrendingUp, label: "Salvamentos", value: "45K" },
      { icon: Target, label: "Consultas", value: "+180%" }
    ],
    tags: ["Instagram", "TikTok", "Branding"],
    gradient: "from-purple-400 to-violet-500",
    size: "large"
  }
];

const FuturisticPortfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 futuristic-title">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-mono">
            Casos de sucesso que transformaram negócios através do digital
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card group cursor-pointer overflow-hidden transition-all duration-300 ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                project.size === 'medium' ? 'md:row-span-1' : ''
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                minHeight: project.size === 'large' ? '500px' : project.size === 'medium' ? '300px' : '250px'
              }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 text-xs font-mono bg-white/10 text-text-secondary rounded-full border border-white/20">
                      {project.category}
                    </span>
                    <ExternalLink className="w-5 h-5 text-text-secondary group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className={`font-black mb-2 transition-all duration-300 ${
                    hoveredProject === project.title ? 'text-white text-2xl' : 'text-text-primary text-xl'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-text-secondary leading-relaxed transition-all duration-300 ${
                    hoveredProject === project.title ? 'opacity-100' : 'opacity-80'
                  }`}>
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className={`grid grid-cols-3 gap-4 mb-4 transition-all duration-300 ${
                  hoveredProject === project.title ? 'opacity-100' : 'opacity-60'
                }`}>
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <metric.icon className="w-4 h-4 mx-auto mb-1 text-white/70" />
                      <div className="text-lg font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-text-secondary font-mono">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-white/10 text-text-secondary rounded border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="neon-button group">
            <span className="relative z-10">Ver Mais Projetos</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          transform: translateY(-4px);
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
          display: inline-flex;
          align-items: center;
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

export default FuturisticPortfolio;