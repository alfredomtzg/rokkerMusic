import styled from "styled-components";

export const YourPlaylistsBox = styled.section`
  display: flex;
  justify-content: center;
  padding: 3vh 0 7vh;
`;

export const NewAndFavoritesBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5vh;
`;

export const PlaylistsBox = styled(NewAndFavoritesBox)`
  margin-bottom: 8vh;
`;
