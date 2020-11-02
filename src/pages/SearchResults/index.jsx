import React from "react";
import { ArtistSearchCard, PlaylistSearchCard } from "../../components/Cards";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { PlaylistHeartDotsSong } from "../../components/PlaylistItem";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import { TopBar } from "../Globals/GlobalStyle";
import { SearchBox } from "../Search/style";
import SearchResultsBox from "./style";

const SearchResults = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <SearchBox>
          <SearchBar />
        </SearchBox>
        <h3>Songs</h3>
        <SearchResultsBox>
          <PlaylistHeartDotsSong />
          <PlaylistHeartDotsSong />
          <PlaylistHeartDotsSong />
        </SearchResultsBox>
        <h3>Artists</h3>
        <SearchResultsBox>
          <ArtistSearchCard />
          <ArtistSearchCard />
          <ArtistSearchCard />
          <ArtistSearchCard />
        </SearchResultsBox>
        <h3>Playlists</h3>
        <SearchResultsBox>
          <PlaylistSearchCard />
          <PlaylistSearchCard />
          <PlaylistSearchCard />
          <PlaylistSearchCard />
        </SearchResultsBox>
      </MainContainer>
    </PageContainer>
  );
};

export default SearchResults;
