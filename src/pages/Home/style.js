import styled from "styled-components";

export const GreetingBox = styled.section`
  display: flex;
  justify-content: center;
`;

export const FavoritesBox = styled(GreetingBox)`
  margin: 5vh 0;
`;

export const RecommendPlaylistsBox = styled.section`
  display: grid;
  gap: 3vw;
  grid-auto-flow: column;
  margin: 3vh 0;
  overflow-x: scroll;
  overflow-y: hidden;
`;
