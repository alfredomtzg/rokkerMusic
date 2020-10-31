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
    songData,
    playerStatus,
    togglePlay,
    nextSong,
    previousSong,
    queue,
    setQueue,
  } = props;
  return (
    <>
      <TopOptions>
        <i className="ci-chevron_big_down" />
        <div>
          <h6>Played from {songData.playlistFrom}</h6>
          <h5>{songData.playlistName}</h5>
        </div>
        <i className="ci-more_vertical" />
      </TopOptions>
      <SongCover>
        <img src={SongCoverImg} alt="Cover for the song" />
      </SongCover>
      <SongTitleAndArtist>
        <h3> {songData.songTitle}</h3>
        <h4> {songData.artistName} </h4>
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
            <ShuffleButton className="ci-shuffle" />
            <RepeatButton className="ci-repeat" />
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
          <HeartButton className="ci-heart_fill" />
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
