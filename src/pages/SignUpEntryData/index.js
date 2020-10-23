import React from 'react'
import MainContainer from '../../containers/MainContainer'
import {TopBar, WelcomeBox, WelcomeSubTitle, WelcomeTitle, EntryDataForm, NextButtonBox} from './style'


const SignUpEntryData = () => {
  return(
    <MainContainer dark>
      <TopBar/>
      <WelcomeBox>
        <WelcomeTitle>Welcome!</WelcomeTitle>
        <WelcomeSubTitle>Ready to rock with us?</WelcomeSubTitle>
      </WelcomeBox>
      <EntryDataForm>
        
      </EntryDataForm>
      <NextButtonBox>
        
      </NextButtonBox>
    </MainContainer>
  )
}

export default SignUpEntryData;