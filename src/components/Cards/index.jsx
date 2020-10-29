import React from "react";
import "../../assets/fonts/coolicons.css";
import { Link } from "react-router-dom";
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
      <Link to="/playlist-content">
        <i className="ci-heart_fill" />
        <i className="ci-play_circle_filled black" />
      </Link>
    </StyledWideCard>
  );
};

export const MidFilledCard = () => {
  return (
    <StyledMidCard>
      <Link to="/playlist-content">
        <img src={Logo} alt="" />
        <p>Your playlist name</p>
        <i className="ci-play_circle_filled" />
      </Link>
    </StyledMidCard>
  );
};

export const MidFavoriteCard = () => {
  return (
    <StyledMidCard>
      <i className="ci-heart_fill" />
      <i className="ci-play_circle_filled black" />
    </StyledMidCard>
  );
};

export const SmallFilledCard = () => {
  return (
    <StyledSmallCard>
      <img src={Logo} alt="" />
      <p>Your playlist name</p>
      <i className="ci-play_circle_filled" />
    </StyledSmallCard>
  );
};

export const SmallFavoriteCard = () => {
  return (
    <StyledSmallCard>
      <i className="ci-heart_fill" />
      <i className="ci-play_circle_filled black" />
    </StyledSmallCard>
  );
};

export const SmallPlusCard = () => {
  return (
    <StyledSmallCard>
      <i className="ci-plus" />
    </StyledSmallCard>
  );
};

export const GenreCard = () => {
  return (
    <Link to="/playlist-content">
      <StyledGenreCard>
        <p>Your playlist name</p>
      </StyledGenreCard>
    </Link>
  );
};
