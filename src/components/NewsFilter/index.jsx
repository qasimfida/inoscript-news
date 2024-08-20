import React from "react";
import { StyledFilterHeaderWrapper, StyledSelect } from "./styles";
import { SORT_OPTIONS, SOURCES } from "../../constants";
import { useNews } from "../../contexts/News";

const NewsFilter = () => {
  const { setCategory, setsource, source, category } = useNews()

  const handleApiChange = (value) => {
    setsource(value);
  };
  const handleTypeChange = (value) => {
    setCategory(value);
  };

  return (
    <StyledFilterHeaderWrapper className="flex-between">
      <h2>{category}  </h2>
      <div className="buttons-wrapper">
        <StyledSelect
          defaultValue={source}
          style={{ width: 150 }}
          onChange={handleApiChange}
          options={SOURCES}
        />
        <StyledSelect
          defaultValue="popular"
          style={{ width: 150 }}
          onChange={handleTypeChange}
          options={SORT_OPTIONS}
        />
      </div>
    </StyledFilterHeaderWrapper>
  );
};

export default NewsFilter;

