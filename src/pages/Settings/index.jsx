import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopBar } from "../Globals/GlobalStyle";
import { UserAvatarBox, SettingsButtonsBox } from "./style";
import Header from "../../components/Header";
import {
  ChangePassButton,
  SingOutButton,
  StatsButton,
} from "../../components/Buttons";
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
    </PageContainer>
  );
};

export default Settings;
