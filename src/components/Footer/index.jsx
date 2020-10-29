import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./style";
import "../../assets/fonts/coolicons.css";

const Footer = () => {
  return (
    <Navbar>
      <Link to="/home">
        <i className="ci-home_alt_fill" />
      </Link>
      <Link to="/playlist">
        <i className="ci-grid_round" />
      </Link>
      <Link to="/search">
        <i className="ci-search" />
      </Link>
    </Navbar>
  );
};

export default Footer;
