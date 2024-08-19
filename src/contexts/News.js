import React, { useCallback, useContext, useState } from "react";

const ArticlesContext = React.createContext({
  searchValue: "",
  setSearchValue: () => {},
  filterButtonValue: "",
  setFilterButtonValue: () => {},
  apiName: "",
  setApiName: () => {},
});

const ArticlesProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterButtonValue, setFilterButtonValue] = useState("All");
  const [apiName, setApiName] = useState("newYorkTimes");

  const value = {
      searchValue,
      setSearchValue:useCallback(setSearchValue,[setSearchValue]),
      filterButtonValue,
      setFilterButtonValue:useCallback(setFilterButtonValue,[setFilterButtonValue]),
      apiName,
      setApiName:useCallback(setApiName,[setApiName]),
    }
  

  return (
    <ArticlesContext.Provider
      value={value}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export const useNews = ()=>useContext(ArticlesContext)

export default ArticlesProvider;
