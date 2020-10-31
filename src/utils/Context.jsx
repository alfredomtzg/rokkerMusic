/* eslint-disable no-console */
// import react
import React, { useState } from "react";
// Data
import album from "./data";
// create functional component for context provider and export it
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [queue, setQueue] = useState(album.tracks.data);
  console.log(queue);
  const [songData, setSongData] = useState({
    songTitle: `${queue[3].title}`,
    songURL: `${queue[3].preview}`,
    artistName: "Daft Punk",
    playlistName: "Favorites",
    playlistFrom: "Top 20",
  });
  const [playerStatus, setPlayerStatus] = useState("pause");
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
      }}
    >
      {children}
    </Context.Provider>
  );
};
