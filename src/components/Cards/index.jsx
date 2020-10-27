import React from "react";
import "../../assets/fonts/coolicons.css";
import {
  StyledMidCard,
  StyledSmallCard,
  StyledWideCard,
  StyledGenreCard,
  StyledSearchRecommendation,
} from "./styles";
import Logo from "../../assets/images/logo-rokker.png";

export const WideCard = () => {
  return (
    <StyledWideCard>
      <i className="ci-heart_fill" />
      <i className="ci-play_circle_filled black" />
    </StyledWideCard>
  );
};

export const MidFilledCard = () => {
  return (
    <StyledMidCard>
      <img src={Logo} alt="" />
      <p>Your playlist name</p>
      <i className="ci-play_circle_filled" />
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
    <StyledGenreCard>
      <p>Your playlist name</p>
    </StyledGenreCard>
  );
};

export const SearchRecommendation = () => {
  return (
    <StyledSearchRecommendation>
      <i className="ci-long_bottom_up" />
      <h5>Autocomplete item</h5>
    </StyledSearchRecommendation>
  );
};
