import styled, { keyframes } from "styled-components";
import { Colors } from "../styles/globals";

export const Hover = keyframes`
 0% {
    transform: scale(.5);
    color: #121212;
    -webkit-text-stroke: 0.2rem gray;
  }

  20% {
    transform: scale(1.2);
    color: pink;
    -webkit-text-stroke: 0.3rem red;
    filter: drop-shadow(0 0 1px black)drop-shadow(0 0 1px black)drop-shadow(0 0 3px red)drop-shadow(0 0 5px red)hue-rotate(10turn);
  }

  50% {
    transform: scale(.5);
    color: #121212;
    -webkit-text-stroke: 0.2rem gray;
  }

`;

export const StyledContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${Colors.G700};
  justify-content: center;
  align-items: center;
  --effect: ${Hover} 1s linear infinite;
`;
export const StyledLetters = styled.p`
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  font-size: 5rem;
  font-family: arial;
  font-weight: 600;
  transform: scale(0.5);
  color: #121212;
  -webkit-text-stroke: 0.1rem gray;

  &:nth-child(1) {
    animation: ${Hover} 0.75s linear infinite;
  }
  &:nth-child(2) {
    animation: ${Hover} 0.75s linear infinite 0.125s;
  }
  &:nth-child(3) {
    animation: ${Hover} 0.75s linear infinite 0.25s;
  }
  &:nth-child(4) {
    animation: ${Hover} 0.75s linear infinite 0.375s;
  }
  &:nth-child(5) {
    animation: ${Hover} 0.75s linear infinite 0.5s;
  }
  &:nth-child(6) {
    animation: ${Hover} 0.75s linear infinite 0.675s;
  }
  &:nth-child(7) {
    animation: ${Hover} 0.75s linear infinite 0.75s;
  }
`;
