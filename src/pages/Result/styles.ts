import styled from "styled-components";

export const Resultado = styled.div`
  width: 100%;
  padding: 0 9.8%;
  display: grid;
  grid-template-columns: 4fr 1.5fr 4fr;
  align-items: center;
  text-align: center;
  transition: 1s;
  transition-property: all;
  margin-bottom: 20px;
  h2 {
    padding-top: 5px;
    color: var(--primaria-dark);
  }
`

export const Linha = styled.hr`
  width: 100%;
  border: 1px solid var(--primaria-dark);
`

export const Card = styled.div`
  width: 70%;
  height: 100%;
  margin: 30px 0;
  background: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${Card}:nth-child(3) {
    width: 550px;
  }
`;
export const Value = styled.p`
  text-align: right;
`;

export const Container = styled.div`
  width: 63vw;
  padding: 10px;
  display: flex;
  margin-bottom: 30px;
  align-items: start;
  justify-content: space-around;

  ${Card} {
    width: 400px;
    margin: 0;
    ${Value} {
      width: 43%;
    }
  }
`;

export const TitleCard = styled.h2`
  color: var(--primaria);
  margin-bottom: 20px;
  font-weight: bold;
`;

export const Item = styled.div`
  width: 100%;
  padding-bottom: 5px;
  margin-bottom: 10px;
  line-height: 18px;
  font-size: 16px;
  border-bottom: 1px solid #828282;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-bottom: 0;
  }
`;

export const Canvas = styled.div`
  width: 1100px;
  height: 438px;
  background-color: #909090;
`;

export const Description = styled.p`
  font-weight: 500;
  max-width: 70%;
  cursor: help;
  position: relative;
  display: inline-block;

  sup {
    color: var(--azul);
  }

  .tooltiptext {
    visibility: hidden;
    min-width: 200px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 10%;
    margin-left: -105px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  :hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

export const GraficContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 10px;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PDFButton = styled.div`
  width: 100%;
  margin: 20px 0;

  button {
    width: 150px;
    height: 40px;
    margin-left: 76%;
    margin-right: 0;
    padding: 10px;
    text-align: center;
    border: none;
    border-radius: 8px;
    background-color: var(--primaria);
    outline: none;
    font-size: 15px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;
