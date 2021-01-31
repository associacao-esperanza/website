import React from "react";

import * as S from "./styles";

import VolunteerCTA from "components/VolunteerCTA";
import ToBeEsperanza from "components/ToBeEsperanza";
import OurImpactAndODV from "components/OurImpactAndODV";
import Benefits from "components/Benefits";
import Areas from "components/Areas";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

const Volunteers = () => (
  <S.Wrapper>
    <NavBar />
    <VolunteerCTA />
    <ToBeEsperanza />
    <OurImpactAndODV />
    <Benefits />
    <Areas />
    <Footer />
  </S.Wrapper>
);

export default Volunteers;