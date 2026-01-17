import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutUs />
      <ServicesSection />
      <PortfolioSection />
    </main>
  );
}
