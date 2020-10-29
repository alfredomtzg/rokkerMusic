import React from "react";
import StyledContainer from './style'
import '../../../assets/fonts/coolicons.css'

const ButtonAddTQ=()=>{
    return(
        <StyledContainer>
            <i className="ci-list_plus" />
            <h5>Add To Queue</h5>
            <i className="ci-chevron_big_right"/>
        </StyledContainer>
    );
};
export default ButtonAddTQ