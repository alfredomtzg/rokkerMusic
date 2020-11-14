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
    queue,
    setQueue,
    songData,
    setSongData,
    setPlayerStatus,
    setAutoplay,
    setTrack,
  } = useContext(Context);

  // bring top20
  const bringTracks = async () => {
    try {
      const response = await API.get(`playlist/general/top20`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      console.log(`------------------------ `);
      console.log(response.data.body[0].tracks);
      setQueue(
        [...response.data.body[0].tracks].filter(
          (item) => item.trackId.url !== null
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    if (queue.length === 0) {
      bringTracks();
    }
  }, []);

  return (
    <StyledPlaylistContainer>
      <h4>Top 20</h4>
      {queue.map((item, index) => {
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
