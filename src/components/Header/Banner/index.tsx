import React from "react";
import styled from "styled-components";
import BannerImg from "../BannerImg";
import BannerMessage from "../BannerMessage";
import logo from "../../../assets/images/logo.png";

const BannerContainer = styled.div`
  width: 100%;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 24px;
  }
`;

export interface BannerProps {
  imageSrc?: boolean;
  title?: boolean;
  topBar?: boolean;
}

const Banner: React.FC<BannerProps> = (props) => {
  return (
    <BannerContainer>
      {props.imageSrc && <BannerImg src={logo} alt="Logo do ETEUFERSA" />}
      {props.title && <BannerMessage />}
    </BannerContainer>
  );
};

export default Banner;
