/* eslint-disable no-console */
import React, { useContext, useState } from "react";
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
import { Context } from "../../utils/Context";

const FullscreenPlayer = () => {
  const [audio] = useState(
    new Audio(
      "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3"
    )
  );
  // stateGlobal
  const { name } = useContext(Context);
  // hangle buttonBoolean
  const [playPause, setPlayPause] = useState(false);

  // Play or pause function
  const handlePlayPause = () => {
    console.log(playPause);
    if (audio.paused) {
      console.log("paused -> play");
      audio.play();
      setPlayPause(true);
    } else {
      console.log("play -> pause");
      audio.pause();
      setPlayPause(false);
    }
  };

  return (
    <div>
      <TopOptions>
        <i className="ci-chevron_big_down" />
        <div>
          <h6>Played from {name.playlistFrom}</h6>
          <h5>{name.playlistName}</h5>
        </div>
        <i className="ci-more_vertical" />
      </TopOptions>
      <SongCover>
        <img src={SongCoverImg} alt="Cover for the song" />
      </SongCover>
      <SongTitleAndArtist>
        <h3> {name.song}</h3>
        <h4> {name.artistName} </h4>
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
            <PrevButton className="ci-skip_previous" />
            <PlayPauseButton
              type="button"
              onClick={() => {
                handlePlayPause();
              }}
            >
              {!playPause ? (
                <i className="ci-play_circle_filled" />
              ) : (
                <i className="ci-pause_circle_filled" />
              )}
            </PlayPauseButton>
            <NextButton className="ci-skip_next" />
          </div>
          <HeartButton className="ci-heart_fill" />
        </PlayerButtons>
        <PlayerBottomButtons>
          <i className="ci-list_plus" />
          <i className="ci-list_check" />
        </PlayerBottomButtons>
      </PlayerMedia>
      {/* <audio controls>
        <source
          src="https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3"
          type="audio/ogg"
        />
        <source
          src="https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3"
          type="audio/mpeg"
        />
        <track src="/media/examples/friday.vtt" />
        Your browser does not support the audio element.
      </audio> */}
    </div>
  );
};

export default FullscreenPlayer;
