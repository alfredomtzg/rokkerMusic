/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useEffect, useContext } from "react";
// style
import { TopBar, PlaylistContentBox } from "../Globals/GlobalStyle";
import { FavoritesBox, RecommendPlaylistsBox } from "./style";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
// Components
import Header from "../../components/Header";
import {
  GenreCard,
  MidFilledCard,
  WideCard,
  GreetingsCard,
} from "../../components/Cards";
import PlaylistContainer from "../../components/PlaylistContainer";

// Global state
import { API, getAlbum } from "../../route/axios";
import { Context } from "../../utils/Context";

const Home = () => {
  const {
    bringPlayList,
    albumList,
    setAlbumList,
    setAlbumContent,
    user,
    setQueue,
    queue,
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
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (playListUser.length <= 0) {
      bringPlayList();
    }
  };

  // bring top20
  const bringTracks = async () => {
    try {
      const response = await API.get(`playlist/general/top20`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      console.log(`------------------------ `);
      console.log(response.data.body[0].tracks);
      setQueue(
        [...response.data.body[0].tracks].filter(
          (item) => item.trackId.url !== null
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (queue.length === 0) {
      bringTracks();
    }
  }, []);

  useEffect(() => {
    bringAlbums();
  }, []);

  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <GreetingsCard user={user.name} urlImage={user.avatarPath} />
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
          {/* Playlist Top */}
          <PlaylistContainer />
        </PlaylistContentBox>
      </MainContainer>
    </PageContainer>
  );
};

export default Home;
