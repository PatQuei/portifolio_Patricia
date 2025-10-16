import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contato"
      className="py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vamos conversar?
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Adoro conectar com pessoas que compartilham a paixão por
              tecnologia com propósito. Entre em contato para colaborações,
              mentorias ou apenas uma boa conversa.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
              Formas de Contato
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <a
                href="mailto:patriciaqueiroz35@gmail.com"
                className="flex flex-col items-center gap-4 p-8 bg-card rounded-2xl text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail size={28} />
                </div>
                <div className="text-center">
                  <p className="font-body text-sm text-muted-foreground mb-1">
                    Email
                  </p>
                  <p className="font-body font-medium text-foreground text-sm">
                    patriciaqueiroz35@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/5511999574623"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-8 bg-card rounded-2xl text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <MessageCircle size={28} />
                </div>
                <div className="text-center">
                  <p className="font-body text-sm text-muted-foreground mb-1">
                    WhatsApp
                  </p>
                  <p className="font-body font-medium text-foreground">
                    (11) 99957-4623
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/patyqueiroz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-8 bg-card rounded-2xl text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Linkedin size={28} />
                </div>
                <div className="text-center">
                  <p className="font-body text-sm text-muted-foreground mb-1">
                    LinkedIn
                  </p>
                  <p className="font-body font-medium text-foreground">
                    /in/patyqueiroz/
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/PatQuei"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-8 bg-card rounded-2xl text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Github size={28} />
                </div>
                <div className="text-center">
                  <p className="font-body text-sm text-muted-foreground mb-1">
                    GitHub
                  </p>
                  <p className="font-body font-medium text-foreground">
                    github.com/PatQuei
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Available For Section */}
          <div
            className="bg-card rounded-2xl p-8 md:p-10 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h4 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
              Disponível para
            </h4>
            <ul className="space-y-4 font-body text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-xl">→</span>
                <span>
                  Oportunidades na área de tecnologia, com foco em Engenharia de
                  Software, IA Generativa ou Dados
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-xl">→</span>
                <span>
                  Projetos que unam tecnologia e impacto social, especialmente
                  voltados à inclusão digital, diversidade e equidade de gênero.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-xl">→</span>
                <span>
                  Colaborações em iniciativas ou comunidades que promovam
                  formação e mentoria de mulheres na tecnologia.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-xl">→</span>
                <span>
                  Parcerias criativas em projetos que conectem educação,
                  tecnologia e propósito humano.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
