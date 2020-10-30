import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { FormBox, LandingLogoBox } from "../Globals/GlobalStyle";
import RokkerBlack from "../../assets/Logo/Rkr-black.svg";
import LoginForm from "../../components/FormLogin";
import MainLogin from "./style";

const Login = () => {
  return (
    <PageContainer dark>
      <MainContainer>
        <MainLogin>
          <LandingLogoBox>
            <img src={RokkerBlack} alt="rokker logo" />
          </LandingLogoBox>
          <FormBox>
            <LoginForm />
          </FormBox>
        </MainLogin>
      </MainContainer>
    </PageContainer>
  );
};

export default Login;
