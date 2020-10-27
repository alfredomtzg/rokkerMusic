/* eslint-disable react/prop-types */
import React from "react";
import StyledPlaylistContainer from "./styles";

const PlaylistContainer = ({ children }) => {
  return (
    <StyledPlaylistContainer>
      <h4>Playlist Title</h4>
      {children}
    </StyledPlaylistContainer>
  );
};

export default PlaylistContainer;
