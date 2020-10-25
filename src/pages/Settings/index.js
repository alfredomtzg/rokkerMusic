import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import {
  TopBar,
  FormBox,
  MiniPlayerAndNavContainer,
} from "../Globals/GlobalStyle";
import { UserAvatarBox, SettingsButtonsBox } from "./style";

const Settings = () => {
  return (
    <PageContainer>
      <TopBar></TopBar>
      <MainContainer>
        <UserAvatarBox></UserAvatarBox>
        <FormBox></FormBox>
        <SettingsButtonsBox></SettingsButtonsBox>
      </MainContainer>
      <MiniPlayerAndNavContainer></MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default Settings;
