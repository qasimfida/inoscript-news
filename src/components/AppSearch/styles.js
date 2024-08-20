import styled from "styled-components";
import { Input } from "antd";

const { Search } = Input;

export const StyledSearch = styled(Search)`
  input {
    padding: 0 12px;
    height: 48px;
    box-sizing: content-box;
    &::placeholder {
      color: #0000009e;
      font-size: 18px;
      font-weight: 400;
    }
    @media (max-width: 768px) {
      padding: 12px;
      font-size: 16px;
    }
  }
  .ant-input-group-addon {
    button {
      padding: 0 10px;
      box-sizing: content-box;
      height: 46px !important;
    }
  }
`;

export const SearchWrapper = styled.div`
  width: ${(props) => (props.isHome ? "100%" : "50%")};
`;
