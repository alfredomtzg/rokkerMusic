import React from "react";
import "../../assets/fonts/coolicons.css";
import {
  StyledMidCard,
  StyledSmallCard,
  StyledWideCard,
  StyledGenreCard,
  StyledSearchRecommendation,
  StyledArtistSearchCard,
  StyledPlaylistSearchCard,
  StyledNewPlaylistCard,
  StyledMyFavoritesCard,
  StyledPlaylistCard,
  StyledPlaylistBigCard,
  StyledFavoritesBigCard,
} from "./styles";
import Logo from "../../assets/images/logo-rokker.png";
import ArtistAvatar from "../../assets/images/avatars/Beepboop.svg";

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

export const ArtistSearchCard = () => {
  return (
    <StyledArtistSearchCard>
      <div>
        <img src={ArtistAvatar} alt="Artist Avatar" />
        <h6>Artist name</h6>
      </div>
      <i className="ci-chevron_big_right" />
    </StyledArtistSearchCard>
  );
};

export const PlaylistSearchCard = () => {
  return (
    <StyledPlaylistSearchCard>
      <div>
        <img src={Logo} alt="Playlist Cover" />
        <h6>Playlist name</h6>
      </div>
      <i className="ci-chevron_big_right" />
    </StyledPlaylistSearchCard>
  );
};

export const NewPlaylistCard = () => {
  return (
    <StyledNewPlaylistCard>
      <div>
        <SmallPlusCard />
        <h4>New Playlist</h4>
      </div>
      <i className="ci-chevron_big_right" />
    </StyledNewPlaylistCard>
  );
};

export const MyFavoritesCard = () => {
  return (
    <StyledMyFavoritesCard>
      <div>
        <SmallFavoriteCard />
        <h4>Favorites</h4>
      </div>
      <i className="ci-chevron_big_right" />
    </StyledMyFavoritesCard>
  );
};

export const PlaylistCard = () => {
  return (
    <StyledPlaylistCard>
      <div>
        <SmallFilledCard />
        <h4>Playlist title</h4>
      </div>
      <i className="ci-chevron_big_right" />
    </StyledPlaylistCard>
  );
};

export const PlaylistBigCard = () => {
  return (
    <StyledPlaylistBigCard>
      <MidFilledCard />
      <h1>Playlist title</h1>
    </StyledPlaylistBigCard>
  );
};

export const FavoritesBigCard = () => {
  return (
    <StyledFavoritesBigCard>
      <MidFavoriteCard />
      <h1>Playlist title</h1>
    </StyledFavoritesBigCard>
  );
};
