import { Tabs } from "antd";
import styled from "styled-components";

export const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    &::before {
      display: none !important;
    }
  }
  .ant-tabs-nav-wrap {
    display: flex;
    justify-content: center;
    margin: 2rem 0 1rem 0;
    .ant-tabs-nav-list {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 1rem;
      @media (max-width: 420px) {
        gap: 4px;
      }
    }
  }

  .ant-tabs-tab {
    background: #fff !important;
    border: none !important;
    text-transform: uppercase;
    .ant-tabs-tab-btn {
      font-size: 16px;
      font-weight: 600;
      color: #0000009e !important;
      @media (max-width: 420px) {
        font-size: 10px;
      }
    }
  }
  .ant-tabs-tab.ant-tabs-tab-active {
    color: #000;
    border-bottom: 2px solid #2d343e !important;
    .ant-tabs-tab-btn {
      color: #000 !important;
    }
  }
`;
