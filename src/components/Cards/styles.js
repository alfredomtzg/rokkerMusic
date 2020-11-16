import styled from "styled-components";
import { Colors } from "../styles/globals";

export const StyledMidCard = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 13.8rem;
  height: 13.8rem;
  border-radius: 1rem;
  background-color: ${Colors.G200};
  box-shadow: ${Colors.shadow};
  :hover {
    transform: scale(1.05);
  }

  img {
    width: 13.8rem;
    height: 13.8rem;
    object-fit: contain;
    border-radius: 0.5rem;
  }

  p {
    position: absolute;
    margin: 0;
    color: ${Colors.G100};
  }

  .ci-play_circle_filled {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    font-size: 2rem;
    color: ${Colors.G100};
  }

  .ci-heart_fill {
    font-size: 5.2rem;
    color: ${Colors.R500};
  }

  .black {
    color: ${Colors.S700};
  }
`;

export const StyledSmallCard = styled(StyledMidCard)`
  width: 8rem;
  height: 8rem;

  img {
    width: 8rem;
    height: 8rem;
  }

  p {
    font-size: 1rem;
  }

  .ci-play_circle_filled {
    font-size: 1.5rem;
    left: 0.5rem;
    bottom: 0.5rem;
  }

  .ci-heart_fill {
    font-size: 3.5rem;
  }

  .ci-plus {
    font-size: 3rem;
  }
`;

export const StyledWideCard = styled(StyledMidCard)`
  width: 33.5rem;
`;

export const StyledGenreCard = styled(StyledMidCard)`
  height: 4.5rem;
  background-color: ${Colors.G600};
`;

export const StyledSearchRecommendation = styled.div`
  display: flex;
  align-items: center;
  margin: 1vh 0;

  i {
    margin-right: 4vw;
    font-size: 2rem;
  }
`;

export const StyledArtistSearchCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  div h6 {
    margin-left: 1rem;
  }

  i {
    font-size: 2.4rem;
  }
`;

export const StyledPlaylistSearchCard = styled(StyledArtistSearchCard)`
  img {
    width: 3.9rem;
  }
`;

export const StyledNewPlaylistCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  div h4 {
    margin-left: 1rem;
  }

  i {
    font-size: 4.2rem;
  }
`;
export const StyledMyFavoritesCard = styled(StyledNewPlaylistCard)``;

export const StyledPlaylistCard = styled(StyledNewPlaylistCard)``;

export const StyledPlaylistBigCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 3vh;
  }
`;
export const StyledFavoritesBigCard = styled(StyledPlaylistBigCard)``;

export const StyledArtistProfileCard = styled(StyledPlaylistBigCard)`
  img {
    width: 10rem;
  }
`;

export const StyledQueueReturn = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    position: absolute;
    left: 5vw;
    font-size: 2.4rem;
  }
`;

export const StyledAddToQueue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.G700};
  color: ${Colors.G100};
  height: 3.9rem;
  &:active {
    background-color: ${Colors.S700};
  }
  div {
    display: flex;
    align-items: center;
  }

  i {
    font-size: 2.4rem;
  }

  .ci-list_plus {
    margin-right: 1rem;
  }
`;

export const StyledAddToPlaylist = styled(StyledAddToQueue)`
  .ci-plus {
    margin-right: 1rem;
  }
`;
export const StyledSeeArtistProfile = styled(StyledAddToQueue)`
  .ci-user_circle {
    margin-right: 1rem;
  }
`;
export const StyledAddRemoveFromFavorites = styled(StyledAddToQueue)`
  .ci-heart_fill {
    margin-right: 1rem;
  }
`;

export const StyledGreetingsCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2vh;
  img {
    width: 10rem;
  }
`;
