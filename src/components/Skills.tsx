const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: "https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
    },
    {
      name: "CSS3",
      icon: "https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white",
    },
    {
      name: "Tailwind CSS",
      icon: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
    },
    {
      name: "JavaScript",
      icon: "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
    },
    {
      name: "TypeScript",
      icon: "https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white",
    },
    {
      name: "Python",
      icon: "https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white",
    },
    {
      name: "Java",
      icon: "https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white",
    },
    {
      name: "Node.js",
      icon: "https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white",
    },
    {
      name: "Next.js",
      icon: "https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white",
    },
    {
      name: "SQL",
      icon: "https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=mysql&logoColor=white",
    },
    {
      name: "GitHub",
      icon: "https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white",
    },
    {
      name: "Power BI",
      icon: "https://img.shields.io/badge/Power_BI-F2C811?style=flat-square&logo=powerbi&logoColor=black",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Habilidades Técnicas
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Linguagens de programação, frameworks e ferramentas que domino
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-fade-in-up hover-lift overflow-hidden rounded-lg bg-card/50 p-3 backdrop-blur-sm border border-border/50"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-6 md:h-7 transition-transform duration-300 hover:scale-110 opacity-90 hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Categories Section */}
        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card rounded-2xl">
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">
              Linguagens
            </p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">
              Frameworks
            </p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">
              Ferramentas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
