import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import {
  FormBox,
  LandingLogoBox,
  LoginOrSendButtonBox,
} from "../Globals/GlobalStyle";

const Login = () => {
  return (
    <PageContainer dark>
      <MainContainer>
        <LandingLogoBox></LandingLogoBox>
        <FormBox></FormBox>
        <LoginOrSendButtonBox></LoginOrSendButtonBox>
      </MainContainer>
    </PageContainer>
  );
};

export default Login;
