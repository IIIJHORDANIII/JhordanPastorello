import { useState, useEffect } from 'react';
import { Code2, Sparkles, Target, User, Briefcase, Award, TrendingUp } from 'lucide-react';

const timeline = [
  {
    year: "2021",
    title: "Início da Jornada",
    description: "Comecei minha carreira como freelancer, ajudando pequenos negócios a criarem presença digital.",
    icon: User,
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    year: "2022",
    title: "Especialização em Tráfego",
    description: "Aprofundei conhecimentos em Google Ads e Meta Ads, entregando resultados expressivos para clientes.",
    icon: TrendingUp,
    gradient: "from-green-400 to-emerald-500"
  },
  {
    year: "2023",
    title: "Desenvolvimento Web",
    description: "Adicionei desenvolvimento de landing pages e websites modernos ao portfólio de serviços.",
    icon: Code2,
    gradient: "from-purple-400 to-pink-500"
  },
  {
    year: "2024",
    title: "Crescimento Contínuo",
    description: "Expansão da carteira de clientes e entrega de projetos cada vez mais desafiadores e inovadores.",
    icon: Award,
    gradient: "from-orange-400 to-red-500"
  }
];

const skills = [
  { name: "Design Gráfico", level: 95, category: "Design" },
  { name: "Tráfego Pago", level: 90, category: "Marketing" },
  { name: "Desenvolvimento Web", level: 85, category: "Tecnologia" },
  { name: "Social Media", level: 92, category: "Marketing" },
  { name: "UI/UX Design", level: 88, category: "Design" },
  { name: "Análise de Dados", level: 80, category: "Marketing" }
];

const FuturisticAbout = () => {
  const [animatedSkills, setAnimatedSkills] = useState(skills.map(skill => ({ ...skill, currentLevel: 0 })));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 futuristic-title">
            Sobre Mim
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-mono">
            Minha jornada no mundo digital, transformando ideias em resultados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8 font-mono">Timeline Profissional</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-400 to-orange-400" />
              
              {timeline.map((item, index) => (
                <div key={item.year} className="relative flex items-start mb-12 last:mb-0">
                  {/* Timeline Dot */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center mr-8 relative z-10`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-2xl font-black text-cyan-400 font-mono">{item.year}</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-cyan-400 to-transparent" />
                      </div>
                      <h4 className="text-xl font-bold text-text-primary mb-3">{item.title}</h4>
                      <p className="text-text-secondary leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Stats */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8 font-mono">Habilidades & Expertise</h3>
            
            {/* Skills */}
            <div className="space-y-6 mb-12">
              {animatedSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-text-primary font-medium">{skill.name}</span>
                    <span className="text-text-secondary text-sm font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-glass-overlay rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        transitionDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                  <div className="text-xs text-text-secondary font-mono">{skill.category}</div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-black text-cyan-400 mb-2 font-mono">50+</div>
                <div className="text-sm text-text-secondary font-mono">PROJETOS ENTREGUES</div>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-black text-orange-400 mb-2 font-mono">30+</div>
                <div className="text-sm text-text-secondary font-mono">CLIENTES SATISFEITOS</div>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-black text-purple-400 mb-2 font-mono">3+</div>
                <div className="text-sm text-text-secondary font-mono">ANOS DE EXPERIÊNCIA</div>
              </div>
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-black text-green-400 mb-2 font-mono">95%</div>
                <div className="text-sm text-text-secondary font-mono">TAXA DE SATISFAÇÃO</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-xl text-text-secondary mb-8 font-mono">
            Pronto para transformar seu projeto em realidade?
          </p>
          <button className="neon-button group">
            <span className="relative z-10">Vamos Trabalhar Juntos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
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

export default FuturisticAbout;