import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const Resultado = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;

  h2 {
    padding-top: 5px;
    color: var(--primaria-dark);
  }

  @media (max-width: 768px) {
    padding: 0 5%;
  }
`;

export const Linha = styled.hr`
  width: 100%;
  border: 1px solid var(--primaria-dark);
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  margin-bottom: 30px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  align-self: start;
  min-width: 280px;
  max-width: 100%;
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
  flex-wrap: wrap; /* para mobile */
`;

export const Label = styled.label`
  font-size: 18px;
  color: #262626;
  font-weight: 500;
  position: relative;
  text-align: left;
  min-width: 250px;
  display: inline-flex;
  align-items: center;
  gap: 5px;

  sup {
    color: var(--azul);
  }

  .tooltiptext {
    visibility: hidden;
    width: 220px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px;
    position: absolute;
    z-index: 10;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  :hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 480px) {
    min-width: auto;
    font-size: 12px;
    text-align: left;
  }
`;

export const Value = styled.div`
  text-align: right;
  min-width: 80px;
  flex: 1 1 auto;

  @media (max-width: 480px) {
    width: 100%;
    text-align: left;
    font-size: 14px;
  }
`;

export const Canvas = styled.div`
  width: 100%;
  max-width: 1100px;
  height: auto;
  background-color: #909090;

  canvas {
    width: 100% !important;
    height: auto !important;
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
  display: flex;
  justify-content: flex-end;

  button {
    width: 150px;
    height: 40px;
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

    @media (max-width: 768px) {
      width: 120px;
      font-size: 13px;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
