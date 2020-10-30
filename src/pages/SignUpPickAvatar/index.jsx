import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopBar, TopTextBox, NextButtonBox } from "../Globals/GlobalStyle";
import { AvatarsGrid } from "./style";
import Avatar from "../../assets/images/avatars/Alexander.svg";
import Header from "../../components/Header";
import { NextButton } from "../../components/Buttons";

const SingUpPickAvatar = () => {
  return (
    <PageContainer dark>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <TopTextBox>
          <h2>Mike</h2>
          <h5>Pick your avatar</h5>
        </TopTextBox>
        <AvatarsGrid>
          <img src={Avatar} alt="avatar" />
          <img src={Avatar} alt="avatar" />
          <img src={Avatar} alt="avatar" />
          <img src={Avatar} alt="avatar" />
          <img src={Avatar} alt="avatar" />
          <img src={Avatar} alt="avatar" />
          <img src={Avatar} alt="avatar" />
          <img src={Avatar} alt="avatar" />
          <img src={Avatar} alt="avatar" />
        </AvatarsGrid>
        <NextButtonBox>
          <NextButton />
        </NextButtonBox>
      </MainContainer>
    </PageContainer>
  );
};

export default SingUpPickAvatar;
