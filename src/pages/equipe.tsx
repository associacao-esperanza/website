import { HeroProps } from "components/HeroBlock";
import { PageWrapper } from "components/PageWrapper/style";
import Team from "../components/Team";



export type TeamProps = {
  hero: HeroProps;
};

export default function Equipe(props : TeamProps) {
  return (
    <PageWrapper>
      <Team {...props}/>
    </PageWrapper>
  );
}

export function getStaticProps() {
  return {
    props: {
      hero: 
        {
          title: "Conheça a equipe Esperanza",
          description:
            "Nosso time é composto por profissionais que atuam em diferentes áreas, mas que possuem uma característica em comum: querer fazer a diferença.",
          isButtonActive: false,
          background: "/img/Team/knowtheteam.png"
        },
    },
  };
}
