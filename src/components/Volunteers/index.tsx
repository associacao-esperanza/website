import React from "react";

import * as S from "./styles";

import ToBeEsperanza from "components/ToBeEsperanza";
import OurImpactAndODV from "components/OurImpactAndODV";
import Benefits from "components/Benefits";
import Areas from "components/Areas";
import { VolunteerProps } from "pages/voluntariado";
import HeroBlock from "components/HeroBlock";

const Volunteers = (props: VolunteerProps) => (
  <S.Wrapper>
    <HeroBlock
      isButton={props.hero.isButton}
      background={props.hero.background}
      title={props.hero.title}
      description={props.hero.description}
      buttonName={props.hero.buttonName}
    />
    <ToBeEsperanza />
    <OurImpactAndODV />
    <Benefits />
    <Areas {...props} />
  </S.Wrapper>
);

export default Volunteers;
