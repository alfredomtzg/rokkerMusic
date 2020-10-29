import React from "react";
import {StyledContainer2,StyledFirstIcon,StyledName,StyledSecondIcon} from "./style";
import "../../../assets/fonts/coolicons.css";

const ButtonAddToPlaylist = () => {
  return (
    <StyledContainer2>
     <StyledFirstIcon>
         <i className="ci-plus"/>
     </StyledFirstIcon>
     <StyledName>
         <h5>Add To Playlist</h5>
     </StyledName>
     <StyledSecondIcon>
         <i className="ci-chevron_big_right"/>
     </StyledSecondIcon>
    </StyledContainer2>
  );
};
export default ButtonAddToPlaylist;
