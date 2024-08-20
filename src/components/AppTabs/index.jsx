import React from "react";
import { useNews } from "../../contexts/News";
import { StyledTabs } from "./styles";
import NewsGrid from "../NewsGrid";

const AppTabs = () => {
  const { setsource, source } = useNews();
  const items = [
    {
      key: "newsApi",
      label: "News Api",
      children: <NewsGrid hasCover title="Browse New API" />,
    },
    {
      key: "gNews",
      label: "Google News",
      children: <NewsGrid hasCover title="Browse Google News" />,
    },
    {
      key: "newYorkTimes",
      label: "New York Times",
      children: <NewsGrid hasCover title="Browse New York Times" />,
    },
  ];
  const onChange = (key) => {
    setsource(key);
  };
  return (
    <StyledTabs
      defaultActiveKey={source}
      onChange={onChange}
      type="card"
      items={items}
    />
  );
};
export default AppTabs;
