import styled from "styled-components";
import { Input } from "antd";

const { Search } = Input;

export const StyledSearch = styled(Search)`
  input {
    padding: 15px;
    &::placeholder {
      color: #0000009e;
      font-size: 18px;
      font-weight: 500;
      @media (max-width: 768px) {
        font-size: 14px;
        font-weight: 500;
      }
    }
    @media (max-width: 768px) {
      padding: 8px;
      font-size: 16px;
    }
  }
  .ant-input-group-addon {
    button {
      padding: 10px;
      box-sizing: content-box;
      height: 52px !important;
      @media (max-width: 768px) {
        height: 41px !important;
        padding: 2px;
      }
    }
  }
`;

export const SearchWrapper = styled.div`
  width: ${(props) => (props.isHome ? "100%" : "50%")};
`;
