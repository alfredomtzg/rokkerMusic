import React from "react";
import Header from "../../components/Header";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import {
  TopBar,
  FormBox,
  NextButtonBox,
} from "../Globals/GlobalStyle";
import UserAvatarBox from "./style";
import Avatar from "../../assets/images/avatars/Alexander.svg";
import NewPassForm from "../../components/FormChangePassword";

const SettingsChangePassword = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <UserAvatarBox>
          <img src={Avatar} alt="avatar" />
        </UserAvatarBox>
        <FormBox>
          <NewPassForm />
        </FormBox>
        <NextButtonBox />
      </MainContainer>
    </PageContainer>
  );
};

export default SettingsChangePassword;
