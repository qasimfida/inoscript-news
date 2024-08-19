import { Card } from "antd";
import styled from "styled-components";

export const GridContainer = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 0;
  color: #2c343e;
  fill: #2c343e;
  line-height: 53px;
  text-transform: capitalize;
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 43px;
  }
  h2 {
    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 28px;
      font-weight: 500;
    }
  }
`;
export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;
export const StyledCard = styled(Card)`
  width: 100%;
  height: 300px;
  padding-top: 7rem;
  margin-top: 16px;
`;