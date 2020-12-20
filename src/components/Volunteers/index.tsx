import React from "react";

import * as S from "./styles";

import VolunteerCTA from "components/VolunteerCTA";
import ToBeEsperanza from "components/ToBeEsperanza";
import OurImpactAndODV from "components/OurImpactAndODV";
import Benefits from "components/Benefits";
import Areas from "components/Areas";

const Main = () => (
  <S.Wrapper>
    <VolunteerCTA />
    <ToBeEsperanza />
    <OurImpactAndODV />
    <Benefits />
    <Areas />
  </S.Wrapper>
);

export default Main;
