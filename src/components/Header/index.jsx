import React from "react";
import AppSearch from "../AppSearch";
import { Link, useLocation } from "react-router-dom";
import { StyledHeaderWrapper, StyledLink, StyledList, StyledLogo, StyledNav } from "./styles";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <StyledHeaderWrapper isHome={isHome}>
      <StyledNav className="container flex-between">
        <StyledLogo isHome={isHome}>
          <Link to="/">TNA</Link>
        </StyledLogo>
        {!isHome && <AppSearch />}
       
       {isHome ?
        <StyledList isHome={isHome}>
            <StyledLink isHome={isHome}>
              <Link className={`link-1`} to={'/search'}>
                All Filters
              </Link>
            </StyledLink>
        </StyledList>: <div/>
       }
      </StyledNav>
     
    </StyledHeaderWrapper>
  );
};

export default Header;