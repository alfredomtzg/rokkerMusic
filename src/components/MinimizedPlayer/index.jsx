import React from "react";
import "../../assets/fonts/coolicons.css";
import {
  StyledMinimizedPlayer,
  StyledIconsLeft,
  StyledIconsRight,
  StyledSongDescription,
} from "./styles";

const MinimizedPlayer = () => {
  return (
    <StyledMinimizedPlayer>
      <StyledIconsLeft>
        <i className="ci-play_arrow" />
        <StyledSongDescription>
          <h6>Song title</h6>
          <p>Artist</p>
        </StyledSongDescription>
      </StyledIconsLeft>
      <StyledIconsRight>
        <i className="ci-heart_outline" />
        <i className="ci-skip_next" />
      </StyledIconsRight>
    </StyledMinimizedPlayer>
  );
};

export default MinimizedPlayer;
