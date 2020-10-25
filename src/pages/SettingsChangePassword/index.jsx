import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import {
  TopBar,
  MiniPlayerAndNavContainer,
  FormBox,
  NextButtonBox,
} from "../Globals/GlobalStyle";
import { UserAvatarBox } from "../Settings/style";

const SettingsChangePassword = () => {
  return (
    <PageContainer>
      <TopBar />
      <MainContainer>
        <UserAvatarBox />
        <FormBox />
        <NextButtonBox />
      </MainContainer>
      <MiniPlayerAndNavContainer />
    </PageContainer>
  );
};

export default SettingsChangePassword;
