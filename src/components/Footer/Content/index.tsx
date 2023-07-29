import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const FooterData = styled.div`
  width: 100%;
  margin-bottom: 10px;
  height: 100%;
  text-align: center;
  color: var(--branco);
  padding: 10px 0;

  @media (min-width: 768px) {
    text-align: left;
    width: 33%;
  }
`;
const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${FooterData} {
    border-bottom: 1px solid var(--branco);
  }

  @media (min-width: 768px) {
    margin-top: 30px;
    ${FooterData} {
      border: none;
    }
  }
`;

const Info = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 25px;
  color: var(--branco);
`;

const Lista = styled.ul`
  list-style: none;
  font-size: 1.4rem;
  width: 350px;
  li {
    line-height: 1.6;
  }
`;

const Icon = styled.span`
  font-size: 1.6rem;
  color: var(--branco);
  margin-right: 10px;
`;

const Email = styled.a`
  color: var(--branco);
  text-decoration: none;
  :hover {
    color: var(--cinza);
  }
`;

const Direitos = styled.div`
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: var(--black);
  color: var(--branco);
  font-size: 1.2rem;
`;

export default function FooterContent() {
  return (
    <Content>
      <Info>
        <FooterData>
          <Title>Apoio</Title>
          <Lista>
            <li>UFERSA</li>
          </Lista>
        </FooterData>
        <FooterData>
          <Title>Desenvolvedores</Title>
          <Lista>
            <li>Bruno Wellington da Silva Lima</li>
            <li>Fernando Dutra Ribeiro</li>
            <li>Alisson Gadelha de Medeiros</li>
            <li>Maria Josicleide Felipe Guedes</li>
          </Lista>
        </FooterData>
        <FooterData>
          <Title>Informações</Title>
          <Lista>
            <li>
              <Icon>
                <GoLocation />
              </Icon>
              Pau dos Ferros - RN
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "4px",
              }}
            >
              <Icon>
                <FiMail />
              </Icon>
              <Email style={{ paddingBottom: "4px" }}>faceu.ufersa@gmail.com</Email>
            </li>
          </Lista>
        </FooterData>
      </Info>
      <Direitos>
        <p>© Copyright 2022 - Todos os direitos reservados</p>
      </Direitos>
    </Content>
  );
}
