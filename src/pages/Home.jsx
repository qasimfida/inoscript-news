import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchArticles,
  fetchNYTimesArticles,
  fetchGNewsArticles,
} from "../store/News/actions";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useNews } from "../contexts/News";
import AppTabs from "../components/AppTabs";

const Home = () => {
  const dispatch = useDispatch();
  const { searchQuery, source } = useNews();
  const location = useLocation();

  useEffect(() => {
    const query = searchQuery ? searchQuery.trim() : "latest and trending";

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
  }, [dispatch, searchQuery, location.pathname, source]);

  return (
    <HomePageContainer className="container">
      <AppTabs />
    </HomePageContainer>
  );
};

export default Home;

const HomePageContainer = styled.div`
.card-container {
  display: grid;
  grid-template-columns: 50% 25% 25%;
  grid-template-rows: 50% 50%;
  gap: 10px;
  height: 50vh;
  @media(max-width: 768px){
    display: flex;
    flex-direction: column;
    .card {
      height: 300px;
    }
  }
}
.card-large {
  grid-row: 1 / 3;
  grid-column: 1 / 2;
}

.card-medium {
  grid-row: 1 / 2;
  grid-column: 2 / 4;
}

.card-small:nth-child(3) {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}

.card-small:nth-child(4) {
  grid-row: 2 / 3;
  grid-column: 3 / 4;
}


`;
