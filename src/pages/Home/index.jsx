/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import {
  MiniPlayerAndNavContainer,
  TopBar,
  PlaylistContentBox,
} from "../Globals/GlobalStyle";
import { GreetingBox, FavoritesBox, RecommendPlaylistsBox } from "./style";
import Header from "../../components/Header";
import { GenreCard, MidFilledCard, WideCard } from "../../components/Cards";
import MinimizedPlayer from "../../components/MinimizedPlayer";
import Footer from "../../components/Footer";
import PlaylistContainer from "../../components/PlaylistContainer";
import { PlaylistItem } from "../../components/PlaylistItem";

import { API, getAlbum } from "../../route/axios";

const Home = () => {
  const [albumList, setAlbumList] = useState([]);
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjliN2M5ZmExZjNmODAwMTcyOGE4MGYiLCJuYW1lIjoiQ2FybG9zIiwiZW1haWwiOiJpbmcuY2FnbkBnbWFpbC5jb20iLCJzY29wZXMiOlsic2lnbl9pbjphdXRoIiwic2lnbl91cDphdXRoIiwic2lnbl9wcm92aWRlcjphdXRoIiwicmVhZDphbGJ1bSIsInJlYWQ6YXJ0aXN0IiwicmVhZDpnZW5kZXIiLCJyZWFkOnRyYWNrIiwicmVhZDp1c2VyIiwidXBkYXRlOnVzZXIiXSwiaWF0IjoxNjA0MTc2NTcyLCJleHAiOjE2MDQxNzgzNzJ9.nlszhZU5bVMaL0pD1VCUO21xfkvqpG_KKRaRGFQZ-04";

  const bringAlbums = async () => {
    await API.get(getAlbum, { headers: { token: TOKEN } })
      .then((res) => {
        console.log(res);
        console.log(res.data.body);
        setAlbumList(res.data.body);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (albumList.length <= 0) {
      bringAlbums();
    }
  }, []);

  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <GreetingBox />
        <FavoritesBox>
          <WideCard />
        </FavoritesBox>

        <h5>Recommended playlists</h5>
        <RecommendPlaylistsBox>
          <GenreCard />
          <GenreCard />
          <GenreCard />
          <GenreCard />
          <GenreCard />
          <GenreCard />
          <GenreCard />
        </RecommendPlaylistsBox>
        <h5>Albums</h5>
        <RecommendPlaylistsBox>
          {albumList.map((item) => {
            return (
              <MidFilledCard
                key={item._id}
                img={item.cover_img}
                title={item.title}
              />
            );
          })}
        </RecommendPlaylistsBox>
        <PlaylistContentBox>
          <PlaylistContainer>
            <PlaylistItem />
            <PlaylistItem />
          </PlaylistContainer>
        </PlaylistContentBox>
      </MainContainer>
      <MiniPlayerAndNavContainer>
        <MinimizedPlayer />
        <Footer />
      </MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default Home;
