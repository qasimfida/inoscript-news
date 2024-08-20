import React from "react";
import { Link } from "react-router-dom";
import { StyledFooterWrapper, StyledLogo } from "./styles";

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <div className="container footer">
        <StyledLogo>
          <Link to="/">TNA</Link>
        </StyledLogo>
        <p>© 2024 TNA. All rights reserved | Privacy Policy</p>
      </div>
    </StyledFooterWrapper>
  );
};

export default Footer;
