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
} from "./style";
import SongCoverImg from "../../assets/images/SongCoverFullPlayer.svg";

const FullscreenPlayer = () => {
  return (
    <div>
      <TopOptions>
        <i className="ci-chevron_big_down" />
        <div>
          <h6>Played from playlist</h6>
          <h5>My Playlist</h5>
        </div>
        <i className="ci-more_vertical" />
      </TopOptions>
      <SongCover>
        <img src={SongCoverImg} alt="Cover for the song" />
      </SongCover>
      <SongTitleAndArtist>
        <h3>Sucker</h3>
        <h4>Jonas Brothers</h4>
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
            <i className="ci-play_circle_filled" />
            <i className="ci-skip_next" />
          </div>
          <i className="ci-heart_fill" />
        </PlayerButtons>
        <PlayerBottomButtons>
          <i className="ci-list_plus" />
          <i className="ci-list_check" />
        </PlayerBottomButtons>
      </PlayerMedia>
    </div>
  );
};

export default FullscreenPlayer;