import React from "react";
import {
  StyledPlaylistItemDark,
  StyledSongDescription,
} from "./style";
import "../../assets/fonts/coolicons.css";
import Song from "../../assets/images/SongCoverFullPlayer.svg";


const PlaylistTitle = () => {
  return (
    <StyledPlaylistItemDark>
      <img src={Song} alt="Song Cover" />
      <StyledSongDescription>
        <h6>Playlist title</h6>
      </StyledSongDescription>
    </StyledPlaylistItemDark>
  );
};
export default PlaylistTitle;