import React from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledFooterWrapper, StyledLink, StyledList, StyledLogo } from "./styles";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <StyledFooterWrapper>
      <div className="container footer">
        <StyledLogo>
          <Link to="/">TNA</Link>
        </StyledLogo>
        <p>© 2024 TNA. All rights reserved | Privacy Policy</p>

        <StyledList>
          {[
            {
              key: "1",
              name: "All Filters",
              link: "/search",
            },
            {
              key: "2",
              name: isHome ? "More" : "Home",
              link: isHome ? "/search" : "/",
            },
          ].map((item) => (
            <StyledLink key={item.key}>
              <Link className={`link-${item.key}`} to={item.link}>
                {item.name}
              </Link>
            </StyledLink>
          ))}
        </StyledList>
      </div>
    </StyledFooterWrapper>
  );
};

export default Footer;
