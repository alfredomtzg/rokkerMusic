import React from "react";
import "../../assets/fonts/coolicons.css";
import {
  StyledMidCard,
  StyledSmallCard,
  StyledWideCard,
  StyledGenreCard,
} from "./styles";
import Logo from "../../assets/images/logo-rokker.png";

export const WideCard = () => {
  return (
    <StyledWideCard>
      <i className="ci-heart_fill"></i>
      <i className="ci-play_circle_filled black"></i>
    </StyledWideCard>
  );
};

export const MidFilledCard = () => {
  return (
    <StyledMidCard>
      <img src={Logo} alt="" />
      <p>Your playlist name</p>
      <i className="ci-play_circle_filled"></i>
    </StyledMidCard>
  );
};

export const MidFavoriteCard = () => {
  return (
    <StyledMidCard>
      <i className="ci-heart_fill"></i>
      <i className="ci-play_circle_filled black"></i>
    </StyledMidCard>
  );
};

export const SmallFilledCard = () => {
  return (
    <StyledSmallCard>
      <img src={Logo} alt="" />
      <p>Your playlist name</p>
      <i className="ci-play_circle_filled"></i>
    </StyledSmallCard>
  );
};

export const SmallFavoriteCard = () => {
  return (
    <StyledSmallCard>
      <i className="ci-heart_fill"></i>
      <i className="ci-play_circle_filled black"></i>
    </StyledSmallCard>
  );
};

export const SmallPlusCard = () => {
  return (
    <StyledSmallCard>
      <i className="ci-plus"></i>
    </StyledSmallCard>
  );
};

export const GenreCard = () => {
  return (
    <StyledGenreCard>
      <p>Your playlist name</p>
    </StyledGenreCard>
  );
};
