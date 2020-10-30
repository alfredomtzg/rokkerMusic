import styled from "styled-components";

export const StyledOpenModal = styled.a``;

export const StyledModalDialog = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9;
  opacity: 0;
  transition: opacity 400ms ease-in;
  pointer-events: none;
  &:target {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const StyledModalDialog2 = styled.div`
  position: relative;
  margin: 25rem auto;
/*   padding: 0.5rem 2rem 1.3rem 2rem;
 */  border-radius: 1rem;
`;
export const StyledClose = styled.a`
  background: #606061;
  color: #ffffff;
  line-height: 2.5rem;
  position: absolute;
  right: 3.5rem;
  top: 2rem;
  text-align: center;
  width: 2.4rem;
  text-decoration: none;
  border-radius: 1.2rem;
 
  &:hover {
    background: #00d9ff;
  }
`;
