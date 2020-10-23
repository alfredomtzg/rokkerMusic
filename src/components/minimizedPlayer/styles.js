import styled from "styled-components";

export const StyledMinimizedPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0px 20px;
  color: white;
  background: rgba(62, 42, 209, 1);
`;

export const StyledIconsLeft = styled.div`
  display: flex;
  align-items: center;

  i {
    font-size: 24px;
    padding-right: 20px;
  }

  h6,
  p {
    margin: 0;
    padding-bottom: 5px;
  }
`;

export const StyledIconsRight = styled.div`
  i {
    padding: 10px;
    font-size: 24px;
  }
`;
