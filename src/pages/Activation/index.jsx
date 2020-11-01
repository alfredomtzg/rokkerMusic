import React from "react";
import { Link } from "react-router-dom";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import {
  TopBar,
  TopTextBox,
  LoginOrSendButtonBox,
} from "../Globals/GlobalStyle";
import Header from "../../components/Header";
import { LoginButton } from "../../components/Buttons";

const Activation = () => {
  return (
    <PageContainer dark>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <TopTextBox>
          <h2>Welcome aboard!</h2>
          <h5>Your account is now active</h5>
        </TopTextBox>
        <LoginOrSendButtonBox>
          <Link to="/login">
            <LoginButton />
          </Link>
        </LoginOrSendButtonBox>
      </MainContainer>
    </PageContainer>
  );
};

export default Activation;
