import { GraduationCap } from "lucide-react";

const tcc = {
  title:
    "A Inclusão de Mulheres na Governança Pública e Corporativa em São Paulo",
  description:
    "Trabalho de Graduação que investiga os desafios e oportunidades da inclusão de mulheres em espaços de decisão na cidade de São Paulo, analisando como políticas públicas, iniciativas privadas e redes colaborativas podem fortalecer a liderança feminina e promover equidade de gênero.",
  insights:
    "O estudo propõe caminhos práticos para o empoderamento e participação ativa das mulheres, com base na Agenda 2030 e nos Objetivos de Desenvolvimento Sustentável (ODS 5 e 10).",
  podcastEmbed:
    "https://open.spotify.com/embed/episode/3kM78K8mPTzfuVsCoCdXH6?utm_source=generator",
  videoEmbed: "https://www.youtube.com/embed/Pd6w0ajqFv0",
};

const Graduation = () => {
  return (
    <section id="tcc" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trabalho de Graduação
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Um olhar sobre a presença feminina na governança pública e
            corporativa — unindo pesquisa, propósito e tecnologia para construir
            espaços mais justos e inclusivos.
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="max-w-4xl mx-auto bg-background rounded-2xl p-10 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in">
          <h3 className="font-display text-3xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <GraduationCap size={28} className="text-primary" />
            {tcc.title}
          </h3>

          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            {tcc.description}
          </p>

          <p className="font-body text-muted-foreground italic leading-relaxed mb-10">
            {tcc.insights}
          </p>

          {/* 🎧 Player do Podcast (Spotify Embed) */}
          <div className="mb-12">
            <h4 className="font-display text-xl font-semibold text-foreground mb-4">
              🎧 Ouça o Podcast
            </h4>
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                style={{ borderRadius: "12px" }}
                src={tcc.podcastEmbed}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* 🎥 Player do Vídeo (YouTube Embed) */}
          <div>
            <h4 className="font-display text-xl font-semibold text-foreground mb-4">
              🎥 Assista à Apresentação em Vídeo
            </h4>
            <div className="aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe
                width="100%"
                height="100%"
                src={tcc.videoEmbed}
                title="Apresentação do Trabalho de Graduação"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graduation;
