import React from "react";
import StyledPlaylistItemDark from "./style";
import { StyledSongDescription } from "../PlaylistItem/styles";
import Song from "../../assets/images/SongCoverFullPlayer.svg";

const PlaylistItemDark = () => {
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

export default PlaylistItemDark;
