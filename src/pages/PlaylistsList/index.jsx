import React, { useState } from "react";
import {
  FavoritesCard,
  PlaylistCard,
  NewPlaylistCard,
} from "../../components/Cards";
import MinimizedPlayer from "../../components/MinimizedPlayer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import { MiniPlayerAndNavContainer, TopBar } from "../Globals/GlobalStyle";
import { YourPlaylistsBox, NewAndFavoritesBox, PlaylistsBox } from "./style";
import { API, PlayList } from "../../route/axios";

const PlaylistList = () => {
  const [playListUser, usePlayListUser] = useState([]);

  // bring the song list whit axios
  const bringPlayList = async () => {
    await API.get(PlayList, valuesCreatePlaylist, {
      headers: { token: TOKEN },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        usePlayListUser(res.data.body);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
          <NewPlaylistCard />
          <FavoritesCard />
        </NewAndFavoritesBox>
        <PlaylistsBox>
          {playListUser.map((item, index) => {
            return <PlaylistCard PlayListTitle={"Titulo playlist"} />;
          })}

          <PlaylistCard />
          <PlaylistCard />
        </PlaylistsBox>
      </MainContainer>
      <MiniPlayerAndNavContainer>
        <MinimizedPlayer />
        <Footer />
      </MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default PlaylistList;
