import { Select } from "antd";
import styled from "styled-components";

export const StyledFilterHeaderWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
  h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 0;
    color: #2c343e;
    fill: #2c343e;
    line-height: 53px;
    text-transform: uppercase;
    
    @media (max-width: 768px) {
      font-size: 28px;
      line-height: 43px;
    }
  }
  .buttons-wrapper {
    display: flex;
    gap: 12px;
  }
`;
export const StyledSelect = styled(Select)`
  height: 44px;
  .ant-select-selector {
    border-color: 00000030 !important;
  }
  .ant-select-selection-item {
    font-weight: 600;
  }
`;
