import aboutImage from "@/assets/corporativa7.jpg";

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
                Sou Patricia Pereira Queiroz — curiosa por natureza, movida por
                propósito e encantada pelo poder transformador da tecnologia.
              </p>
              <p>
                Há mais de uma década atuo na Assurant, onde desenvolvi um olhar
                analítico e estratégico sobre processos, dados e sistemas. Sou
                grata por essa trajetória, que me proporcionou estabilidade,
                aprendizado e a chance de entender como a tecnologia pode
                facilitar o dia a dia das pessoas.
              </p>
              <p>
                Mas foi fora do ambiente corporativo que descobri o que
                realmente me inspira: usar a tecnologia para criar pontes{" "}
                <strong className="text-foreground">
                  — entre pessoas, oportunidades e futuros possíveis
                </strong>
                .
              </p>
              <p>
                Minha verdadeira paixão nasceu nas trocas, nos estudos e nos
                projetos que mostraram que programar é também um ato de
                expressão e transformação social. Foi nesse caminho que
                encontrei propósito em aprender, ensinar e incentivar outras
                mulheres e meninas a acreditarem que também pertencem a esse
                universo.
                <p>
                  {" "}
                  Hoje, estou construindo uma transição para a Engenharia de
                  Software, estudando IA Generativa e participando de
                  iniciativas que unem tecnologia, inclusão e impacto social.
                </p>
                <b />
                <p>
                  Mãe solo, mulher na tecnologia e eterna aprendiz, acredito que
                  a inovação ganha sentido quando nasce da empatia. Porque cada
                  linha de código pode, sim, carregar propósito — e mudar um
                  pedaço do mundo.
                </p>
              </p>
              <p className="text-primary font-medium">
                Minha missão é simples: usar minha experiência e privilégios
                para abrir portas, amplificar vozes e construir um futuro
                tecnológico mais justo e humano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
