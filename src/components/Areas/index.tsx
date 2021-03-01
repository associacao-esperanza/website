import React from "react";
import Button, { ButtonType } from "components/Button";
import { useKeenSlider } from "keen-slider/react";

import * as S from "./styles";
import { VolunteerProps } from "pages/voluntariado";

const Areas = ({ areas }: VolunteerProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    spacing: 10,
    slidesPerView: 1,
    centered: true,
    loop: true,
    mode: "snap",
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 1,
        mode: "free-snap",
      },
      "(min-width: 1200px)": {
        slidesPerView: 1,
        mode: "free-snap",
      },
    },  
  });

  const cardsRender = areas.map((area, index) => {

    const className =`keen-slider__slide number-slide${index + 1}`;
    
    return (
      <S.Card className={className} key={index}>
        <S.Profile>
          <S.Image src={area.src} alt={area.alt} />
          <section>
            <S.Area>{area.area}</S.Area>
            <S.Description>{area.description}</S.Description>
          </section>
        </S.Profile>
      </S.Card>
    );
  });

  const className =`keen-slider__slide number-slide${1}`;

  return (
    <S.Wrapper>
      <S.Title>Áreas</S.Title>
      <S.Areas className="keen-slider" ref={ref}>
      <S.Card className={className} key={1}>
        <S.Profile>
          <S.Image src={areas[0].src} alt={areas[0].alt} />
          <section>
            <S.Area>{areas[0].area}</S.Area>
            <S.Description>{areas[0].description}</S.Description>
          </section>
        </S.Profile>
      </S.Card>      </S.Areas>
      <S.Actions>
        <Button type={ButtonType.SECONDARY}>Seja voluntário</Button>
      </S.Actions>
    </S.Wrapper>
  );
};

export default Areas;
