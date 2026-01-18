import styled from "styled-components";

/* ================= PAGE ================= */
export const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

/* ================= RESULTADO HEADER ================= */
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

/* ================= CONTAINER DE CARDS ================= */
export const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* ⬅ espaçamento entre cards */
`;

/* ================= CARD ================= */
export const Card = styled.div`
  flex: 1 1 300px; /* min width = 300px, cresce para caber */
  max-width: 600px; /* não fica maior que 600px */
  background: #fff;
  border-radius: 8px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    flex: 1 1 45%; /* tablet: 2 cards por linha */
  }

  @media (max-width: 768px) {
    flex: 1 1 100%; /* mobile: 1 card por linha */
  }
`;

/* ================= TITULO DO CARD ================= */
export const TitleCard = styled.h2`
  color: var(--primaria);
  margin-bottom: 20px;
  font-weight: bold;
`;

/* ================= ITEM ================= */
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid #828282;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #262626;
  font-weight: 500;
  position: relative;
  text-align: left;
  min-width: 280px; /* largura mínima para alinhar com os outros cards */
  display: inline-flex;
  align-items: center;
  gap: 5px;

  sup,
  svg {
    color: #009be5; /* ícone azul */
  }

  .tooltiptext {
    visibility: hidden;
    width: 220px;
    background-color: #009be5;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px;
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 10;
  }

  :hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
  @media (max-width: 480px) {
    Label {
      min-width: auto;
      font-size: 12px;
    }
  }
`;

/* ================= VALUE ================= */
export const Value = styled.p`
  text-align: right;
  min-width: 80px;
  flex: 1 1 auto;

  @media (max-width: 480px) {
    width: 100%;
    text-align: left;
    margin-top: 5px;
    font-size: 14px;
  }
`;

/* ================= CANVAS ================= */
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

/* ================= GRÁFICO ================= */
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

/* ================= BOTÃO PDF ================= */
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
