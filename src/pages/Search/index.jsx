import React from "react";
import SearchBar from "../../components/SearchBar";
import Header from "../../components/Header";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopBar } from "../Globals/GlobalStyle";
import { SearchBox, SearchRecommendationBox } from "./style";
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
    </PageContainer>
  );
};

export default Search;
