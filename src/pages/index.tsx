import AboutUs from "components/AboutUs";
import Classes from "components/Classes";
import Footer from "components/Footer";
import HeroSection from "components/HeroSection";
import History from "components/History";
import MVV from "components/MVV";
import Partners from "components/Partners";
import Projects from "components/Projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Classes />
      <History />
      <MVV />
      <AboutUs />
      <Partners />
      <Footer />
    </>
  );
}
