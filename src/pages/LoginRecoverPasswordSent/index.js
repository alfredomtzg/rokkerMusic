import React from 'react'
import MainContainer from '../../containers/MainContainer'
import {LoginOrSendButtonBox, TopBar, TopTextBox} from '../Globals/GlobalStyle'

const LoginRecoverPasswordSent = () => {
  return (
    <MainContainer dark>
      <TopBar>

      </TopBar>
      <TopTextBox>
        <h2>Nice!</h2>
        <h5>
          If your e-mail is correct <br/>
          in your inbox you must receive <br/>
          a new password
        </h5>
      </TopTextBox>
      <LoginOrSendButtonBox>

      </LoginOrSendButtonBox>
    </MainContainer>
  )
}

export default LoginRecoverPasswordSent;