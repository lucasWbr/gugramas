import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/BeforeAfterSection";
import ServicesSection from "@/components/ServicesSection";
import TypesOfGrassSection from "@/components/TypesOfGrassSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-green overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TypesOfGrassSection />
      </main>
      <Footer />
    </div>
  );
}
