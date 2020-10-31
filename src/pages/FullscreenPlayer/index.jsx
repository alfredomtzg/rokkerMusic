/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-console */
import React, { useContext, useEffect, useRef } from "react";
import { PageContainer } from "../../containers/LayoutContainers";
import FullscreenPlayer from "../../components/FullscreenPlayer";
import { Context } from "../../utils/Context";

const FullscreenPlayerPage = () => {
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
    if (!audioRef.current.paused) {
      togglePlay();
    }
    if (track < queue.length - 1) {
      setSongData({
        ...songData,
        songTitle: `${queue[track + 1].title}`,
        songURL: `${queue[track + 1].preview}`,
      });
      setAutoplay(true);
      setTrack(track + 1);
      setPlayerStatus("play");
    } else {
      setSongData({
        ...songData,
        songTitle: `${queue[0].title}`,
        songURL: `${queue[0].preview}`,
      });
      setTrack(0);
    }
  };

  const previousSong = () => {
    if (!audioRef.current.paused) {
      togglePlay();
    }
    if (track > 0) {
      setSongData({
        ...songData,
        songTitle: `${queue[track - 1].title}`,
        songURL: `${queue[track - 1].preview}`,
      });
      setAutoplay(true);
      setTrack(track - 1);
      setPlayerStatus("play");
    }
  };
  const list = queue.map((item, index) => {
    return (
      <div key={item.id}>
        <ul>
          {item.title}
          <button
            type="button"
            onClick={() => {
              setAutoplay(true);
              setPlayerStatus("play");
              setSongData({
                ...songData,
                songTitle: `${item.title}`,
                songURL: `${item.preview}`,
              });
              setTrack(index);
            }}
          >
            play
          </button>
        </ul>
      </div>
    );
  });

  return (
    <PageContainer>
      <audio ref={audioRef} autoPlay={autoplay} />
      <FullscreenPlayer
        songData={songData}
        playerStatus={playerStatus}
        togglePlay={togglePlay}
        nextSong={nextSong}
        previousSong={previousSong}
      />
      {list}
    </PageContainer>
  );
};

export default FullscreenPlayerPage;
