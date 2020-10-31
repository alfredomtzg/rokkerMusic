import styled from "styled-components";
import { Colors } from "../styles/globals";

export const StyledMinimizedPlayerContainer = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  background-color: none;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const StyledMinimizedPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding: 0 2rem;
  color: ${Colors.G100};
  background: ${Colors.B500};
`;

export const StyledIconsLeft = styled.div`
  display: flex;
  align-items: center;

  i {
    font-size: 2.4rem;
    padding-right: 2rem;
  }
`;

export const StyledIconsRight = styled.div`
  i {
    padding: 1rem;
    font-size: 2.4rem;
  }
`;

export const StyledSongDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h6,
  p {
    margin: 0;
  }
`;
