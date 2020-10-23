import React from "react";
import "../../assets/fonts/coolicons.css";
import {
  StyledMinimizedPlayer,
  StyledIconsLeft,
  StyledIconsRight,
} from "./styles";

export const MinimizedPlayer = () => {
  return (
    <StyledMinimizedPlayer>
      <StyledIconsLeft>
        <i className="ci-play_arrow"></i>
        <div>
          <h6>Song title</h6>
          <p>Artist</p>
        </div>
      </StyledIconsLeft>
      <StyledIconsRight>
        <i className="ci-heart_outline"></i>
        <i className="ci-skip_next"></i>
      </StyledIconsRight>
    </StyledMinimizedPlayer>
  );
};
