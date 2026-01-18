import React from "react";
import styled from "styled-components";
import TopBar from "../TopBar";
import Banner, { BannerProps } from "../Banner";
import Retangle from "../../../assets/images/Rectangle.png";

const MainHeader = styled.header`
  width: 100%;
  height: 382px;

  background-image: url(${Retangle});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media (max-width: 768px) {
    min-height: unset;
    height: auto;
    padding-bottom: 152px;
    background-size: cover;
    margin-bottom: -60px;
  }
`;

const Header: React.FC<BannerProps> = (props) => {
  return (
    <MainHeader>
      {props.topBar && <TopBar />}
      <Banner {...props} />
    </MainHeader>
  );
};

export default Header;
