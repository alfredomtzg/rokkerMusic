/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import { TopBar, PlaylistContentBox } from "../Globals/GlobalStyle";
import { GreetingBox, FavoritesBox, RecommendPlaylistsBox } from "./style";
import Header from "../../components/Header";
import { GenreCard, MidFilledCard, WideCard } from "../../components/Cards";
import PlaylistContainer from "../../components/PlaylistContainer";
import { PlaylistItem } from "../../components/PlaylistItem";

import { API, getAlbum, TOKEN } from "../../route/axios";

const Home = () => {
  const [albumList, setAlbumList] = useState([]);

  const bringAlbums = async () => {
    await API.get(getAlbum, { headers: { Authorization: `Bearer ${TOKEN}` } })
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
    </PageContainer>
  );
};

export default Home;
