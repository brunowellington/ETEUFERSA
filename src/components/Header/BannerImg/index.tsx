import styled from "styled-components";

const BannerImg = styled.img`
  height: 180px;
  max-width: 100%;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 120px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    height: 90px;
  }
`;

export default BannerImg;
