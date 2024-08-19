import styled from "styled-components";

export const StyledFooterWrapper = styled.div`
  background: #000;
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    @media (max-width: 420px) {
      justify-content: center;
    }
  }
  p {
    text-align: center;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    line-height: 30px;
    margin: 0;
    @media (max-width: 420px) {
      font-size: 10px;
      line-height: 18px;
    }
  }
`;

export const StyledLogo = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 26px;
  a {
    color: #fff;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 420px) {
    display: none;
  }
`;
export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 420px) {
    display: none;
  }
`;
export const StyledLink = styled.li`
  a {
    color: #fff;
  }
  .link-1 {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
