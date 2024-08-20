import React, { useRef } from "react";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNews } from "../../contexts/News";
import { StyledButtonsWrapper } from "./styles";
import { CATEGORIES } from "../../constants";

const NewsCategories = () => {
  const { category, setCategory } = useNews()
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 1000;
    }
  };
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 1000;
    }
  };

  return (
    <StyledButtonsWrapper className="container">
      <div className="scroll-arrow left-arrow" onClick={scrollLeft}>
        <CaretLeftOutlined />
      </div>
      <div className="scrollable-buttons" ref={scrollRef}>
        {CATEGORIES.map((item) => (
          <Button
            key={item.key}
            type="primary"
            className={`${category.toLowerCase() === item.title.toLowerCase() && "btn-active"}`}
            onClick={() => setCategory(item.title)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <div className="scroll-arrow right-arrow" onClick={scrollRight}>
        <CaretRightOutlined />
      </div>
    </StyledButtonsWrapper>
  );
};

export default NewsCategories;