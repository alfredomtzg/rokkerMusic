import React from 'react'
import MainContainer from '../../containers/MainContainer'
import {EntryDataForm } from './style'
import { TopBar, TopTextBox, NextButtonBox } from '../Globals/GlobalStyle'

const SignUpEntryData = () => {
  return(
    <MainContainer dark>
      <TopBar/>
      <TopTextBox>
        <h2>Welcome!</h2>
        <h5>Ready to rock with us?</h5>
      </TopTextBox>
      <EntryDataForm>
        
      </EntryDataForm>
      <NextButtonBox>
        
      </NextButtonBox>
    </MainContainer>
  )
}

export default SignUpEntryData;