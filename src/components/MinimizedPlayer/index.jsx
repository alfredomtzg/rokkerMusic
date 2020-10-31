import React, { useState } from "react";
import "../../assets/fonts/coolicons.css";
import FullscreenPlayerPage from "../../pages/FullscreenPlayer";
import {
  StyledMinimizedPlayer,
  StyledIconsLeft,
  StyledIconsRight,
  StyledSongDescription,
} from "./styles";

const MinimizedPlayer = () => {
  const [player, setPlayer] = useState("off");

  const maximizePlayer = () => {
    setPlayer("on");
  };

  const minimizePlayer = () => {
    setPlayer("off");
  };

  return (
    <StyledMinimizedPlayer>
      <StyledIconsLeft>
        <button className="maximizePlayer" onClick={maximizePlayer} type="button">
          <i className="ci-chevron_big_up" />
        </button>
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
      <FullscreenPlayerPage
        playerDisplay={player}
        minimizePlayer={minimizePlayer}
      />
    </StyledMinimizedPlayer>
  );
};

export default MinimizedPlayer;
