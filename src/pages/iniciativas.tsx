import { HeroProps } from "components/HeroBlock";
import { PageWrapper } from "components/PageWrapper/style";
import Initiatives from "../components/Initiatives";

export type InitiativesProps = {
  hero: HeroProps;
};

export default function Equipe(props: InitiativesProps) {
  return (
    <PageWrapper>
      <Initiatives {...props} />
    </PageWrapper>
  );
}

export function getStaticProps() {
  return {
    props: {
      hero: {
        title: " Seja aluno dos nossos projetos apoiados",
        description:
          "A Associação Esperanza apoia diversas ONGs e projetos educacionais que visam entregar educação pública e popular de qualidade para pessoas que realmente precisam.",
        isButton: false,
        background: "/img/Initiatives/bg.png",
      },
    },
  };
}
