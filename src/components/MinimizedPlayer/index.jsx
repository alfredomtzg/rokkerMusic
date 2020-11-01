import React, { useState, useContext } from "react";
import "../../assets/fonts/coolicons.css";
import FullscreenPlayerPage from "../../pages/FullscreenPlayer";
import {
  StyledMinimizedPlayer,
  StyledIconsLeft,
  StyledIconsRight,
  StyledSongDescription,
  PlayPauseButton,
  PlayNext,
} from "./styles";
import { Context } from "../../utils/Context";

const MinimizedPlayer = () => {
  const { songData, playerStatus } = useContext(Context);
  const [player, setPlayer] = useState("off");
  const [miniplay, setMiniplay] = useState("off");
  const [miniplayNext, setMiniplayNext] = useState("off");

  const maximizePlayer = () => {
    setPlayer("on");
  };

  const minimizePlayer = () => {
    setPlayer("off");
  };
  const toggleMiniplay = () => {
    if (miniplay === "off") {
      setMiniplay("on");
    } else {
      setMiniplay("off");
    }
  };

  const toggleMiniplayNext = () => {
    if (miniplayNext === "off") {
      setMiniplayNext("on");
    } else {
      setMiniplayNext("off");
    }
  };

  return (
    <StyledMinimizedPlayer>
      <StyledIconsLeft>
        <button
          className="maximizePlayer"
          onClick={maximizePlayer}
          type="button"
        >
          <i className="ci-chevron_big_up" />
        </button>
        <PlayPauseButton onClick={() => toggleMiniplay()} type="button">
          {playerStatus === "pause" ? (
            <i className="ci-play_circle_filled" />
          ) : (
            <i className="ci-pause_circle_filled" />
          )}
        </PlayPauseButton>
        <StyledSongDescription>
          <h6>{songData.songTitle}</h6>
          <p>{songData.artistName}</p>
        </StyledSongDescription>
      </StyledIconsLeft>
      <StyledIconsRight>
        <i className="ci-heart_outline" />
        <PlayNext
          type="button"
          onClick={() => {
            toggleMiniplayNext();
          }}
        >
          <i className="ci-skip_next" />
        </PlayNext>
      </StyledIconsRight>
      <FullscreenPlayerPage
        miniplayNext={miniplayNext}
        miniplay={miniplay}
        playerDisplay={player}
        minimizePlayer={minimizePlayer}
      />
    </StyledMinimizedPlayer>
  );
};

export default MinimizedPlayer;
