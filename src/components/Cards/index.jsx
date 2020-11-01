import React from "react";
import { Link } from "react-router-dom";
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
  StyledArtistProfileCard,
  StyledQueueReturn,
  StyledAddToQueue,
  StyledAddToPlaylist,
  StyledSeeArtistProfile,
  StyledAddRemoveFromFavorites,
  StyledGreetingsCard,
} from "./styles";
import Logo from "../../assets/images/logo-rokker.png";
import ArtistAvatar from "../../assets/images/avatars/Beepboop.svg";
import UserAvatar from "../../assets/images/avatars/Eliot.svg";

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

export const MidFilledCard = (props) => {
  const { img, title } = props;
  return (
    <StyledMidCard>
      <Link to="/playlist-content">
        <img src={img} alt={title} />
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

export const FavoritesCard = () => {
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

export const ArtistProfileCard = () => {
  return (
    <StyledArtistProfileCard>
      <img src={ArtistAvatar} alt="" />
      <h1>Artist name</h1>
    </StyledArtistProfileCard>
  );
};

export const QueueReturn = () => {
  return (
    <StyledQueueReturn>
      <i className="ci-chevron_big_left" />
      <h4>Queue</h4>
    </StyledQueueReturn>
  );
};

export const AddToQueue = () => {
  return (
    <StyledAddToQueue>
      <div>
        <i className="ci-list_plus" />
        <h5>Add to queue</h5>
      </div>
      <i className="ci-chevron_big_right" />
    </StyledAddToQueue>
  );
};

export const SeeArtistProfile = () => {
  return (
    <StyledSeeArtistProfile>
      <div>
        <i className="ci-user_circle" />
        <h5>See Artist Profile</h5>
      </div>
      <i className="ci-chevron_big_right" />
    </StyledSeeArtistProfile>
  );
};

export const AddToPlaylist = () => {
  return (
    <StyledAddToPlaylist>
      <div>
        <i className="ci-plus" />
        <h5>Add to Playlist</h5>
      </div>
      <i className="ci-chevron_big_right" />
    </StyledAddToPlaylist>
  );
};

export const AddRemoveFromFavorites = () => {
  return (
    <StyledAddRemoveFromFavorites>
      <div>
        <i className="ci-heart_fill" />
        <h5>Add/Remove from favorites</h5>
      </div>
      <i className="ci-chevron_big_right" />
    </StyledAddRemoveFromFavorites>
  );
};

export const GreetingsCard = () => {
  return (
    <StyledGreetingsCard>
      <h2>Hello, Mike!</h2>
      <Link to="/settings">
        <img src={UserAvatar} alt="user avatar" />
      </Link>
    </StyledGreetingsCard>
  );
};
