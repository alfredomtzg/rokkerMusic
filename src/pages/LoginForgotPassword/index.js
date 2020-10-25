import React from 'react'
import {PageContainer, MainContainer } from '../../containers/LayoutContainers'
import { FormBox, LoginOrSendButtonBox, TopBar, TopTextBox } from '../Globals/GlobalStyle'

const LoginForgotPassword = () => {
  return (
    <PageContainer dark>
      <TopBar>

      </TopBar>
      <MainContainer>
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
    </PageContainer>
  )
}

export default LoginForgotPassword