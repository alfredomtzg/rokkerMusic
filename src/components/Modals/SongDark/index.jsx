import React from "react";
import {
  StyledContainer2,
  StyledImg,
  StyledName,
  StyledSecondIcon,
  CloseModalButton,
} from "./style";
import "../../../assets/fonts/coolicons.css";
import Logo from "../../../assets/images/logo-rokker.png";

const ButtonSongDark = () => {
  return (
    <StyledContainer2>
      <StyledImg src={Logo}/>
      
      <StyledName>
        <h6>Song title</h6>
        <p>Artist</p>
      </StyledName>
      <StyledSecondIcon>
      <CloseModalButton
                aria-label="Close modal"
                onClick={() => ((prev) => !prev)}
              />
      </StyledSecondIcon>
    </StyledContainer2>
  );
};
export default ButtonSongDark;
