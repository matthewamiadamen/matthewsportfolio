import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import NeuralNetwork from "./components/NeuralNetwork";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="order-1">
              <NeuralNetwork />
            </div>
            <div className="order-2">
              <AboutSection />
            </div>
          </div>
        </section>
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
