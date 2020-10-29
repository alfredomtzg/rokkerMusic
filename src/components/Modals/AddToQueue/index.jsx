import React from "react";
import {StyledContainer2,StyledFirstIcon,StyledName,StyledSecondIcon} from "./style";
import "../../../assets/fonts/coolicons.css";

const ButtonAddToQueue = () => {
  return (
    <StyledContainer2>
     <StyledFirstIcon>
         <i className="ci-list_plus"/>
     </StyledFirstIcon>
     <StyledName>
         <h5>Add To Queue</h5>
     </StyledName>
     <StyledSecondIcon>
         <i className="ci-chevron_big_right"/>
     </StyledSecondIcon>
    </StyledContainer2>
  );
};
export default ButtonAddToQueue;
