import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Programa Mulheres na Tech",
    description: "Iniciativa de capacitação e mentoria para inserção de mulheres em carreiras de tecnologia, com foco em diversidade e inclusão.",
    image: project1,
    results: "120+ mulheres capacitadas | 70% de inserção no mercado",
    tags: ["Educação", "Diversidade", "Mentoria"],
  },
  {
    title: "Plataforma de Inclusão Digital",
    description: "Sistema web desenvolvido para facilitar o acesso de comunidades periféricas a recursos educacionais de tecnologia.",
    image: project2,
    results: "5.000+ usuários ativos | 15 comunidades atendidas",
    tags: ["Desenvolvimento", "Social", "Open Source"],
  },
  {
    title: "Tech for Good Summit",
    description: "Organização e curadoria de evento anual reunindo líderes, desenvolvedores e ativistas para discutir tecnologia e impacto social.",
    image: project3,
    results: "800+ participantes | 40+ palestras | 3 edições realizadas",
    tags: ["Eventos", "Comunidade", "Liderança"],
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
            Uma seleção de iniciativas profissionais e voluntárias que traduzem minha paixão 
            por tecnologia inclusiva e impacto social.
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
                <button className="text-primary font-body text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                  Ver detalhes
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
