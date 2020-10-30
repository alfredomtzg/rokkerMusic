/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from "react";
import { PageContainer } from "../../containers/LayoutContainers";
import FullscreenPlayer from "../../components/FullscreenPlayer";

const FullscreenPlayerPage = () => {
  const [songData, setSongData] = useState({
    songTitle: "Harder, Better, Faster, Stronger",
    songURL:
      "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3",
    artistName: "Daft Punk",
    playlistName: "Favorites",
    playlistFrom: "Top 20",
  });

  const [playerStatus, setPlayerStatus] = useState("pause");
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.src = songData.songURL;
    console.log(audioRef.current);
    console.log(audioRef.current.paused);
    console.log(playerStatus);
  }, [songData.songURL]);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      console.log("pause -> play");
      audioRef.current.play();
      setPlayerStatus("play");
    } else {
      console.log("play -> pause");
      audioRef.current.pause();
      setPlayerStatus("pause");
    }
  };

  const nextSong = () => {
    if (!audioRef.current.paused) {
      togglePlay();
    }
    setSongData({
      songTitle: "One More Time",
      artistName: "Daft Punk",
      songURL:
        "https://cdns-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-9.mp3",
    });
  };

  return (
    <PageContainer>
      <audio ref={audioRef} />
      <FullscreenPlayer
        songData={songData}
        playerStatus={playerStatus}
        togglePlay={togglePlay}
        nextSong={nextSong}
      />
    </PageContainer>
  );
};

export default FullscreenPlayerPage;
