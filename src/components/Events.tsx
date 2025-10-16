import { Card, CardContent } from "@/components/ui/card";
import inovathonImg from "@/assets/inovathon.jpg";
import workshopImg from "@/assets/workshop.jpg";
import corrida from "@/assets/projetogrupogenero.jpg";
import palestraImg from "@/assets/palestrafatec.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Inovathon",
      description:
        "Participação no Inovathon, maratona de inovação focada em desenvolver soluções tecnológicas criativas e impactantes. Uma experiência enriquecedora de colaboração e desenvolvimento ágil.",
      image: inovathonImg,
      date: "2025",
    },
    {
      id: 2,
      title: "Workshop LinkedIn",
      description:
        "Workshop sobre estratégias de LinkedIn e Personal Branding, além de apresentação sobre desenvolvimento profissional na área de tecnologia. Compartilhando conhecimentos para impulsionar carreiras.",
      image: workshopImg,
      date: "2025",
    },
    {
      id: 3,
      title: "Corrida e Caminhada Contra o Câncer de Mama",
      description:
        "Participação em evento de conscientização e combate ao câncer de mama. Unindo tecnologia, saúde e responsabilidade social em uma causa importante.",
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
