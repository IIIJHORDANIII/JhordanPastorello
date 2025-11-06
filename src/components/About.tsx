import { Code2, Sparkles, Target } from "lucide-react";

const stats = [
  { icon: Target, label: "Projetos Entregues", value: "50+" },
  { icon: Sparkles, label: "Clientes Satisfeitos", value: "30+" },
  { icon: Code2, label: "Anos de Experiência", value: "3+" },
];

const About = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Sobre Mim
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sou Jhordan, especialista em transformar ideias em resultados concretos no ambiente digital. 
              Com experiência em design para redes sociais, gestão de tráfego pago e desenvolvimento de 
              landing pages, ajudo empresas e empreendedores a alcançarem seus objetivos online.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Minha abordagem combina criatividade visual com estratégias baseadas em dados, 
              garantindo que cada projeto não apenas pareça incrível, mas também entregue resultados mensuráveis.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-background" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-border/50 card-gradient p-8">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">👨‍💻</div>
                  <p className="text-2xl font-bold gradient-text">Jhordan</p>
                  <p className="text-muted-foreground">Digital Creator</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
