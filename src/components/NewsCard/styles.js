import { Card } from "antd";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  .ant-card {
    width: 100%;
  }
  .ant-card-cover {
    max-height: 200px;
    overflow: hidden;
  }
  .source {
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: 600;
    color: #2c343e;
  }
`;

export const EllipsisText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5em;
  line-height: 1.5em;
`;
export const StyledImage = styled.img``;
