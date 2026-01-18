import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  color: var(--branco);

  @media (max-width: 768px) {
    font-size: 19px;
    padding: 0 10px;
    text-align: center;
  }
`;

const Description = styled.p`
  width: 450px;
  font-size: 20px;
  color: white;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    font-size: 14px;
    text-align: center;
    padding: 0 10px;
  }
`;

const Message: React.FC = () => {
  return (
    <Container>
      <Title>Seja bem-vindo ao ETEUFERSA!</Title>
      <Description>
        O pré-dimensionamento para uma estação de tratamento de esgoto,
        específica para o sistema australiano, nunca foi tão fácil!
      </Description>
    </Container>
  );
};

export default Message;
