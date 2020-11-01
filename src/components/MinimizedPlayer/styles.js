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
display:flex;
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

export const PlayPauseButton = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  color:${Colors.G100};
  
  &:focus {
    outline: none;
  }

  .ci-play_circle_filled,
  .ci-pause_circle_filled {
    font-size: 4rem;
    margin: 0 ;
    padding-right: 1rem;
  }
`;
export const PlayNext = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  color:${Colors.G100};
  
  &:focus {
    outline: none;
  }
  .ci-skip_next {
    font-size: 3rem;
    margin:  0 ;
    padding-right: .5rem;
  }
`;