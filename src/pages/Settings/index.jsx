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
      <TopBar />
      <MainContainer>
        <UserAvatarBox />
        <FormBox />
        <SettingsButtonsBox />
      </MainContainer>
      <MiniPlayerAndNavContainer />
    </PageContainer>
  );
};

export default Settings;
