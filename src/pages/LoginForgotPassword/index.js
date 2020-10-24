import React from 'react'
import MainContainer from '../../containers/MainContainer'
import { FormBox, LoginOrSendButtonBox, TopBar, TopTextBox } from '../Globals/GlobalStyle'

const LoginForgotPassword = () => {
  return (
    <MainContainer dark>
      <TopBar>

      </TopBar>
      <TopTextBox>
        <h2>Forgot your password?</h2>
        <h5>
          Don't worry! give us your email <br/>
          and we'll be sending you <br/>
          a new one
        </h5>
      </TopTextBox>
      <FormBox>

      </FormBox>
      <LoginOrSendButtonBox>

      </LoginOrSendButtonBox>
    </MainContainer>
  )
}

export default LoginForgotPassword