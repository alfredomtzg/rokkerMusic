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

  button,
  .minimizePlayer {
    background-color: transparent;
    margin: 0;
    padding: 0;
    border: none;

    &focus {
      outline: none;
    }
  }
`;

export const SongCover = styled.div`
  display: flex;
  justify-content: center;
  margin: 2vh 0;

  img {
    width: 50vw;
  }
`;

export const SongTitleAndArtist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2vh 0;

  h4 {
    color: ${Colors.G700};
  }

  h5 {
    color: ${Colors.G600};
  }
`;

export const Timeline = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3vh 9vw 0;
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
  width: ${(props) => `${props.progressBar}vw`};
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
`;

export const PlayerBottomButtons = styled(PlayerButtons)`
  button {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    font-size: 2.4rem;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: none;

  &focus {
    outline: none;
  }

  i {
    font-size: 2.4rem;
  }
`;

export const ShuffleButton = styled(Button)``;
export const RepeatButton = styled(Button)``;
export const PrevButton = styled(Button)``;
export const PlayPauseButton = styled(Button)`
  border: 1px solid transparent;
  background-color: ${Colors.G200};
  &:focus {
    outline: none;
  }

  .ci-play_circle_filled,
  .ci-pause_circle_filled {
    font-size: 5rem;
    margin: 0 2vw;
  }
`;
export const NextButton = styled(Button)``;
export const HeartButton = styled(Button)``;
