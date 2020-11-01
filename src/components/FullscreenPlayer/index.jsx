/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from "react";
import "../../assets/fonts/coolicons.css";
import {
  TopOptions,
  SongCover,
  SongTitleAndArtist,
  Timeline,
  PlayerMedia,
  PlayerButtons,
  PlayerBottomButtons,
  TotalBar,
  ProgressBar,
  ShuffleButton,
  RepeatButton,
  PrevButton,
  PlayPauseButton,
  NextButton,
  HeartButton,
} from "./style";
import SongCoverImg from "../../assets/images/SongCoverFullPlayer.svg";

const FullscreenPlayer = (props) => {
  const {
    minimizePlayer,
    songData,
    playerStatus,
    togglePlay,
    nextSong,
    previousSong,
  } = props;
  return (
    <>
      <TopOptions>
        <button
          className="minimizePlayer"
          onClick={minimizePlayer}
          type="button"
        >
          <i className="ci-chevron_big_down" />
        </button>
        <div>
          <h6>Played from</h6>
          <h5>{songData.playlistName}</h5>
        </div>
        <i className="ci-more_vertical" />
      </TopOptions>
      <SongCover>
        <img src={SongCoverImg} alt="Cover for the song" />
      </SongCover>
      <SongTitleAndArtist>
        <h4> {songData.songTitle}</h4>
        <h5> {songData.artistName} </h5>
      </SongTitleAndArtist>

      <Timeline>
        <h5>2:54</h5>
        <div>
          <TotalBar />
          <ProgressBar />
        </div>
        <h5>03:29</h5>
      </Timeline>
      <PlayerMedia>
        <PlayerButtons>
          <div>
            <ShuffleButton>
              <i className="ci-shuffle" />
            </ShuffleButton>
            <RepeatButton>
              <i className="ci-repeat" />
            </RepeatButton>
          </div>
          <div>
            <PrevButton onClick={() => previousSong()}>
              <i className="ci-skip_previous" />
            </PrevButton>
            <PlayPauseButton type="button" onClick={togglePlay}>
              {playerStatus === "pause" ? (
                <i className="ci-play_circle_filled" />
              ) : (
                <i className="ci-pause_circle_filled" />
              )}
            </PlayPauseButton>
            <NextButton onClick={nextSong}>
              <i className="ci-skip_next" />
            </NextButton>
          </div>
          <HeartButton>
            <i className="ci-heart_fill" />
          </HeartButton>
        </PlayerButtons>
        <PlayerBottomButtons>
          <i className="ci-list_plus" />
          <i className="ci-list_check" />
        </PlayerBottomButtons>
      </PlayerMedia>
    </>
  );
};

export default FullscreenPlayer;
