import React from "react";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import { MiniPlayerAndNavContainer, TopBar } from "../Globals/GlobalStyle";
import { SearchBox } from "../Search/style";
import { SearchResultsBox } from "./style";

const SearchResults = () => {
  return (
    <PageContainer>
      <TopBar />
      <MainContainer>
        <SearchBox />
        <SearchResultsBox>{/* Songs */}</SearchResultsBox>
        <SearchResultsBox>{/* Artists */}</SearchResultsBox>
        <SearchResultsBox>{/* Playlists */}</SearchResultsBox>
      </MainContainer>
      <MiniPlayerAndNavContainer />
    </PageContainer>
  );
};

export default SearchResults;
