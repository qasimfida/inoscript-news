import React, { useEffect } from "react";
import NewsGrid from "../components/NewsGrid";
import NewsCategories from "../components/NewsCategories";
import NewsFilter from "../components/NewsFilter";
import { useDispatch } from "react-redux";
import {
  fetchArticles,
  fetchNewYorkTimesArticles,
  fetchGoogleNewsArticles,
} from "../store/News/actions";
import styled from "styled-components";
import { useNews } from "../contexts/News";

const NewsSearch = () => {
  const dispatch = useDispatch();
  const { searchValue, setSearchValue, filterButtonValue, apiName } = useNews()

  useEffect(() => {
    let query = "all";
    if (searchValue.trim()) {
      query = searchValue;
    } else if (filterButtonValue) {
      query = filterButtonValue;
    }

    switch (apiName) {
      case "newsApi":
        dispatch(fetchArticles(query));
        break;
      case "newYorkTimes":
        dispatch(fetchNewYorkTimesArticles(query));
        break;
      default:
        dispatch(fetchGoogleNewsArticles(query));
    }

    setSearchValue("");
  }, [dispatch, searchValue, filterButtonValue, setSearchValue, apiName]);

  return (
    <NewsContainer className="container">
      <NewsCategories />
      <NewsFilter selectedCategory={filterButtonValue} />
      <NewsGrid />
    </NewsContainer>
  );
};

export default NewsSearch;

const NewsContainer = styled.div``;
