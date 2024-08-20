import React, { useCallback, useContext, useState } from "react";

const NewsContext = React.createContext({
  searchQuery: "",
  setSearchQuery: () => {},
  category: "",
  setCategory: () => {},
  source: "",
  setsource: () => {},
});

const NewsProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [source, setsource] = useState("gNews");

  const value = {
      searchQuery,
      setSearchQuery:useCallback(setSearchQuery,[setSearchQuery]),
      category,
      setCategory:useCallback(setCategory,[setCategory]),
      source,
      setsource:useCallback(setsource,[setsource]),
    }
  

  return (
    <NewsContext.Provider
      value={value}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = ()=>useContext(NewsContext)

export default NewsProvider;
