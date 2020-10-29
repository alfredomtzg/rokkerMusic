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
} from "./style";
import SongCoverImg from "../../assets/images/SongCoverFullPlayer.svg";
import { Context } from "../../utils/Context";

const FullscreenPlayer = () => {
  // stateGlobal
  const { name } = useContext(Context);
  const [playPause, setPlayPause] = useState(true);
  const hanglePlayPause = () => {
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
            <button
              className="buttonPlay"
              type="button"
              onClick={() => {
                hanglePlayPause();
              }}
            >
              {playPause ? (
                <i className="ci-play_circle_filled" />
              ) : (
                <i className="ci-pause_circle_filled" />
              )}
            </button>

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
        <source src="horse.ogg" type="audio/ogg" />
        <source src="horse.mp3" type="audio/mpeg" />
        <track src="/media/examples/friday.vtt" />
        Your browser does not support the audio element.
      </audio> */}
    </div>
  );
};

export default FullscreenPlayer;
