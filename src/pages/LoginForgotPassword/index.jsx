import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import {
  FormBox,
  LoginOrSendButtonBox,
  TopBar,
  TopTextBox,
} from "../Globals/GlobalStyle";

const LoginForgotPassword = () => {
  return (
    <PageContainer dark>
      <TopBar />
      <MainContainer>
        <TopTextBox>
          <h2>Forgot your password?</h2>
          <h5>
            Do not worry! give us your email <br />
            and we will be sending you <br />a new one
          </h5>
        </TopTextBox>
        <FormBox />
        <LoginOrSendButtonBox />
      </MainContainer>
    </PageContainer>
  );
};

export default LoginForgotPassword;
