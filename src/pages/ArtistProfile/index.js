import React from 'react'
import {PageContainer, MainContainer} from '../../containers/LayoutContainers'
import { MiniPlayerAndNavContainer, PlaylistContentBox, TopBar } from '../Globals/GlobalStyle'
import { ArtistBox, StatsBox } from './style'

const ArtistProfile = () => {
  return(
    <PageContainer>
      <TopBar>

      </TopBar>
      <MainContainer>
        <ArtistBox>
          <h1>Test</h1>
        </ArtistBox>
        <PlaylistContentBox>
          <h1>Test</h1>
        </PlaylistContentBox>
        <StatsBox>
          <h1>Test</h1>
        </StatsBox> 
      </MainContainer>
      <MiniPlayerAndNavContainer>

      </MiniPlayerAndNavContainer>
    </PageContainer>
  )
}

export default ArtistProfile;