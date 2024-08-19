import { Card } from "antd";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .ant-card-cover {
    max-height: 200px;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
  }

  .source {
    font-size: 12px;
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    background: #2c343e;
    padding: 0.3rem;
    width: fit-content;
    border-radius: 6px;
  }

  .ant-card-body {
    padding: 1rem;
  }
`;

export const EllipsisText = styled.div`
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 6em;
    line-height: 1.5em;
    font-size: 14px;
    color: #4a4a4a;
    margin-top: 0.5rem;
    font-weight: 400;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 150px;
  transition: transform 0.3s ease;
  object-fit: cover;

  ${StyledCard}:hover & {
    transform: scale(1.1);
  }
`;

