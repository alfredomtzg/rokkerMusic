import React from 'react'
import { GlobalStyle } from '../../components/styles/globals'
import MainContainer from '../../containers/MainContainer'
import { TopBar, TopTextBox, NextButtonBox } from '../Globals/GlobalStyle'
import {AvatarsGrid} from './style'

const SingUpPickAvatar = () => {
  return(
    <MainContainer dark>
      <GlobalStyle/>        
      <TopBar/>
      <TopTextBox>
        <h2>Mike</h2>
        <h5>Pick your avatar</h5>
      </TopTextBox>
      <AvatarsGrid>
        
      </AvatarsGrid>
      <NextButtonBox>

      </NextButtonBox>
    </MainContainer>
  )
}

export default SingUpPickAvatar