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
    songData,
    queue,
    setQueue,
    setSongData,
    setPlayerStatus,
    setAutoplay,
    setTrack,
    albumList,
    setAlbumList,
    setAlbumContent,
    user,
    bringPlayList,
    playListUser,
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
          bringPlayList();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const bringTracks = async () => {
    try {
      const response = await API.get(`/track`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      console.log(response);
      setQueue(response.data.body.tracks);
    } catch (error) {}
  };

  useEffect(() => {
    bringTracks();
    bringAlbums();
  }, []);

  console.log(albumList.length);

  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <GreetingsCard user={user} />
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
          <PlaylistContainer>
            {queue.map((item, index) => {
              return (
                <div key={item._id}>
                  <PlaylistHeartDotsSong title={item.title} artist="artista" />
                  <button
                    type="button"
                    onClick={() => {
                      setAutoplay(true);
                      setPlayerStatus("play");
                      setSongData({
                        ...songData,
                        songTitle: `${item.title}`,
                        songURL: `${item.url}`,
                      });
                      console.log(item._id);
                      setTrack(index);
                    }}
                  >
                    play
                  </button>
                </div>
              );
            })}
          </PlaylistContainer>
        </PlaylistContentBox>
      </MainContainer>
    </PageContainer>
  );
};

export default Home;
