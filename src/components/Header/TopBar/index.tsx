import React from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background-color: var(--primaria-dark);
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 1.4;
  }
`;

export default function TopBar() {
  return (
    <TopBarContainer>
      ETEUFERSA - ESTAÇÃO DE TRATAMENTO DE ESGOTO - UFERSA
    </TopBarContainer>
  );
}
