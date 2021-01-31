import AboutUs, { Profile } from "components/AboutUs";
import Classes from "components/Classes";
import Footer from "components/Footer";
import HeroSection from "components/HeroSection";
import History from "components/History";
import MVV from "components/MVV";
import Partners from "components/Partners";
import Projects from "components/Projects";

export type HomeProps = {
  profiles: Profile[];
};

export default function Home(props: HomeProps) {
  return (
    <>
      <HeroSection />
      <Projects />
      <Classes />
      <History />
      <MVV />
      <AboutUs {...props} />
      <Partners />
      <Footer />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      profiles: [
        {
          src: "/img/Rafaela.png",
          alt: "Foto de Rafaela Maehara",
          testimony: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          author: 'Rafaela Maehara (Diretora de Comunicação)'
        },
        {
          src: "/img/Rafaela.png",
          alt: "Foto de Rafaela Maehara",
          testimony: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          author: 'Rafaela Maehara (Diretora de Comunicação)'
        },
        {
          src: "/img/Rafaela.png",
          alt: "Foto de Rafaela Maehara",
          testimony: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          author: 'Rafaela Maehara (Diretora de Comunicação)'
        },
      ],
    },
  };
}
