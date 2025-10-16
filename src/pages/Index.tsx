import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Events from "@/components/Events";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Events />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
