import React from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { LandingLogoBox } from "../Globals/GlobalStyle";
import { MainLanding, LandingLoginButtons, LandingSignUpButton } from "./style";

const Landing = () => {
  return (
    <PageContainer dark>
      <MainContainer>
        <MainLanding>
          <LandingLogoBox />
          <LandingLoginButtons />
          <LandingSignUpButton />
        </MainLanding>
      </MainContainer>
    </PageContainer>
  );
};

export default Landing;
