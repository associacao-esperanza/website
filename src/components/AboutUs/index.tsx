import { HomeProps } from "pages";
import React from "react";
import * as S from "./styles";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

export type Profile = {
  src: string;
  alt: string;
  testimony: string;
  author: string;
};

const AboutUs = ({ profiles }: HomeProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    spacing: 10,
    slidesPerView: 1,
    centered: true,
    loop: true,
    mode: "snap",
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 2,
        mode: "free-snap",
      },
      "(min-width: 1200px)": {
        slidesPerView: 3,
        mode: "free-snap",
      },
    },
  });

  const profilesRender = profiles.map((profile, index) => {
    const className = `keen-slider__slide number-slide${index + 1}`;
    return (
      <S.Profile className={className} key={index}>
        <S.Image src={profile.src} alt={profile.alt} />
        <S.Description>{profile.testimony}</S.Description>
        <S.ClearFix />
        <S.Author>{profile.author}</S.Author>
      </S.Profile>
    );
  });

  return (
    <S.Wrapper>
      <S.Title>O que estão falando do Esperanza?</S.Title>
      <S.Messages className="keen-slider" ref={ref}>
        {profilesRender}
      </S.Messages>
    </S.Wrapper>
  );
};

export default AboutUs;
