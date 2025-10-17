import { Card, CardContent } from "@/components/ui/card";
import inovathonImg from "@/assets/inovathon.jpg";
import workshopImg from "@/assets/workshop.jpg";
import corrida from "@/assets/projetogrupogenero.jpg";
import palestraImg from "@/assets/palestrafatec.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "WTM Inovathon 2025: InterLibras - Tecnologia para Inclusão",
      description:
        "Participação no Inovathon 2025, um desafio incrível de inovação e impacto social, onde nosso time desenvolveu o InterLibras, um app que traduz voz, texto e Libras em tempo real. Foi uma experiência transformadora, unindo tecnologia e inclusão para quebrar barreiras de comunicação e conectar pessoas.",
      image: inovathonImg,
      date: "2025",
    },
    {
      id: 2,
      title:
        "Você no Controle: LinkedIn e Pitch Pessoal para começar sua Jornada Profissional",
      description:
        "Workshop “Você no Controle: LinkedIn e Pitch Pessoal para começar sua Jornada Profissional”, voltado aos alunos da ETEC Itaquera I. 💡 A proposta foi inspirar jovens a se apresentarem com confiança e a usarem o LinkedIn de forma estratégica. Uma experiência de troca, aprendizado e superação que marcou o encerramento da nossa jornada na Fatec! 🚀",
      image: workshopImg,
      date: "2025",
    },
    {
      id: 3,
      title:
        "Corrida e Caminhada Contra o Câncer de Mama - Grupo de Gênero - ESG Assurant",
      description:
        "Corrida e caminhada contra o cancer de mama, promovida pelo Grupo de Gênero da Assurant. Um evento que une saúde, bem-estar e responsabilidade social, reforçando a importância da conscientização e do apoio à causa.",
      image: corrida,
      date: "2025",
    },
    {
      id: 4,
      title: "Aula Inaugural na Fatec",
      description:
        "Particiação como palestrante na aula inaugural do curso de Gestão empresarial na Fatec Zona Leste. Compartilhando experiências e inspirando futuros profissionais.",
      image: palestraImg,
      date: "2025",
    },
  ];

  return (
    <section id="eventos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Eventos & Participações
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Engajamento em iniciativas de inovação, desenvolvimento profissional
            e causas sociais
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={event.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {event.date}
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
