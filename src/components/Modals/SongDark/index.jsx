import React from "react";
import {
  StyledContainer2,
  StyledImg,
  StyledName,
 
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
   
    </StyledContainer2>
  );
};
export default ButtonSongDark;
