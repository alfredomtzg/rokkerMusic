import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import {
  LoginOrSendButtonBox,
  TopBar,
  TopTextBox,
} from "../Globals/GlobalStyle";

const LoginRecoverPasswordSent = () => {
  return (
    <PageContainer dark>
      <TopBar />
      <MainContainer>
        <TopTextBox>
          <h2>Nice!</h2>
          <h5>
            If your e-mail is correct <br />
            in your inbox you must receive <br />a new password
          </h5>
        </TopTextBox>
        <LoginOrSendButtonBox />
      </MainContainer>
    </PageContainer>
  );
};

export default LoginRecoverPasswordSent;
