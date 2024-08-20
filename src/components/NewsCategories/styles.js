import styled from "styled-components";

export const StyledButtonsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 1.5rem;
  width: 100%;

  .scrollable-buttons {
    width: 100%;
    display: flex;
    gap: 8px;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .scroll-arrow {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    padding: 0 0 0 8px;
    font-size: 24px;
    color: #ccc;
    cursor: pointer;
    @media (max-width: 1300px) {
      display: flex;
    }
  }
  .right-arrow {
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(270deg, #fff 0, hsla(0, 0%, 100%, 0));
  }
  .left-arrow {
    left: -10px;
    top: 0;
    right: auto;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(90deg, #fff 0, hsla(0, 0%, 100%, 0));
  }

  button {
    border: 1px solid #00000030;
    box-shadow: none;
    transition: background-color 0.3s, color 0.3s;
    height: 44px;
    padding: 0 16px;
    font-weight: 600;
    background: #fff;
    border-color: #2c343e;
    color: #000;
    &.btn-active {
      background: #2c343e !important;
      border-color: #2c343e !important;
      color: white !important;
    }
  }

  :where(.css-dev-only-do-not-override-kghr11).ant-btn-primary:not(
      :disabled
    ):hover {
    background: #2c343e !important;
    border-color: #2c343e !important;
    color: white !important;
  }
`;
