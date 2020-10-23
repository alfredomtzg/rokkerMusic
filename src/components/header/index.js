import { render } from "@testing-library/react";
import React from "react";
import { StyledHeader, StyledLogoHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoHeader>
        <h5>Rkr</h5>
      </StyledLogoHeader>
    </StyledHeader>
  );
};
