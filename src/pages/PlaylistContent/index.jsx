import React from "react";
import { EditButton, PlayButton } from "../../components/Buttons";
import Header from "../../components/Header";
import PlaylistContainer from "../../components/PlaylistContainer";
import { PlaylistHeartDotsSong } from "../../components/PlaylistItem";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import { PlaylistContentBox, TopBar } from "../Globals/GlobalStyle";
import {
  EditPlaylistButtonBox,
  PlaylistCardAndTitleBox,
  PlayButtonBox,
} from "./style";
import { PlaylistBigCard } from "../../components/Cards";

const PlaylistContent = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <EditPlaylistButtonBox>
          <EditButton />
        </EditPlaylistButtonBox>
        <PlaylistCardAndTitleBox>
          <PlaylistBigCard />
        </PlaylistCardAndTitleBox>
        <PlayButtonBox>
          <PlayButton />
        </PlayButtonBox>
        <PlaylistContentBox>
          <PlaylistContainer>
            <PlaylistHeartDotsSong />
            <PlaylistHeartDotsSong />
            <PlaylistHeartDotsSong />
            <PlaylistHeartDotsSong />
            <PlaylistHeartDotsSong />
          </PlaylistContainer>
        </PlaylistContentBox>
      </MainContainer>
    </PageContainer>
  );
};

export default PlaylistContent;
