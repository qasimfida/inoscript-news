import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchArticles,
  fetchNewYorkTimesArticles,
  fetchGoogleNewsArticles,
} from "../store/News/actions";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useNews } from "../contexts/News";
import AppTabs from "../components/AppTabs";

const Home = () => {
  const dispatch = useDispatch();
  const { searchQuery, selectedApi } = useNews();
  const location = useLocation();

  useEffect(() => {
    const query = searchQuery ? searchQuery.trim() : "latest and trending";

    switch (selectedApi) {
      case "newsApi":
        dispatch(fetchArticles(query));
        break;
      case "newYorkTimes":
        dispatch(fetchNewYorkTimesArticles(query));
        break;
      default:
        dispatch(fetchGoogleNewsArticles(query));
    }
  }, [dispatch, searchQuery, location.pathname, selectedApi]);

  return (
    <HomePageContainer className="container">
      <AppTabs />
    </HomePageContainer>
  );
};

export default Home;

const HomePageContainer = styled.div`

`;
