import styled from "styled-components";
import { Colors } from "../styles/globals";

export const StyledMinimizedPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding: 0 2rem;
  color: ${Colors.G100};
  background: ${Colors.B500};

  .maximizePlayer {
    background-color: transparent;
    color: ${Colors.G100};
    border: none;
    margin: 0;
    padding: 0;

    &focus {
      outline: none;
    }
  }
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
