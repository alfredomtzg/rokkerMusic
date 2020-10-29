import React from "react";
import {StyledContainer2,StyledFirstIcon,StyledName,StyledSecondIcon} from "./style";
import "../../../assets/fonts/coolicons.css";

const ButtonSeeArtistProfile = () => {
  return (
    <StyledContainer2>
     <StyledFirstIcon>
         <i className="ci-user_circle"/>
     </StyledFirstIcon>
     <StyledName>
         <h5>See Artist Profile</h5>
     </StyledName>
     <StyledSecondIcon>
         <i className="ci-chevron_big_right"/>
     </StyledSecondIcon>
    </StyledContainer2>
  );
};
export default ButtonSeeArtistProfile;
