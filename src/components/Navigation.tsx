import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-display text-2xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            PQ
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["sobre", "projetos", "artigos", "contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="font-body text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {["sobre", "projetos", "artigos", "contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="font-body text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
