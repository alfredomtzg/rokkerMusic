import React from "react";
import {
  StyledPlaylistItem,
  StyledPlaylistItemDark,
  StyledIconsLeft,
  StyledSongDescription,
  StyledIconsRight,
} from "./styles";
import "../../assets/fonts/coolicons.css";
import Song from "../../assets/images/SongCoverFullPlayer.svg";

export const PlaylistItem = () => {
  return (
    <StyledPlaylistItem>
      <StyledIconsLeft>
        <img src={Song} alt="Song Cover" />
        <StyledSongDescription>
          <h6>Song title</h6>
          <p>Artist</p>
        </StyledSongDescription>
      </StyledIconsLeft>
      <StyledIconsRight>
        <i className="ci-heart_outline" />
        <i className="ci-more_horizontal" />
        <i className="ci-minus_circle" />
      </StyledIconsRight>
    </StyledPlaylistItem>
  );
};

export const PlaylistItemDark = () => {
  return (
    <StyledPlaylistItemDark>
      <img src={Song} alt="Song Cover" />
      <StyledSongDescription>
        <h6>Song title</h6>
        <p>Artist</p>
      </StyledSongDescription>
    </StyledPlaylistItemDark>
  );
};
