import { HeroProps } from "components/HeroBlock";
import { PageWrapper } from "components/PageWrapper/style";
import Volunteers from "../components/Volunteers";

export type Area = {
  src: string;
  alt: string;
  area: string;
  description: string;
};

export type VolunteerProps = {
  areas: Area[];
  hero: HeroProps
};

export default function Voluntariado(props: VolunteerProps) {
  return (
    <PageWrapper>
      <Volunteers {...props} />
    </PageWrapper>
  );
}

export function getStaticProps() {
  return {
    props: {
      areas: [
        {
          src: "/img/Volunteers/capa-area.png",
          alt:
            "Foto mãos digitando em um latop envolto por ícones que remetem à web",
          area: "Comunicação",
          description:
            "Para fazer com que você tenha acesso a inúmeros benefícios por servoluntário Esperanza.",
        },
        {
          src: "/img/Volunteers/capa-area.png",
          alt:
            "Foto mãos digitando em um latop envolto por ícones que remetem à web",
          area: "Comunicação",
          description:
            "Para fazer com que você tenha acesso a inúmeros benefícios por servoluntário Esperanza.",
        },
        {
          src: "/img/Volunteers/capa-area.png",
          alt:
            "Foto mãos digitando em um latop envolto por ícones que remetem à web",
          area: "Comunicação",
          description:
            "Para fazer com que você tenha acesso a inúmeros benefícios por servoluntário Esperanza.",
        },
      ],
      hero: {
        title: "Já pensou em ser parte da solução?",
        background: "/img/Volunteers/capa-voluntariado.png",
        isButton: true,
        buttonName: "Seja voluntário",
        description:
          "Se prepare para o mercado de trabalho e seja parte da mudança se voluntariando com o Esperanza.",
      },
    },
  };
}
