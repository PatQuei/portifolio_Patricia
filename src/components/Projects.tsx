import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/bits_e_batons.png";
import project2 from "@/assets/biblioteca.png";
import project3 from "@/assets/cvbuilder.png";
import project4 from "@/assets/portifoliopaulo2.jpg";

const projects = [
  {
    title: "Bits e Batons: A Força Feminina no Mundo Digital",
    description:
      "Podcast criado durante um projeto de IA para inspirar meninas e mulheres a explorarem o universo da tecnologia e da ciência de dados. Meu primeiro projeto com Inteligência Artificial, que despertou em mim o desejo de usar a tecnologia como ferramenta de inclusão e transformação social.",
    image: project1,
    results:
      "1ª experiência com IA | Projeto voltado à inclusão feminina na tecnologia",
    tags: ["IA Generativa", "Diversidade", "Podcast", "Impacto Social"],
    repoUrl: "https://github.com/PatQuei/Projeto_Podcast",
    liveUrl: null,
  },
  {
    title: "Biblioteca Digital Interativa",
    description:
      "Sistema web colaborativo para gerenciamento e incentivo à leitura. Permite cadastrar, buscar e emprestar livros, além de promover a troca de experiências entre leitores. Projeto voltado à inclusão digital e ao acesso ao conhecimento.",
    image: project2,
    results:
      "Desenvolvimento colaborativo | Foco em educação e acesso à leitura",
    tags: ["Desenvolvimento", "Educação", "Inclusão Digital", "React"],
    repoUrl: "https://github.com/PatQuei/biblioteca",
    liveUrl: null,
  },
  {
    title: "CV Builder: Currículos Inteligentes com IA",
    description:
      "Aplicação desenvolvida para criar currículos personalizados utilizando Inteligência Artificial. O sistema gera descrições profissionais, organiza experiências e sugere melhorias de linguagem e estrutura, tornando o processo mais acessível para quem está começando na área de tecnologia.",
    image: project3,
    results: "Produtividade | IA aplicada à empregabilidade e inclusão",
    tags: [
      "IA Generativa",
      "Desenvolvimento Web",
      "Automação",
      "Empregabilidade",
    ],
    repoUrl:
      "https://github.com/PatQuei/CV-Builder-AI---Requisitos-do-Projeto---Grupo-DOMinadores",
    liveUrl: null,
  },
  {
    title: "Portfólio Profissional — Paulo Emilio Pucci",
    description:
      "Desenvolvimento e identidade visual de portfólio digital voltado a destacar trajetória, projetos e estilo profissional. Foco em design limpo, storytelling autêntico e estruturação de conteúdo para LinkedIn e web.",
    image: project4,
    results:
      "Design + Identidade | Projeto colaborativo de posicionamento profissional",
    tags: ["Design", "Storytelling", "Portfólio", "UI/UX"],
    repoUrl: null,
    liveUrl: "https://pauloemiliopucci.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projetos que transformam
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma seleção de iniciativas profissionais e voluntárias que traduzem
            minha paixão por tecnologia inclusiva e impacto social.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <p className="font-body text-sm text-primary font-medium mb-4">
                  {project.results}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-body text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      <Github size={16} />
                      Repositório
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-body text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      <ExternalLink size={16} />
                      Ver Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
