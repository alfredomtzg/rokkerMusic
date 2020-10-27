import React from "react";
import { ArtistSearchCard } from "../../components/Cards";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import MinimizedPlayer from "../../components/minimizedPlayer";
import PlaylistItem from "../../components/PlaylistItem";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import { MiniPlayerAndNavContainer, TopBar } from "../Globals/GlobalStyle";
import { SearchBox } from "../Search/style";
import SearchResultsBox from "./style";

const SearchResults = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <SearchBox />
        <h3>Songs</h3>
        <SearchResultsBox>
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
        </SearchResultsBox>
        <h3>Artists</h3>
        <SearchResultsBox>
          <ArtistSearchCard />
          <ArtistSearchCard />
          <ArtistSearchCard />
          <ArtistSearchCard />
        </SearchResultsBox>
        <h3>Playlists</h3>
        <SearchResultsBox />
      </MainContainer>
      <MiniPlayerAndNavContainer>
        <MinimizedPlayer />
        <Footer />
      </MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default SearchResults;
