import styled from "styled-components";
import { Colors } from "../styles/globals";

const StyledEditPlaylistBox = styled.div`
  flex-direction: column;

  div {
    margin: 2vh 0;
  }

  .CancelSaveButtons,
  .EditTitleAndDelete {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .EditTitleAndDelete input {
    width: 60vw;
    font-size: 2.8rem;
    border: none;
    color: ${Colors.G700};
  }

  textarea {
    width: 100%;
  }
`;

export default StyledEditPlaylistBox;
