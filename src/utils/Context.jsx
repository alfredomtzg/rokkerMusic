// import react
import React, { useState } from "react";
// create functional component for context provider and export it
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [songData, setSongData] = useState({
    songTitle: "Harder, Better, Faster, Stronger",
    songURL:
      "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3",
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
      }}
    >
      {children}
    </Context.Provider>
  );
};
