import React from 'react'
import MainContainer from '../../containers/MainContainer'
import { GlobalStyle } from '../../components/styles/globals'
import {MainLanding, LandingLogo, LandingLoginButtons, LandingSignUpButton} from './style'

const Landing = () => {
  return (
    <MainContainer dark>
      <GlobalStyle/>
      <MainLanding>
        <LandingLogo>
          
        </LandingLogo>
        <LandingLoginButtons>
          
        </LandingLoginButtons>
        <LandingSignUpButton>
          
        </LandingSignUpButton>
      </MainLanding>
    </MainContainer>
  )
}

export default Landing;