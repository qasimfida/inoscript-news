import React, { useEffect } from "react";
import NewsGrid from "../components/NewsGrid";
import NewsCategories from "../components/NewsCategories";
import NewsFilter from "../components/NewsFilter";
import { useDispatch } from "react-redux";
import {
  fetchArticles,
  fetchNYTimesArticles,
  fetchGNewsArticles,
} from "../store/News/actions";
import styled from "styled-components";
import { useNews } from "../contexts/News";

const NewsSearch = () => {
  const dispatch = useDispatch();
  const { searchQuery, setSearchQuery, category, source } = useNews()

  useEffect(() => {
    let query = "all";
    if (searchQuery.trim()) {
      query = searchQuery;
    } else if (category) {
      query = category;
    }

    switch (source) {
      case "newsApi":
        dispatch(fetchArticles(query));
        break;
      case "newYorkTimes":
        dispatch(fetchNYTimesArticles(query));
        break;
      default:
        dispatch(fetchGNewsArticles(query));
    }

    setSearchQuery("");
  }, [dispatch, searchQuery, category, setSearchQuery, source]);

  return (
    <NewsContainer className="container">
      <NewsCategories />
      <NewsFilter />
      <NewsGrid />
    </NewsContainer>
  );
};

export default NewsSearch;

const NewsContainer = styled.div``;
