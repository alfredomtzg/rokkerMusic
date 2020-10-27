import React from "react";
import {
  StyledPlaylistItem,
  StyledIconsLeft,
  StyledSongDescription,
  StyledIconsRight,
} from "./styles";
import "../../assets/fonts/coolicons.css";
import Song from "../../assets/images/SongCoverFullPlayer.svg";

const PlaylistItem = () => {
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
        <i className="ci-more_horizontal" />
        <i className="ci-heart_outline" />
      </StyledIconsRight>
    </StyledPlaylistItem>
  );
};

export default PlaylistItem;
