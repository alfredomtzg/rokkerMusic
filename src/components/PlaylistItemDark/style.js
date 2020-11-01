import styled from "styled-components";
import { Colors } from "../styles/globals";

const StyledPlaylistItemDark = styled.div`
  display: flex;
  height: 3.9rem;
  background-color: ${Colors.G700};
  color: ${Colors.G100};

  img {
    width: 3.9rem;
    height: 3.9rem;
    padding-right: 1rem;
  }
`;

export default StyledPlaylistItemDark;
