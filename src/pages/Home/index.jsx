/* eslint-disable no-console */
import React, { useEffect, useContext } from "react";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import { TopBar, PlaylistContentBox } from "../Globals/GlobalStyle";
import { FavoritesBox, RecommendPlaylistsBox, SongCard } from "./style";
import Header from "../../components/Header";
import {
  GenreCard,
  MidFilledCard,
  WideCard,
  GreetingsCard,
} from "../../components/Cards";
import PlaylistContainer from "../../components/PlaylistContainer";
import { PlaylistHeartDotsSong } from "../../components/PlaylistItem";

import { API, getAlbum } from "../../route/axios";
import { Context } from "../../utils/Context";

const Home = () => {
  const {
    songData,
    queue,
    setSongData,
    setPlayerStatus,
    setAutoplay,
    setTrack,
    albumList,
    setAlbumList,
    setAlbumContent,
    user,
  } = useContext(Context);

  const bringAlbums = async () => {
    if (albumList.length <= 0) {
      await API.get(getAlbum, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
        .then((res) => {
          console.log(res);
          console.log(res.data.body.albums);
          setAlbumList(res.data.body.albums);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    bringAlbums();
  }, []);

  console.log(albumList.length);

  const list = queue.map((item, index) => {
    return (
      <SongCard
        key={item.id}
        type="SongCard"
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
        <PlaylistHeartDotsSong title={item.title} artist="Daft Punk" />
      </SongCard>
    );
  });

  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <GreetingsCard />
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
              <div
                key={item._id}
                role="presentation"
                onClick={() => {
                  setAlbumContent(item);
                  console.log(item);
                }}
              >
                <MidFilledCard item={item} />
              </div>
            );
          })}
        </RecommendPlaylistsBox>
        <PlaylistContentBox>
          <PlaylistContainer>{list}</PlaylistContainer>
        </PlaylistContentBox>
      </MainContainer>
    </PageContainer>
  );
};

export default Home;
