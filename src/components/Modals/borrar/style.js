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
  width: 40rem;
  position: relative;
  margin: 10% auto;
  padding: 0.5rem 2rem 1.3rem 2rem;
  border-radius: 1rem;
  background: #fff;
`;
export const StyledClose = styled.a`
  background: #606061;
  color: #ffffff;
  line-height: 2.5rem;
  position: absolute;
  right: 1.2rem;
  top: 1rem;
  text-align: center;
  width: 2.4rem;
  text-decoration: none;
  font-weight: bold;
  -webkit-border-radius: 1.2rem;
  -moz-border-radius: 1.2rem; 
  border-radius: 1.2rem;
   -moz-box-shadow: 0.1rem 0.1rem 0.3rem #000;
  -webkit-box-shadow: 0.1rem 0.1rem 0.3rem #000; 
  box-shadow: 0.1rem 0.1rem 0.3rem #000;
  &:hover {
    background: #00d9ff;
  }
`;
