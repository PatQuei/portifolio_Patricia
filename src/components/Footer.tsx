import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
            <span>© {currentYear} Patricia Queiroz.</span>
            <span className="hidden md:inline">Feito com</span>
            <Heart size={16} className="text-primary fill-primary" />
            <span className="hidden md:inline">e propósito.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Voltar ao topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
