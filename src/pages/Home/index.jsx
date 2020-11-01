/* eslint-disable no-console */
import React, { useEffect, useState, useContext } from "react";
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
import { Context } from "../../utils/Context";

const Home = () => {
  const {
    songData,
    queue,
    setSongData,
    setPlayerStatus,
    setAutoplay,
    setTrack,
  } = useContext(Context);
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

  const list = queue.map((item, index) => {
    return (
      <div key={item.id}>
        <PlaylistItem title={item.title} />
        <ul>
          <button
            type="button"
            onClick={() => {
              setAutoplay(true);
              setPlayerStatus("play");
              setSongData({
                ...songData,
                songTitle: `${item.title}`,
                songURL: `${item.preview}`,
              });
              setTrack(index);
            }}
          >
            play
          </button>
        </ul>
      </div>
    );
  });

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
            {list}

            <PlaylistItem />
          </PlaylistContainer>
        </PlaylistContentBox>
      </MainContainer>
    </PageContainer>
  );
};

export default Home;
