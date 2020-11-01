import React from "react";
import {
  StyledPlaylistItemDark,
  StyledSongDescription,
  StyledContainerButton,
} from "./style";
import "../../assets/fonts/coolicons.css";
import Song from "../../assets/images/SongCoverFullPlayer.svg";

const PlaylistTitle = () => {
  return (
    <StyledContainerButton type="button">
      <StyledPlaylistItemDark>
        <img src={Song} alt="Song Cover" />
        <StyledSongDescription>
          <h6>PlayList Title</h6>
        </StyledSongDescription>
      </StyledPlaylistItemDark>
    </StyledContainerButton>
  );
};
export default PlaylistTitle;
