import styled from "styled-components";
import { Colors } from "../styles/globals";

export const StyledContainerButton = styled.button`
  width: 100%;
  display: block;
  border: none;
  background-color: none;
  padding: 0;
  margin: 0;
  &:focus {
    outline: none;
  }
`;

export const StyledPlaylistItemDark = styled.div`
  display: flex;
  height: 3.9rem;
  background-color: ${Colors.G700};
  color: ${Colors.G100};
  padding:0.25rem 0 0.25rem 0 ;
  img {
    width: 3.9rem;
    height: 3.9rem;
    padding-right: 1rem;
  }
  &:active{
    background-color: ${Colors.S700};
    padding:0.25rem 0 0.25rem 0 ;

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
