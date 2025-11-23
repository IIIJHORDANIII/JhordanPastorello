import { ExternalLink, TrendingUp, Users, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import ecovidaImage from '../assets/projects/ecovida-organicos.svg';
import techstartImage from '../assets/projects/techstart-academy.svg';
import belezaImage from '../assets/projects/beleza-natural.svg';
import fitproImage from '../assets/projects/fitpro-suplementos.svg';
import advocaciaImage from '../assets/projects/advocacia-santos-silva.svg';
import petloveImage from '../assets/projects/petlove-veterinaria.svg';

const projects = [
  {
    title: "EcoVida Orgânicos",
    category: "Social Media + Tráfego",
    description: "Campanha completa para e-commerce de produtos orgânicos, resultando em 300% de aumento em vendas online.",
    image: ecovidaImage,
    metrics: [
      { icon: TrendingUp, label: "ROI", value: "450%" },
      { icon: Users, label: "Alcance", value: "2.5M" },
      { icon: Target, label: "Conversão", value: "8.5%" }
    ],
    tags: ["Instagram", "Facebook Ads", "Branding"],
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "TechStart Academy",
    category: "Landing Page",
    description: "Landing page de alta conversão para curso online de programação, com funil de vendas otimizado.",
    image: techstartImage,
    metrics: [
      { icon: TrendingUp, label: "Conversão", value: "12.3%" },
      { icon: Users, label: "Leads", value: "15K" },
      { icon: Target, label: "Inscritos", value: "1.8K" }
    ],
    tags: ["React", "Landing Page", "Funil de Vendas"],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Beleza Natural",
    category: "Social Media Design",
    description: "Identidade visual e conteúdo para rede de salões, crescimento de 500% no Instagram em 6 meses.",
    image: belezaImage,
    metrics: [
      { icon: Users, label: "Seguidores", value: "+85K" },
      { icon: TrendingUp, label: "Engajamento", value: "9.2%" },
      { icon: Target, label: "Agendamentos", value: "+320%" }
    ],
    tags: ["Design", "Instagram", "Reels"],
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    title: "FitPro Suplementos",
    category: "Tráfego Pago",
    description: "Estratégia de anúncios para loja de suplementos, otimização de CAC e aumento de ticket médio.",
    image: fitproImage,
    metrics: [
      { icon: TrendingUp, label: "ROAS", value: "6.8x" },
      { icon: Target, label: "CAC", value: "-45%" },
      { icon: Users, label: "Clientes", value: "+4.2K" }
    ],
    tags: ["Google Ads", "Meta Ads", "E-commerce"],
    gradient: "from-orange-500/20 to-amber-500/20"
  },
  {
    title: "Advocacia Santos & Silva",
    category: "Landing Page + Tráfego",
    description: "Landing page institucional com captação de leads qualificados via Google Ads e LinkedIn.",
    image: advocaciaImage,
    metrics: [
      { icon: Users, label: "Leads", value: "892" },
      { icon: Target, label: "Qualificados", value: "67%" },
      { icon: TrendingUp, label: "Contratações", value: "124" }
    ],
    tags: ["LinkedIn Ads", "Google Ads", "B2B"],
    gradient: "from-slate-500/20 to-zinc-500/20"
  },
  {
    title: "PetLove Veterinária",
    category: "Social Media + Design",
    description: "Conteúdo educativo e campanhas de conscientização, construindo autoridade e fidelização.",
    image: petloveImage,
    metrics: [
      { icon: Users, label: "Alcance", value: "1.2M" },
      { icon: TrendingUp, label: "Salvamentos", value: "45K" },
      { icon: Target, label: "Consultas", value: "+180%" }
    ],
    tags: ["Instagram", "TikTok", "Branding"],
    gradient: "from-purple-500/20 to-violet-500/20"
  },
];

const Portfolio = () => {
  return (
    <section id="projetos" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Casos de sucesso que transformaram negócios através do digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="card-gradient border-border/50 hover-glow group cursor-pointer animate-scale-in overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              {/* Project Image Background */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <CardTitle className="text-2xl mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-border/50">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <metric.icon className="w-4 h-4 mx-auto mb-1 text-primary" />
                      <div className="text-lg font-bold text-foreground">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Portfolio;