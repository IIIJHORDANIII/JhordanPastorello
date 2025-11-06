import { Palette, TrendingUp, Layout } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Palette,
    title: "Social Media Design",
    description: "Criação de conteúdo visual impactante para redes sociais que engaja e converte sua audiência.",
    gradient: "from-primary to-primary-glow",
  },
  {
    icon: TrendingUp,
    title: "Tráfego Pago",
    description: "Estratégias de anúncios otimizadas para maximizar ROI e alcançar seu público ideal.",
    gradient: "from-secondary to-orange-400",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Desenvolvimento de páginas de alta conversão, focadas em resultados e experiência do usuário.",
    gradient: "from-primary to-secondary",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            O Que Eu Faço
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções digitais completas para impulsionar seu negócio online
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="card-gradient border-border/50 hover-glow group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-background" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />
    </section>
  );
};

export default Services;
