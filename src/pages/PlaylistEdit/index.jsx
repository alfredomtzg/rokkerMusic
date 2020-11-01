import React from "react";
import EditPlaylistForm from "../../components/FormEditPlaylist";
import Header from "../../components/Header";
import PlaylistContainer from "../../components/PlaylistContainer";
import { PlaylistItem } from "../../components/PlaylistItem";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import {
  PlaylistContentBox,
  TopBar,
  FormBox,
} from "../Globals/GlobalStyle";

const PlaylistEdit = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <FormBox>
          <EditPlaylistForm />
        </FormBox>
        <PlaylistContentBox>
          <PlaylistContainer>
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
            <PlaylistItem />
          </PlaylistContainer>
        </PlaylistContentBox>
      </MainContainer>
    </PageContainer>
  );
};

export default PlaylistEdit;
