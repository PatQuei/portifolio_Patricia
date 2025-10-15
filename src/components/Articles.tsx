import { Calendar, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "O Futuro da Tecnologia é Plural",
    excerpt: "Reflexão sobre a importância da diversidade na construção de soluções tecnológicas mais humanas e representativas.",
    date: "15 Mar 2025",
    readTime: "8 min",
  },
  {
    title: "Maternidade e Carreira em Tech: É Possível?",
    excerpt: "Compartilhando minha experiência como mãe e profissional de tecnologia, os desafios e as vitórias dessa jornada.",
    date: "02 Mar 2025",
    readTime: "10 min",
  },
  {
    title: "Código com Propósito: Como a Tech Pode Mudar Vidas",
    excerpt: "Casos reais de projetos sociais que utilizaram tecnologia para gerar impacto positivo em comunidades vulneráveis.",
    date: "18 Fev 2025",
    readTime: "12 min",
  },
];

const Articles = () => {
  return (
    <section id="artigos" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Reflexões & Aprendizados
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Pensamentos sobre tecnologia, inclusão, maternidade e o desafio diário 
            de construir um mundo mais justo através do código.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-8 hover:shadow-lg transition-all duration-500 hover-lift animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-body">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {article.date}
                  </span>
                  <span>{article.readTime}</span>
                </div>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {article.excerpt}
              </p>
              <button className="text-primary font-body text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                Ler artigo completo
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 border-2 border-primary text-primary font-body text-sm uppercase tracking-wider rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Ver todos os artigos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
