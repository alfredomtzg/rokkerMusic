import React from "react";
import SearchBar from "../../components/SearchBar";
import Header from "../../components/Header";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopBar, MiniPlayerAndNavContainer } from "../Globals/GlobalStyle";
import { SearchBox, SearchRecommendationBox } from "./style";
import MinimizedPlayer from "../../components/MinimizedPlayer";
import Footer from "../../components/Footer";

const Search = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <SearchBox>
          <SearchBar />
        </SearchBox>
        <h3>Your last searches</h3>
        <SearchRecommendationBox>
          {/* Your last searches */}
        </SearchRecommendationBox>
        <h3>Trending</h3>
        <SearchRecommendationBox>{/* Trending */}</SearchRecommendationBox>
      </MainContainer>
      <MiniPlayerAndNavContainer>
        <MinimizedPlayer />
        <Footer />
      </MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default Search;
