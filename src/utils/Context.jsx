/* eslint-disable no-console */
// import react
import React, { useState } from "react";
// Data
import album from "./data";
// create functional component for context provider and export it
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [queue, setQueue] = useState(album.tracks.data);
  const [track, setTrack] = useState(0);

  const [songData, setSongData] = useState({
    songTitle: `${queue[track].title}`,
    songURL: `${queue[track].preview}`,
    artistName: "Daft Punk",
    playlistName: "Favorites",
    playlistFrom: "Top 20",
  });
  const [playerStatus, setPlayerStatus] = useState("pause");
  const [autoplay, setAutoplay] = useState(false);
  const [albumList, setAlbumList] = useState([]);
  // playlis Content
  const [albumContent, setAlbumContent] = useState({});
  // return Value
  return (
    <Context.Provider
      value={{
        songData,
        setSongData,
        playerStatus,
        setPlayerStatus,
        queue,
        setQueue,
        autoplay,
        setAutoplay,
        track,
        setTrack,
        albumList,
        setAlbumList,
        albumContent,
        setAlbumContent,
      }}
    >
      {children}
    </Context.Provider>
  );
};
