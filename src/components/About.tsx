import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Patricia Queiroz"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/30 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Sobre mim
            </h2>
            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Sou Patricia Queiroz, profissional de tecnologia movida pela crença de que 
                código pode — e deve — ser uma ferramenta de transformação social.
              </p>
              <p>
                Minha jornada começou com a curiosidade de entender como as coisas funcionam 
                e evoluiu para uma missão de criar soluções tecnológicas que promovam inclusão, 
                diversidade e igualdade de oportunidades.
              </p>
              <p>
                Como mãe e profissional, aprendi que a tecnologia mais poderosa é aquela 
                que considera as pessoas em primeiro lugar. Cada linha de código que escrevo, 
                cada projeto que lidero, carrega essa filosofia: <strong className="text-foreground">tecnologia 
                com alma, feita por pessoas, para pessoas</strong>.
              </p>
              <p>
                Atuo há mais de uma década na área de tecnologia, liderando projetos que vão 
                desde desenvolvimento de software até iniciativas de engajamento social e 
                capacitação de mulheres na tech. Acredito no poder da representatividade e 
                trabalho ativamente para que mais vozes diversas ocupem espaços de decisão 
                e inovação.
              </p>
              <p className="text-primary font-medium">
                Minha missão é simples: usar minha experiência e privilégios para abrir portas, 
                amplificar vozes e construir um futuro tecnológico mais justo e humano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
