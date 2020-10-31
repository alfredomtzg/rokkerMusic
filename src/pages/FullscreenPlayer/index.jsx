/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-console */
import React, { useContext, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { PlayerContainer } from "../../containers/LayoutContainers";
import FullscreenPlayer from "../../components/FullscreenPlayer";
import { Context } from "../../utils/Context";

const FullscreenPlayerPage = (props) => {
  const {
    songData,
    queue,
    setQueue,
    setSongData,
    playerStatus,
    setPlayerStatus,
  } = useContext(Context);

  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.src = songData.songURL;
    console.log(`audioref.corrunt :${audioRef.current}`);
    console.log(`audioRef.current.paused: ${audioRef.current.paused}`);
    console.log(`playerStatus: ${playerStatus}`);
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
      playlistName: "Favorites",
      playlistFrom: "Top 20",
    });
  };

  const previousSong = () => {
    if (!audioRef.current.paused) {
      togglePlay();
    }
    setSongData({
      songTitle: "Harder, Better, Faster, Stronger",
      songURL:
        "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3",
      artistName: "Daft Punk",
      playlistName: "Favorites",
      playlistFrom: "Top 20",
    });
  };

  return ReactDOM.createPortal(
    <PlayerContainer playerDisplay={props.playerDisplay}>
      {/* {queue.map((item) => {
        return (
          <div key={item.id}>
            <ul>
              {item.title}

              <button
                type="button"
                onClick={() => {
                  console.log("hola");
                }}
              >
                play
              </button>
            </ul>
          </div>
        );
      })} */}
      <audio ref={audioRef} />
      <FullscreenPlayer
        minimizePlayer = {props.minimizePlayer}
        songData={songData}
        playerStatus={playerStatus}
        togglePlay={togglePlay}
        nextSong={nextSong}
        previousSong={previousSong}
      />
    </PlayerContainer>,
    document.getElementById("player")
  );
};

export default FullscreenPlayerPage;
