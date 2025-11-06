import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text glow-primary">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Pronto para levar seu negócio digital para o próximo nível? 
              Entre em contato e vamos criar algo incrível juntos.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-glow)] transition-all duration-300 text-lg px-8"
                asChild
              >
                <a href="mailto:pastorellojhordan@gmail.com">
                  <Mail className="mr-2" />
                  Enviar E-mail
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8"
                asChild
              >
                <a href="https://wa.me/5547996772336" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full blur-3xl animate-gradient" />
      </div>
    </section>
  );
};

export default CTA;
