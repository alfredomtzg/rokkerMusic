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

export const FullscreenPlayer = () => {
  return (
    <div>
      <TopOptions>
        <i className="ci-chevron_big_down"></i>
        <div>
          <h6>Played from playlist</h6>
          <h5>My Playlist</h5>
        </div>
        <i className="ci-more_vertical"></i>
      </TopOptions>
      <SongCover>
        <img src={SongCoverImg}></img>
      </SongCover>
      <SongTitleAndArtist>
        <h3>Sucker</h3>
        <h4>Jonas Brothers</h4>
      </SongTitleAndArtist>
      <Timeline>
        <h5>2:54</h5>
        <div>
          <TotalBar></TotalBar>
          <ProgressBar></ProgressBar>
        </div>
        <h5>03:29</h5>
      </Timeline>
      <PlayerMedia>
        <PlayerButtons>
          <div>
            <i className="ci-shuffle"></i>
            <i className="ci-repeat"></i>
          </div>
          <div>
            <i className="ci-skip_previous"></i>
            <i className="ci-play_circle_filled"></i>
            <i className="ci-skip_next"></i>
          </div>
          <i className="ci-heart_fill"></i>
        </PlayerButtons>
        <PlayerBottomButtons>
          <i className="ci-list_plus"></i>
          <i className="ci-list_check"></i>
        </PlayerBottomButtons>
      </PlayerMedia>
    </div>
  );
};
