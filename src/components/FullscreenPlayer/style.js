import styled from "styled-components";
import { Colors } from "../styles/globals";

export const TopOptions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2vh 8vw;
  align-items: center;
  color: ${Colors.G700};

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  i {
    font-size: 2.4rem;
  }
`;

export const SongCover = styled.div`
  display: flex;
  justify-content: center;
  margin: 7vh 0;
`;

export const SongTitleAndArtist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6vh 0;

  h3 {
    color: ${Colors.G700};
  }

  h4 {
    color: ${Colors.G600};
  }
`;

export const Timeline = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7vh 9vw 0;
  color: ${Colors.G600};

  div {
    display: flex;
    align-items: center;
  }
`;

export const TotalBar = styled.div`
  position: relative;
  height: 1vh;
  width: 50vw;
  background-color: ${Colors.G400};
`;

export const ProgressBar = styled.div`
  position: absolute;
  height: 1vh;
  width: 40vw;
  background-color: ${Colors.R500};
`;

export const PlayerMedia = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Colors.G200};
`;

export const PlayerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.4rem;
  margin: 2vh 6vw;

  div {
    display: flex;
    align-items: center;
  }

  .ci-heart_fill {
    margin-left: 3.4rem;
  }

  .ci-shuffle {
    margin-right: 1rem;
  }
`;

export const PlayerBottomButtons = styled(PlayerButtons)``;

export const ShuffleButton = styled.button``;
export const RepeatButton = styled.button``;
export const PrevButton = styled.button``;
export const PlayPauseButton = styled.button`
  border: 1px solid transparent;
  background-color: ${Colors.G200};
  &:focus {
      outline:none;
    }

  .ci-play_circle_filled,
  .ci-pause_circle_filled {
    font-size: 5rem;
    margin: 0 2vw;
    
  }
`;
export const NextButton = styled.button``;
export const HeartButton = styled.button``;
