import React, { useState } from "react";
import { useSelector } from "react-redux";
import NewsCard from "../NewsCard";
import AppModal from "../AppModal";
import { GridContainer, NewsTitle, StyledCard, StyledGrid } from "./styles";

const NewsGrid = ({ title }) => {
  const articles = useSelector((state) => state.news.items);
  const status = useSelector((state) => state.news.status);

  const placeholderCount = 20;
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const showModal = (item) => {
    setModalContent(item);
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <GridContainer>
      <NewsTitle>{title}</NewsTitle>
      <StyledGrid>
        {status === "loading"
          ? Array.from({ length: placeholderCount }, (_, index) => (
              <StyledCard
                key={index}
                style={{ width: "100%", marginTop: 16 }}
                loading={true}
              />
            ))
          : articles?.map((item) => (
              <NewsCard
                key={item.key}
                imageUrl={item.urlToImage}
                url={item.url}
                title={item.title}
                description={item.description}
                sourceName={item.source}
                onClick={(event) => {
                  event.stopPropagation();
                  showModal(item);
                }}
              />
            ))}
      </StyledGrid>
      <AppModal
        isVisible={visible}
        title={modalContent.title}
        imageUrl={modalContent.urlToImage}
        url={modalContent.url}
        content={modalContent.content}
        description={modalContent.description}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </GridContainer>
  );
};

export default NewsGrid;

