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
  const { songData, playerStatus, setAutoplay } = useContext(Context);
  const [player, setPlayer] = useState("off");
  const [miniplay, setMiniplay] = useState("blocked");
  const [miniplayNext, setMiniplayNext] = useState("blocked");

  const maximizePlayer = () => {
    setPlayer("on");
  };

  const minimizePlayer = () => {
    setPlayer("off");
  };

  const toggleMiniplay = () => {
    if (miniplay === "blocked") {
      setMiniplay("on");
    } else if (miniplay === "on") {
      setMiniplay("off");
    } else {
      setMiniplay("on");
    }
  };

  const toggleMiniplayNext = () => {
    if (miniplayNext === "blocked") {
      setMiniplayNext("on");
    } else if (miniplayNext === "on") {
      setMiniplayNext("off");
    } else {
      setMiniplayNext("on");
    }
  };

  return (
    <StyledMinimizedPlayer>
      <StyledIconsLeft>
        <PlayPauseButton onClick={() => toggleMiniplay()} type="button">
          {playerStatus === "pause" ? (
            <i className="ci-play_arrow" />
          ) : (
            <i className="ci-pause_circle_outline" />
          )}
        </PlayPauseButton>
        <button
          className="maximizePlayer"
          onClick={maximizePlayer}
          type="button"
        >
          <StyledSongDescription>
            <h6> {songData.songTitle}</h6>
            <p>{songData.artistName}</p>
          </StyledSongDescription>
        </button>
      </StyledIconsLeft>
      <StyledIconsRight>
        <i className="ci-heart_outline" />
        <PlayNext
          type="button"
          onClick={() => {
            toggleMiniplayNext();
            console.log(`click miniplayer next`);
            setAutoplay(true);
          }}
        >
          <i className="ci-skip_next" />
        </PlayNext>
      </StyledIconsRight>
      <FullscreenPlayerPage
        miniplay={miniplay}
        miniplayNext={miniplayNext}
        playerDisplay={player}
        minimizePlayer={minimizePlayer}
      />
    </StyledMinimizedPlayer>
  );
};

export default MinimizedPlayer;
