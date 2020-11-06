/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
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
import Modal from "../Modal";
import SongCoverImg from "../../assets/images/SongCoverFullPlayer.svg";

const FullscreenPlayer = (props) => {
  const {
    minimizePlayer,
    songData,
    playerStatus,
    togglePlay,
    nextSong,
    previousSong,
    currentTime,
    songDuration,
    progressBar,
  } = props;

  const openQueue = () => {
    minimizePlayer();
    props.history.push("/queue");
  };

  const [modalOn, setModalOn] = useState(false);
  const openModal = () => {
    setModalOn(true);
  };
  const closeModal = () => {
    setModalOn(false);
  };

  const [bucle, setBucle] = useState("off");
  const handleBucle = () => {
    if (bucle === "off") {
      setBucle("on");
    } else {
      setBucle("off");
    }
  };

  const [shuffle, setShuffle] = useState("off");
  const handleShuffle = () => {
    if (shuffle === "off") {
      setShuffle("on");
    } else {
      setShuffle("off");
    }
  };

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
        <button onClick={openModal} type="button">
          <i className="ci-more_vertical" />
        </button>
      </TopOptions>
      <SongCover>
        <img src={SongCoverImg} alt="Cover for the song" />
      </SongCover>
      <SongTitleAndArtist>
        <h4> {songData.songTitle}</h4>
        <h5> {songData.artistName} </h5>
      </SongTitleAndArtist>

      <Timeline>
        <h5>{currentTime}</h5>
        <div>
          <TotalBar />
          <ProgressBar progressBar={progressBar} />
        </div>
        <h5>{songDuration}</h5>
      </Timeline>
      <PlayerMedia>
        <PlayerButtons>
          <div>
            <RepeatButton onClick={() => handleBucle()} bucle={bucle}>
              <i className="ci-repeat" />
            </RepeatButton>
          </div>
          <div>
            <PrevButton onClick={() => previousSong()}>
              <i className="ci-skip_previous" />
            </PrevButton>
            <PlayPauseButton
              type="button"
              onClick={() => {
                togglePlay();
              }}
            >
              {playerStatus === "pause" ? (
                <i className="ci-play_circle_filled" />
              ) : (
                <i className="ci-pause_circle_filled" />
              )}
            </PlayPauseButton>
            <NextButton
              onClick={() => {
                nextSong();
              }}
            >
              <i className="ci-skip_next" />
            </NextButton>
          </div>
          <HeartButton>
            <i className="ci-heart_fill" />
          </HeartButton>
        </PlayerButtons>
        <PlayerBottomButtons>
          <ShuffleButton onClick={() => handleShuffle()} shuffle={shuffle}>
            <i className="ci-shuffle" />
          </ShuffleButton>
          <button type="button" onClick={openQueue}>
            <i className="ci-list_check" />
          </button>
        </PlayerBottomButtons>
      </PlayerMedia>
      <Modal modalOn={modalOn} closeModal={closeModal} />
    </>
  );
};

export default withRouter(FullscreenPlayer);
