import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 animate-fade-in-up leading-tight">
          Tecnologia com alma,
          <br />
          <span className="text-primary">inclusão com propósito</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
          Patricia Queiroz — Profissional de tecnologia apaixonada por criar pontes entre pessoas, 
          código e transformação social.
        </p>
        <button
          onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-12 px-8 py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider rounded-full hover:bg-accent transition-all duration-300 hover-lift animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Conheça minha história
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
