import React, { useContext, useEffect } from "react";

import { API } from "../../route/axios";
import { Context } from "../../utils/Context";
import { PlaylistHeartDotsSong } from "../PlaylistItem";

const PlaylistLogic = () => {
  console.log("PlatlistLogic is active");
  const { user, queue, setQueue } = useContext(Context);

  const bringTracks = async () => {
    try {
      const response = await API.get(`/track`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      console.log(response.data.body.tracks);
      setQueue([...response.data.body.tracks]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    bringTracks();
  }, []);

  return (
    <>
      {queue.map((item, index) => {
        return (
          <PlaylistHeartDotsSong
            key={item._id}
            title={item.title}
            index={index}
            URL={item.url}
            genre={item.genres[0]}
            artist="Daft Punk"
          />
        );
      })}
    </>
  );
};

export default PlaylistLogic;
