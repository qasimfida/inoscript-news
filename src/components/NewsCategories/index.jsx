import React, { useRef } from "react";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNews } from "../../contexts/News";
import { StyledButtonsWrapper } from "./styles";
import { CATEGORIES } from "../../constants";

const NewsCategories = () => {
  const { filterButtonValue, setFilterButtonValue } = useNews()
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
            onClick={() => setFilterButtonValue(item.title)}
            style={{
              backgroundColor:
                filterButtonValue.toLowerCase() === item.title.toLowerCase()
                  ? "#ffc864"
                  : "#fff",
              borderColor:
                filterButtonValue.toLowerCase() === item.title.toLowerCase()
                  ? "#ffc864"
                  : "#00000030",
              color:
                filterButtonValue.toLowerCase() === item.title.toLowerCase()
                  ? "#000"
                  : "#000",
            }}
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