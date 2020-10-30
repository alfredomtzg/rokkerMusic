import React from "react";
import { Link } from "react-router-dom";
import StyledHeader from "./styles";
import Logo from "../../assets/Logo/Rkr-red-nav.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/home">
        <img src={Logo} alt="Rokker Logo" />
      </Link>
    </StyledHeader>
  );
};

export default Header;
