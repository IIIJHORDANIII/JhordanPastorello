import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Jhordan</h3>
            <p className="text-muted-foreground">Designer & Desenvolvedor Digital</p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://instagram.com/jhordan.pastorello" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover-glow"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover-glow"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:pastorellojhordan@gmail.com" 
              className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover-glow"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center md:text-right text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Jhordan. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
