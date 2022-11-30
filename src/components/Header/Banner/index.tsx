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
      {props.title && <BannerMessage {...props} />}
    </BannerContainer>
  );
};

export default Banner;
