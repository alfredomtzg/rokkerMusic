import styled from "styled-components";

export const StyledCardPlaylist = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  width: 138px;
  height: 138px;
  box-shadow: 3px 4px 9px 0px rgba(0, 0, 0, 0.15);

  img {
    width: 138px;
    height: 138px;
  }

  p {
    position: absolute;
    top: 30%;
    color: white;
  }

  i {
    position: absolute;
    left: 0.5rem;
    bottom: 0.5rem;
    font-size: 20px;
    color: white;
  }
`;
