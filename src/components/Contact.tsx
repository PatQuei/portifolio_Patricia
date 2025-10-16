import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Mensagem enviada com sucesso! Retornarei em breve.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contato"
      className="py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
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

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="font-body text-sm uppercase tracking-wider text-foreground mb-2 block"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors font-body"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-body text-sm uppercase tracking-wider text-foreground mb-2 block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors font-body"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="font-body text-sm uppercase tracking-wider text-foreground mb-2 block"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-card border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors font-body resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider rounded-full hover:bg-accent transition-all duration-300 hover-lift flex items-center justify-center gap-2"
                >
                  Enviar mensagem
                  <Send size={18} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div
              className="animate-fade-in space-y-8"
              style={{ animationDelay: "0.2s" }}
            >
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Outras formas de contato
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:patricia@example.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground">
                        Email
                      </p>
                      <p className="font-body font-medium">
                        patriciaqueiroz35@gmail.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/patyqueiroz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground">
                        LinkedIn
                      </p>
                      <p className="font-body font-medium">/in/patyqueiroz/</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/PatQuei"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Github size={20} />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground">
                        GitHub
                      </p>
                      <p className="font-body font-medium">
                        github.com/PatQuei
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8">
                <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                  Disponível para
                </h4>
                <ul className="space-y-3 font-body text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    Oportunidades na área de tecnologia, com foco em Engenharia
                    de Software, IA Generativa ou Dados
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    Projetos que unam tecnologia e impacto social, especialmente
                    voltados à inclusão digital, diversidade e equidade de
                    gênero.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    Colaborações em iniciativas ou comunidades que promovam
                    formação e mentoria de mulheres na tecnologia.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    Parcerias criativas em projetos que conectem educação,
                    tecnologia e propósito humano.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
