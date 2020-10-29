import React from "react";
import {StyledContainer2,StyledFirstIcon,StyledName,StyledSecondIcon} from "./style";
import "../../../assets/fonts/coolicons.css";

const ButtonAddRemove = () => {
  return (
    <StyledContainer2>
     <StyledFirstIcon>
         <i className="ci-heart_fill"/>
     </StyledFirstIcon>
     <StyledName>
         <h5>Add/Remove from favorites</h5>
     </StyledName>
     <StyledSecondIcon>
         <i className="ci-chevron_big_right"/>
     </StyledSecondIcon>
    </StyledContainer2>
  );
};
export default ButtonAddRemove;
