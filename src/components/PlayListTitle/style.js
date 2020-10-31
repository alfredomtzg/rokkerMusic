import styled from "styled-components";
import { Colors } from "../styles/globals";

export const StyledPlaylistItemDark = styled.div`
  display: flex;
  height: 3.9rem;
  background-color: ${Colors.G700};
  color: ${Colors.G100};
  margin-bottom: 0.5rem;
  img {
    width: 3.9rem;
    height: 3.9rem;
    padding-right: 1rem;
  }
`;

export const StyledSongDescription = styled.div`
  display: flex;
  align-items: center;

  h6,
  p {
    margin: 0;
  }
`;
