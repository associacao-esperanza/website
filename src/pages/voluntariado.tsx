import Volunteers from "../components/Volunteers";

export type Area = {
  src: string;
  alt: string;
  area: string;
  description: string;
};

export type VolunteerProps = {
  areas: Area[];
};

export default function Voluntariado(props: VolunteerProps) {
  return <Volunteers {...props} />;
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
    },
  };
}
