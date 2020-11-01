import React from "react";
import { Link } from "react-router-dom";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { LandingLogoBox } from "../Globals/GlobalStyle";
import { MainLanding, LandingLoginButtons, LandingSignUpButton } from "./style";
import RokkerBlack from "../../assets/Logo/Rkr-black.svg";
import {
  FacebookButton,
  GoogleButton,
  LoginButton,
  SignupButton,
} from "../../components/Buttons";

const Landing = () => {
  return (
    <PageContainer dark>
      <MainContainer>
        <MainLanding>
          <LandingLogoBox>
            <img src={RokkerBlack} alt="rokker logo" />
          </LandingLogoBox>
          <LandingLoginButtons>
            <FacebookButton />
            <GoogleButton />
            <Link to="/login">
              <LoginButton />
            </Link>
          </LandingLoginButtons>
          <LandingSignUpButton>
            <Link to="/signup">
              <SignupButton />
            </Link>
          </LandingSignUpButton>
        </MainLanding>
      </MainContainer>
    </PageContainer>
  );
};

export default Landing;
