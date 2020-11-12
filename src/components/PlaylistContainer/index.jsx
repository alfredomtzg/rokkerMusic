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
      const response = await API.get(`${tracks}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      setQueue([...response.data.body.tracks]);
    } catch (error) {
      console.log(error);
    }
  };

  // Play song
  const startPlay = (title, url, index) => {
    setAutoplay(true);
    setPlayerStatus("play");
    setSongData({
      ...songData,
      songTitle: `${title}`,
      songURL: `${url}`,
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
            key={item._id}
            title={item.title}
            index={index}
            url={item.url}
            genre={item.genres[0]}
            artist="Daft Punk"
            startPlay={startPlay}
          />
        );
      })}
    </StyledPlaylistContainer>
  );
};

export default PlaylistContainer;
