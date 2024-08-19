import styled from "styled-components";
import worldBanner from "../../assets/banner-image.jpg";
import { Link } from "react-router-dom";

export const StyledHeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.isHome ? "500px" : "80px")};
  overflow: hidden;
  background: ${(props) => (props.isHome ? "transparent" : "#fff")};
  border-bottom: ${(props) => (!props.isHome ? "1px solid #0000002b" : "none")};

  &::before {
    content: "${(props) => (props.isHome ? "" : "none")}";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${(props) =>
      props.isHome ? `url(${worldBanner})` : "none"};
    background-position: center;
    background-size: cover;
    // background-repeat: no-repeat;
    z-index: -1;
  }

  @media (max-width: 500px) {
    height: ${(props) => (props.isHome ? "350px" : "80px")};
  }
`;
export const StyledLogo = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 26px;
  a {
    color: ${(props) => (props.isHome ? `#fff` : "#000")};
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const StyledNav = styled.div`
  padding: 12px 0;
  @media (max-width: 768px) {
    padding: 18px 0;
  }
`;
export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;
  font-size: 16px;
  font-weight: 600;
`;
export const StyledLink = styled.li`
  a {
    color: ${(props) => (props.isHome ? "#fff" : "#000")};
  }
  .link-1 {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const SearchWrapper = styled.div`
  width: 45%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 1600px) {
    width: 55%;
  }
  @media (max-width: 1300px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 90%;
    height: 300px;
  }
`;
export const MainTitle = styled.h1`
  width: 100%;
  font-size: 48px;
  color: #fff;
  font-weight: 500;
  line-height: 50px;
  margin-bottom: 1.5rem;
  text-align: center;
  @media (max-width: 1300px) {
    font-size: 38px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 30px;
  }
  @media (max-width: 500px) {
    font-size: 26px;
    line-height: 26px;
  }
`;

export const ActionButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const StyledButton = styled(Link)`
  padding: 1rem;
  outline: 0;
  background: #fff;
  color: #2d343e;
  border: none;
  border-radius: 8px;
`;
