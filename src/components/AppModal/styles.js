import { Modal } from "antd";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  width: 70% !important;
  .ant-modal-body {
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    width: 90% !important;
  }
`;
export const StyledContent = styled.div`
  .title-link {
    color: #000;
    h2 {
      font-size: 20px;
      font-weight: 600;
    }
  }
  img {
    display: flex;
    width: 80% !important;
    margin: 0 auto;
    text-align: center;
    padding: 1rem 0 2rem 0;
    @media (max-width: 600px) {
      width: 100% !important;
    }
  }
`;