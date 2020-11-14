/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";

import StyledPlaylistContainer from "./styles";

import { API, tracks } from "../../route/axios";
import { Context } from "../../utils/Context";
import { PlaylistHeartDotsSong } from "../PlaylistItem";

const PlaylistContainer = () => {
  // Context
  const {
    user,
    setQueue,
    queue,
    songData,
    setSongData,
    setPlayerStatus,
    setAutoplay,
    setTrack,
  } = useContext(Context);

  // Play song
  const startPlay = (title, url, index, artist_Name, album_Image) => {
    setAutoplay(true);
    setPlayerStatus("play");
    setSongData({
      ...songData,
      songTitle: `${title}`,
      songURL: `${url}`,
      artistName: `${artist_Name}`,
      album_Image: `${album_Image}`,
    });
    setTrack(index);
  };

  return (
    <StyledPlaylistContainer>
      <h4>Top 20</h4>
      {queue.map((item, index, arr) => {
        console.log(arr);
        return (
          <PlaylistHeartDotsSong
            key={item.trackId._id}
            title={item.trackId.title}
            index={index}
            url={item.trackId.url}
            artist_Name={item.trackId.artist_Name}
            album_Image={item.trackId.album_Image}
            startPlay={startPlay}
          />
        );
      })}
    </StyledPlaylistContainer>
  );
};

export default PlaylistContainer;
