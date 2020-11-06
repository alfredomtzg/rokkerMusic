import React from "react";
import { HomeButton } from "../../components/Buttons";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { LoginOrSendButtonBox, TopTextBox } from "../Globals/GlobalStyle";

const LoginRecoverPasswordSent = () => {
  return (
    <PageContainer dark>
      <MainContainer>
        <TopTextBox>
          <h2>Nice!</h2>
          <h5>
            If your e-mail is correct <br />
            in your inbox you must receive <br />a new password
          </h5>
        </TopTextBox>
        <LoginOrSendButtonBox>
          <HomeButton />
        </LoginOrSendButtonBox>
      </MainContainer>
    </PageContainer>
  );
};

export default LoginRecoverPasswordSent;
