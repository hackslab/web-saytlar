import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import SuccessNumbers from "./components/SuccessNumbers";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import BlogSection from "./components/BlogSection";
export default function Home() {
  return (
    <main>
      <Header />
      <AboutUs />
      <ServicesSection />
      <SuccessNumbers />
      <PortfolioSection />
      <BlogSection />
    </main>
  );
}
