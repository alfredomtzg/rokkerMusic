/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FavoritesCard,
  PlaylistCard,
  NewPlaylistCard,
} from "../../components/Cards";
import Header from "../../components/Header";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import { TopBar } from "../Globals/GlobalStyle";
import { YourPlaylistsBox, NewAndFavoritesBox, PlaylistsBox } from "./style";
import { API, PlayList, TOKEN } from "../../route/axios";

const PlaylistList = () => {
  const [playListUser, setPlayListUser] = useState([]);

  // bring the song list whit axios
  const bringPlayList = async () => {
    await API.get(PlayList, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((res) => {
        setPlayListUser(res.data.body);
        console.log(res.data.body);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    bringPlayList();
  }, []);

  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <YourPlaylistsBox>
          <h1>Your playlists</h1>
        </YourPlaylistsBox>
        <NewAndFavoritesBox>
          <Link to="/playlist/create">
            <NewPlaylistCard />
          </Link>
          <FavoritesCard />
        </NewAndFavoritesBox>
        <PlaylistsBox>
          {playListUser.map((item) => {
            return <PlaylistCard key={item._id} PlayListTitle={item.name} />;
          })}
        </PlaylistsBox>
      </MainContainer>
    </PageContainer>
  );
};

export default PlaylistList;
