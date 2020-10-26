import React from "react";
import { StyledPlaylistContainer } from "./styles" 

export const PlaylistContainer = ({ children }) => {
  return (
      <StyledPlaylistContainer>
        <h4>Playlis Title</h4>
        { children }
      </StyledPlaylistContainer>
  )
}