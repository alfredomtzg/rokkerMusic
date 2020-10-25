import React from 'react'
import {PageContainer, MainContainer} from '../../containers/LayoutContainers'
import {TopBar, MiniPlayerAndNavContainer} from '../Globals/GlobalStyle'
import { SearchBox, SearchRecommendationBox } from './style'

const Search = () => {
  return (
    <PageContainer>
      <TopBar>
      </TopBar>
      <MainContainer>
        <SearchBox>

        </SearchBox>
        <SearchRecommendationBox>
        {/* Your last searches */}
        </SearchRecommendationBox>
        <SearchRecommendationBox>
        {/* Trending */}
        </SearchRecommendationBox>
      </MainContainer>
      <MiniPlayerAndNavContainer>

      </MiniPlayerAndNavContainer>
    </PageContainer>
  )
}

export default Search;