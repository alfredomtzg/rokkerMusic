import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopBar, MiniPlayerAndNavContainer } from "../Globals/GlobalStyle";
import { UserAvatarBox, SettingsButtonsBox } from "./style";
import Header from "../../components/Header";
import {
  ChangePassButton,
  SingOutButton,
  StatsButton,
} from "../../components/Buttons";
import MinimizedPlayer from "../../components/MinimizedPlayer";
import Footer from "../../components/Footer";
import UserCard from "../../components/UserCard";

const Settings = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <UserAvatarBox>
          <UserCard />
        </UserAvatarBox>
        <SettingsButtonsBox>
          <ChangePassButton />
          <StatsButton />
          <SingOutButton />
        </SettingsButtonsBox>
      </MainContainer>
      <MiniPlayerAndNavContainer>
        <MinimizedPlayer />
        <Footer />
      </MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default Settings;
