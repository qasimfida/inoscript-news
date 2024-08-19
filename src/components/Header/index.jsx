import React from "react";
import AppSearch from "../AppSearch";
import { Link, useLocation } from "react-router-dom";
import { ActionButtonsWrapper, MainTitle, SearchWrapper, StyledButton, StyledHeaderWrapper, StyledLink, StyledList, StyledLogo, StyledNav } from "./styles";

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
       
        <StyledList isHome={isHome}>
            <StyledLink isHome={isHome}>
              <Link className={`link-1`} to={'/search'}>
                All Filters
              </Link>
            </StyledLink>
            <StyledLink isHome={isHome}>
              <Link className={`link-2`} to={isHome ? "/search" : "/"}>
                {isHome ? "More" : "Home"}
              </Link>
            </StyledLink>
        </StyledList>
      </StyledNav>
      {isHome && (
        <SearchWrapper>
          <MainTitle>
            Discover the latest and trending news from around the globe.
          </MainTitle>
          <ActionButtonsWrapper>
          <StyledButton to="search">Explore More</StyledButton>
        </ActionButtonsWrapper>
          {/* <AppSearch /> */}
        </SearchWrapper>
      )}
    </StyledHeaderWrapper>
  );
};

export default Header;