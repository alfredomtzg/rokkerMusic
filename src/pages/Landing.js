import React from 'react'
import styled from 'styled-components'

import MainContainer from '../containers/MainContainer'
import MobileGrid from '../containers/MobileGrid'

const MainLanding = styled.main`
  display: grid;
  height: 100vh;
  margin: 0;
  grid-template-rows: 35vh 35vh 30vh;
`

const LandingLogo = styled.figure`
  display: flex;
  justify-self: center;
  align-self: flex-end;
  margin: 0;
`

const LandingLoginButtons = styled(MobileGrid)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 7vh 0;
`

const LandingSignUpButton = styled.div`
  display: flex;
  justify-self: center; 
`

class Landing extends React.Component {
  render() {
    return (
      <MainContainer dark>
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
}

export default Landing

