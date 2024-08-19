import React from "react";
import { useNews } from "../../contexts/News";
import { StyledTabs } from "./styles";
import NewsGrid from "../NewsGrid";

const AppTabs = () => {
  const { setApiName, apiName } = useNews();
  const items = [
    {
      key: "newsApi",
      label: "News Api",
      children: <NewsGrid title="New API" />,
    },
    {
      key: "newYorkTimes",
      label: "New York Times",
      children: <NewsGrid title="New York Times" />,
    },
    {
      key: "gNews",
      label: "Google News",
      children: <NewsGrid title="Google News" />,
    },
  ];
  const onChange = (key) => {
    setApiName(key);
  };
  return (
    <StyledTabs
      defaultActiveKey={apiName}
      onChange={onChange}
      type="card"
      items={items}
    />
  );
};
export default AppTabs;
