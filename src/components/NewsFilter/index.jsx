import React from "react";
import { StyledFilterHeaderWrapper, StyledSelect } from "./styles";
import { SORT_OPTIONS, SOURCES } from "../../constants";
import { useNews } from "../../contexts/News";

const NewsFilter = ({ filterButtonValue }) => {
  const { setFilterButtonValue, setApiName, apiName } = useNews()

  const handleApiChange = (value) => {
    setApiName(value);
  };
  const handleTypeChange = (value) => {
    setFilterButtonValue(value);
  };

  return (
    <StyledFilterHeaderWrapper className="flex-between">
      <h2>{filterButtonValue}</h2>
      <div className="buttons-wrapper">
        <StyledSelect
          defaultValue={apiName}
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

