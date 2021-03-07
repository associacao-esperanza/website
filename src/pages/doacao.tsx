import HeroBlock, { HeroProps } from "components/HeroBlock";
import HowDonate from "components/HowDonate";
import { PageWrapper } from "components/PageWrapper/style";
import WhyDonate from "components/WhyDonate";


export type DonationProps = {
  hero: HeroProps;
};

export default function Donation({ hero }: DonationProps) {
  return (
    <PageWrapper>
      <HeroBlock
        title={hero.title}
        description={hero.description}
        isButton={hero.isButton}
        background={hero.background}
      />
      <WhyDonate />
      <HowDonate />
    </PageWrapper>
  );
}

export function getStaticProps() {
  return {
    props: {
      hero: {
        title: "Seja um patrocinador Esperanza",
        description:
          "Nos ajude a transformar o cenário educacional do Brasil através de nossas ações.",
        isButton: false,
        background: "/img/groupDonate.png",
      },
    },
  };
}
