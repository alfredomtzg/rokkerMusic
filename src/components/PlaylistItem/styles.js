import styled from "styled-components";
import { Colors } from "../styles/globals";

export const StyledPlaylistItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3.9rem;
  background-color: ${Colors.G100};
  margin: 1vh 0;
  

  button {
    margin: 0;
    padding: 0;
    border: none;
    color: none;
    background-color: ${Colors.G100};
  }
`;

export const StyledIconsLeft = styled.div`
  display: flex;
  :hover{
    transform: scale(1.05);
  }

  img {
    width: 3.9rem;
    height: 3.9rem;
    padding-right: 1rem;
  }
 
`;

export const StyledSongDescription = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
 

  h6,
  p {
    margin: 0;
  }
`;

export const StyledIconsRight = styled.div`
  display: flex;
  align-items: center;

  i {
    padding-left: 1rem;
    font-size: 2.4rem;
  }

  .ci-minus_circle {
    color: ${Colors.R500};
  }
`;
