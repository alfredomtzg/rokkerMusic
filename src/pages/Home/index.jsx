/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useEffect, useContext } from "react";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import { TopBar, PlaylistContentBox } from "../Globals/GlobalStyle";
import { FavoritesBox, RecommendPlaylistsBox } from "./style";
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
    queue,
    bringPlayList,
    albumList,
    setAlbumList,
    setAlbumContent,
    user,
    playListUser,
    setQueue,
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
    if (playListUser.length <= 0) {
      bringPlayList();
    }
  };
  const bringTracks = async () => {
    try {
      const response = await API.get(`/track`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      console.log(response.data.body.tracks);
      setQueue(response.data.body.tracks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    bringTracks();
    bringAlbums();
  }, []);

  const list = queue.map((item, index) => {
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
  });

  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <GreetingsCard user={user.name} />
        <FavoritesBox>
          <WideCard />
        </FavoritesBox>
        <h5>Recommended playlists</h5>
        <RecommendPlaylistsBox>
          {playListUser.map((item) => {
            return <GenreCard key={item._id} title={item.name} />;
          })}
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
