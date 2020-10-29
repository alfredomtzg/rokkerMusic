import styled from "styled-components";
import { Colors } from "../../styles/globals";

const StyledContainer2 = styled.a`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  width: 33.5rem;
  height: 3.9rem;
  background: ${Colors.G700};
  color: ${Colors.G100};
  .ci-user_circle {
    font-size: 2rem;
    width: 2rem;
    height: 1.3rem;
    position: absolute;
    left: 0.9rem;
    top: 0.7rem;
    bottom: 1.2rem;
  }
  h5 {
      padding-left:5rem;
  }
  .ci-chevron_big_right {
    font-size: 2rem;
    width: 0.99rem;
    height: 1.697rem;
    padding-left: 14rem;
    padding-bottom: 1rem;
  }
  &:active{
      background:${Colors.S700}
  }
`;
export default StyledContainer2;