import styled from 'styled-components'
import {Colors} from '../../components/styles/globals'

export const TopBar = styled.header`
  display: flex;
  justify-content: center;
`

export const LandingLogoBox = styled.figure`
  display: flex;
  justify-self: center;
  align-self: flex-end;
  margin: 0;
`

export const TopTextBox = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5vh;
  padding: 6vh 0 9vh;
  text-align: center;
  color: ${Colors.G100};
`
export const FormBox = styled.main`
  display: flex;
  justify-content: center;
`

export const NextButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 3vh 0 6vh;
`

export const LoginOrSendButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 9vh;
`

export const PlaylistContentBox = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 5vh;
`

export const MiniPlayerAndNavContainer = styled.footer`
  position:fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
` 