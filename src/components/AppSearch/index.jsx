import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SearchWrapper, StyledSearch } from "./styles";
import { useNews } from "../../contexts/News";

const AppSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { setSearchValue, setFilterButtonValue } = useNews();

  const handleSearch = (value) => {
    setSearchValue(value);
    setFilterButtonValue(value);
    navigate("/search");
  };

  return (
    <SearchWrapper isHome={isHome}>
      <StyledSearch
        placeholder="Search for free news"
        onSearch={handleSearch}
      />
    </SearchWrapper>
  );
};

export default AppSearch;