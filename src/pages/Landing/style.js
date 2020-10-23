import styled from 'styled-components'

export const MainLanding = styled.main`
  display: grid;
  height: 100vh;
  margin: 0;
  grid-template-rows: 35vh 35vh 30vh;
`

export const LandingLogo = styled.figure`
  display: flex;
  justify-self: center;
  align-self: flex-end;
  margin: 0;
`

export const LandingLoginButtons = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 7vh 0;
`

export const LandingSignUpButton = styled.section`
  display: flex;
  justify-self: center; 
`