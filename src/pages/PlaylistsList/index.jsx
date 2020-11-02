/* eslint-disable no-console */
import React, { useState, useEffect, useContext } from "react";
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
import { API, PlayList } from "../../route/axios";
import { Context } from "../../utils/Context";

const PlaylistList = () => {
  const { playListUser } = useContext(Context);

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
