import React from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
  background-color: var(--primaria-dark);
`;
export interface BannerProps {}

export default function TopBar() {
  return (
    <TopBarContainer>
      <p>
        ETEUFERSA - ESTAÇÃO DE TRATAMENTO DE ESGOTO UNIVERSIDADE FEDERAL RURAL
        DO SEMI-ÁRIDO
      </p>
    </TopBarContainer>
  );
}
