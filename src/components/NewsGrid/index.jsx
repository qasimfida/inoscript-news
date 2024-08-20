import React, { useState } from "react";
import { useSelector } from "react-redux";
import NewsCard from "../NewsCard";
import AppModal from "../AppModal";
import { GridContainer, NewsTitle, StyledCard, StyledGrid } from "./styles";

const NewsGrid = ({ title, hasCover }) => {
  const {items , status} = useSelector((state) => state.news);

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

  const top4 = (items || []).slice(0,4)
  const list = hasCover ?   (items || []).slice(3, items?.length): items
  
  return (
    <GridContainer>
      {hasCover &&
       <div class="card-container">
        {top4.map((item, index)=>{
          const cls = `card banner ${index === 0? 'card-large': index === 1 ? 'card-medium': 'card-small'}`
          return <NewsCard
          key={item.key}
          imageUrl={item.urlToImage}
          url={item.url}
          title={item.title}
          description={item.description}
          sourceName={item.source}
          className={cls}
          onClick={(event) => {
            event.stopPropagation();
            showModal(item);
          }}
        />
        })}
      </div>
      }
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
          : list?.map((item) => (
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

