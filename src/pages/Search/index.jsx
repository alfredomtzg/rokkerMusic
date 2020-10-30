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
import { SearchRecommendation } from "../../components/Cards";

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
          <SearchRecommendation />
          <SearchRecommendation />
          <SearchRecommendation />
          <SearchRecommendation />
          <SearchRecommendation />
        </SearchRecommendationBox>
        <h3>Trending</h3>
        <SearchRecommendationBox>
          <SearchRecommendation />
          <SearchRecommendation />
          <SearchRecommendation />
          <SearchRecommendation />
          <SearchRecommendation />
        </SearchRecommendationBox>
      </MainContainer>
      <MiniPlayerAndNavContainer>
        <MinimizedPlayer />
        <Footer />
      </MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default Search;
