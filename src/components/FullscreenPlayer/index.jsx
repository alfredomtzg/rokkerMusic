import React, { useContext, useState, useEffect } from "react";
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
} from "./style";
import SongCoverImg from "../../assets/images/SongCoverFullPlayer.svg";
import { Context } from "../../utils/Context";

const FullscreenPlayer = () => {
  const audio = new Audio(
    "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3"
  );
  // stateGlobal
  const { name } = useContext(Context);
  // hangle buttonBoolean
  const [playPause, setPlayPause] = useState(true);
  // Play or pause function

  console.log(audio.paused);

  const handlePlayPause = () => {
    if (audio.paused) {
      console.log("paused -> play");
      audio.play();
    } else {
      console.log("play -> pause");
      audio.pause();
    }
  };
  const iconpauseplay = () => {
    setPlayPause(!playPause);
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
            <i className="ci-shuffle" />
            <i className="ci-repeat" />
          </div>
          <div>
            <i className="ci-skip_previous" />
            {playPause ? (
              <button
                className="buttonPlay"
                type="button"
                onClick={() => {
                  handlePlayPause();
                  iconpauseplay();
                }}
              >
                <i className="ci-play_circle_filled" />
              </button>
            ) : (
              <button
                className="buttonPlay"
                type="button"
                onClick={() => {
                  handlePlayPause();
                  iconpauseplay();
                }}
              >
                <i className="ci-pause_circle_filled" />
              </button>
            )}

            <i className="ci-skip_next" />
          </div>
          <i className="ci-heart_fill" />
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
