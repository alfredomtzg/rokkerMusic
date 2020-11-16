import styled, { keyframes } from "styled-components";
import { Colors } from "../styles/globals";

export const spinnerSpin = keyframes`
 100% {
    transform: rotate(360deg);
  }
`;
export const spinnerFade = keyframes`
  20% {
    opacity: .1;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: .1;
  }
`;
export const ContainerSpinner = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Colors.G700};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  position: relative;
  margin: auto;
  box-sizing: border-box;
  background-clip: padding-box;
  width: 20rem;
  height: 20rem;
  border-radius: 10rem;
  border: 0.4rem solid rgba(255, 255, 255, 0.1);
  --webkit-mask: linear-gradient(rgba(0, 0, 0, 0.5), #000000 90%);
  transform-origin: 50% 70%;
  transform: perspective(20rem) rotateX(66deg);
  animation: spinner-wiggle 1.2s infinite;

  &:before,
  &:after {
    content: "";
    position: absolute;
    margin: -0.4rem;
    box-sizing: inherit;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    opacity: 0.05;
    border: inherit;
    border-color: transparent;
    animation: ${spinnerSpin} 1.2s cubic-bezier(0.6, 0.2, 0, 0.8) infinite,
      ${spinnerFade} 1.2s linear infinite;
  }

  &:before {
    border-top-color: #66e6ff;
  }

  &:after {
    border-top-color: #f0db75;
    animation-delay: 0.3s;
  }
  h2 {
    color: ${Colors.white};
    position: absolute;
    top: 10rem;
    left: 4rem;
  }
`;
