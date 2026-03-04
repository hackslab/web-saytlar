import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import SuccessNumbers from "./components/SuccessNumbers";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import BlogSection from "./components/BlogSection";
import { fetchBlogs } from "./data/blogs";

export default async function Home() {
  const blogs = await fetchBlogs();

  return (
    <main>
      <Header />
      <AboutUs />
      <ServicesSection />
      <SuccessNumbers />
      <PortfolioSection />
      <BlogSection blogs={blogs} />
    </main>
  );
}
