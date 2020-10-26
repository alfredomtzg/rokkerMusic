import styled from "styled-components";
import { Colors } from "../styles/globals"

export const StyledPlaylistItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3.9rem;
  padding: 0 2rem;
  background-color: ${Colors.G100};
`;

export const StyledIconsLeft = styled.div`
  display: flex;

  img {
    width: 3.9rem;
    height: 3.9rem;
    padding-right: 1rem;
  }
`;

export const StyledSongDescription = styled.div`
  display: flex;
  flex-direction: column;

  h6, p {
    margin: 0;
  }
`;

export const StyledIconsRight = styled.div`
  display: flex;
  align-items: center;

  i {
    padding-left: 1rem;
    font-size: 2.4rem
  }
`;