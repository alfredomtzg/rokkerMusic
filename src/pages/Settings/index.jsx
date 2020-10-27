import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopBar, MiniPlayerAndNavContainer } from "../Globals/GlobalStyle";
import { UserAvatarBox, SettingsButtonsBox } from "./style";
import Header from "../../components/header";
import { ChangePassButton, SingOutButton } from "../../components/Buttons";
import MinimizedPlayer from "../../components/minimizedPlayer";
import Footer from "../../components/Footer";

const Settings = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <UserAvatarBox />
        <SettingsButtonsBox>
          <ChangePassButton />
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
