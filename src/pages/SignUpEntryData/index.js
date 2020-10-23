import React from 'react'
import MainContainer from '../../containers/MainContainer'
import {WelcomeSubTitle, WelcomeTitle, EntryDataForm } from './style'
import { TopBar, TopTextBox, NextButtonBox } from '../Globals/GlobalStyle'
import { GlobalStyle } from '../../components/styles/globals'


const SignUpEntryData = () => {
  return(
    <MainContainer dark>
      <GlobalStyle/>
      <TopBar/>
      <TopTextBox>
        <WelcomeTitle>Welcome!</WelcomeTitle>
        <WelcomeSubTitle>Ready to rock with us?</WelcomeSubTitle>
      </TopTextBox>
      <EntryDataForm>
        
      </EntryDataForm>
      <NextButtonBox>
        
      </NextButtonBox>
    </MainContainer>
  )
}

export default SignUpEntryData;