import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const FooterData = styled.div`
  color: var(--branco);
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Content = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: auto auto auto;
    column-gap: 100px;
    margin-left: 40px;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 16px;
  color: var(--branco);

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Lista = styled.ul`
  list-style: none;
  font-size: 1.2rem;
  padding: 0;
  margin: 0;

  li {
    line-height: 1.8;
  }
`;

const Icon = styled.span`
  font-size: 1.6rem;
  color: var(--branco);
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const Email = styled.a`
  color: var(--branco);
  text-decoration: none;
  word-break: break-word;
`;

const DireitosWrapper = styled.div`
  width: 100%;
  background: var(--black);
`;

const Direitos = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    font-size: 0.8rem;
    text-align: center;
    color: var(--branco);
  }
`;

const ItemComIcone = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    justify-content: start;
  }
`;

export default function FooterContent() {
  return (
    <>
      <Content>
        <Info>
          <FooterData>
            <Title>Apoio</Title>
            <Lista>
              <li>UFERSA</li>
              <br />
            </Lista>
          </FooterData>
          <FooterData>
            <Title>Desenvolvedores</Title>
            <Lista>
              <li>Bruno Wellington da Silva Lima</li>
              <li>Fernando Dutra Ribeiro</li>
              <li>Alisson Gadelha de Medeiros</li>
              <li>Maria Josicleide Felipe Guedes</li>
              <br />
            </Lista>
          </FooterData>
          <FooterData>
            <Title>Informações</Title>
            <Lista>
              <ItemComIcone>
                <Icon>
                  <GoLocation />
                </Icon>
                Pau dos Ferros - RN
              </ItemComIcone>

              <ItemComIcone>
                <Icon>
                  <FiMail />
                </Icon>
                <Email href="mailto:faceu.ufersa@gmail.com">
                  faceu.ufersa@gmail.com
                </Email>
              </ItemComIcone>
            </Lista>
          </FooterData>
        </Info>
      </Content>
      <DireitosWrapper>
        <Direitos>
          <p>© Copyright 2022 - Todos os direitos reservados</p>
        </Direitos>
      </DireitosWrapper>
    </>
  );
}
