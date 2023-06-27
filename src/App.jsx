// import './App.css'
import Header from "./components/template/Header";
import HeroSection from "./components/template/HeroSection";
import AboutSection from "./components/template/AboutSection";
import PortofolioSection from "./components/template/PortofolioSection";
import ClientSection from "./components/template/ClientSection";
import BlogSection from "./components/template/BlogSection";
import ContactSection from "./components/template/ContactSection";
import Footer from "./components/template/Footer";
import ScrollOnTop from "./components/template/ScrollOnTop";
import "tailwindcss/tailwind.css";
import "./input.css";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      {/* <Header /> */}
      <PortofolioSection />
      <ClientSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <ScrollOnTop />
    </div>
  )
}

export default App;