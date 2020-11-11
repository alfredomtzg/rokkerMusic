/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-console */
import React, { useContext, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { PlayerContainer } from "../../containers/LayoutContainers";
import FullscreenPlayer from "../../components/FullscreenPlayer";
import { Context } from "../../utils/Context";

const FullscreenPlayerPage = (props) => {
  const audioRef = useRef();
  const {
    songData,
    queue,
    setSongData,
    playerStatus,
    setPlayerStatus,
    autoplay,
    setAutoplay,
    track,
    setTrack,
  } = useContext(Context);

  useEffect(() => {
    audioRef.current.src = songData.songURL;
  }, [songData.songURL]);

  const getTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const convertTime = `0${minutes}:${seconds <= 9 ? 0 : ""}${seconds}`;
    return convertTime;
  };

  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    const time = setInterval(() => {
      setCurrentTime(getTime(audioRef.current.currentTime));
    }, 500);
    return () => clearInterval(time);
  }, []);

  const [songDuration, setSongDuration] = useState(0);
  useEffect(() => {
    if (audioRef.current.duration)
      setSongDuration(getTime(audioRef.current.duration));
  });

  const [progressBar, setProgressBar] = useState(0);
  useEffect(() => {
    if (audioRef.current.duration) {
      setProgressBar(
        (audioRef.current.currentTime / audioRef.current.duration) * 50
      );
    }
  });

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlayerStatus("play");
      setAutoplay(true);
    } else {
      audioRef.current.pause();
      setPlayerStatus("pause");
      setAutoplay(false);
    }
  };

  const nextSong = () => {
    // if (!audioRef.current.paused) {
    togglePlay();

    // }
    if (track < queue.length - 1) {
      setSongData({
        ...songData,
        songTitle: `${queue[track + 1].title}`,
        songURL: `${queue[track + 1].url}`,
      });
      setAutoplay(true);
      setTrack(track + 1);
      setPlayerStatus("play");
    } else {
      setSongData({
        ...songData,
        songTitle: `${queue[0]?.title}`,
        songURL: `${queue[0]?.url}`,
      });
      setTrack(0);
    }
  };

  useEffect(() => {
    if (props.miniplayNext !== "blocked") {
      nextSong();
    }
  }, [props.miniplayNext]);

  useEffect(() => {
    if (props.miniplay !== "blocked") {
      togglePlay();
    }
  }, [props.miniplay]);

  const previousSong = () => {
    if (progressBar >= 2) {
      audioRef.current.currentTime = 0;
      return setCurrentTime("00:00");
    }
    if (!audioRef.current.paused) {
      togglePlay();
    }
    if (track > 0) {
      setSongData({
        ...songData,
        songTitle: `${queue[track - 1].title}`,
        songURL: `${queue[track - 1].url}`,
      });
      console.log(songData);
      setAutoplay(true);
      setTrack(track - 1);
      setPlayerStatus("play");
    }
  };

  return ReactDOM.createPortal(
    <PlayerContainer playerDisplay={props.playerDisplay}>
      <audio ref={audioRef} autoPlay={autoplay} />
      <FullscreenPlayer
        minimizePlayer={props.minimizePlayer}
        songData={songData}
        playerStatus={playerStatus}
        togglePlay={togglePlay}
        nextSong={nextSong}
        previousSong={previousSong}
        currentTime={currentTime}
        songDuration={songDuration}
        progressBar={progressBar}
      />
    </PlayerContainer>,
    document.getElementById("player")
  );
};

export default FullscreenPlayerPage;
