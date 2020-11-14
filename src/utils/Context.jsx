/* eslint-disable no-console */
// import react
import React, { useState } from "react";
// Data
import Logo from "../assets/images/logo-rokker.png";
// import Axios
import { API, PlayList } from "../route/axios";
// create functional component for context provider and export it
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [queue, setQueue] = useState([]);
  const [queuePlaylist, setQueuePlaylist] = useState([]);
  const [track, setTrack] = useState(0);
  const [error, setError] = useState(false);

  const [songData, setSongData] = useState({
    songTitle: `Seleciona una canción`,
    songURL: `${queue[track]?.trackId.url}`,
    artistName: "",
    playlistName: ``,
    album_Image: Logo,
    playlistFrom: "Top 20",
  });
  const [playerStatus, setPlayerStatus] = useState("pause");
  const [autoplay, setAutoplay] = useState(false);
  const [albumList, setAlbumList] = useState([]);
  // playlis Content
  const [albumContent, setAlbumContent] = useState({});

  // USER
  const [user, setUser] = useState({});

  // playlist user
  const [playListUser, setPlayListUser] = useState([]);
  // bring the song list whit axios
  const bringPlayList = async () => {
    await API.get(PlayList, {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then((res) => {
        setPlayListUser(res.data.body);
        console.log(res.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [isAuth, setIsAuth] = useState(false);

  //Loading
  const [isLoading, setIsLoading] = useState(false);

  // return Value
  return (
    <Context.Provider
      value={{
        isAuth,
        setIsAuth,
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
        error,
        setError,
        user,
        setUser,
        playListUser,
        setPlayListUser,
        bringPlayList,
        isLoading,
        setIsLoading,
        queuePlaylist,
        setQueuePlaylist,
      }}
    >
      {children}
    </Context.Provider>
  );
};
