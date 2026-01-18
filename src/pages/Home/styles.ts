import styled from "styled-components";

/* ================= CONTAINER ================= */
export const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* ================= PAINEL ================= */
export const Painel = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
  background-color: white;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

/* ================= TITLE ================= */
export const Title = styled.h2`
  color: #000;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
`;

/* ================= GRIDS ================= */
export const TopInputs = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    input {
      font-size: 12px;
      padding: 6px;
    }

    label {
      font-size: 11px;
    }
  }
`;

export const InputsDown = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    input {
      font-size: 12px;
      padding: 6px;
    }

    label {
      font-size: 11px;
    }
  }
`;

export const BottomInputs = styled.div`
  width: 100%;
  max-width: 350px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    input {
      font-size: 12px;
      padding: 6px;
    }

    label {
      font-size: 11px;
    }
  }
`;

/* ================= ITEM ================= */
export const Item = styled.div`
  display: flex;
  min-height: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

/* ================= LABEL ================= */
export const Label = styled.label`
  font-size: 13px;
  color: #262626;
  font-weight: 500;
  position: relative;
  text-align: center;

  sup {
    color: var(--azul);
  }

  .tooltiptext {
    visibility: hidden;
    width: 218px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 6px;
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
`;

export const InfoText = styled.div`
  margin: 20px 0;
  padding: 10px;
  color: #000;
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  word-break: break-word;
`;

/* ================= BOTÃO ================= */
export const ButtonCalc = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  a {
    width: 180px;
    height: 44px;
    padding: 10px;
    text-align: center;
    border-radius: 8px;
    background-color: var(--primaria);
    font-size: 15px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

/* ================= TOGGLES ================= */
export const CalcFacultativa = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 0px;
  padding: 9px;

  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

// CalcMaturacao herda o mesmo estilo
export const CalcMaturacao = styled(CalcFacultativa)``;

/* ================= TOGGLE SWITCH ================= */
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  ::before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + ${Slider} {
    background-color: #2196f3;
  }

  input:checked + ${Slider}:before {
    transform: translateX(22px);
  }

  margin-right: 10px;
`;

export const AnaerobiaFacultativaWrapper = styled.div`
  display: flex;
  gap: 22px;
  margin-left: 31px;

  & > ${Item} {
    flex: 1 1 50%;
    min-width: 100px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    margin-left: 15;

    & > ${Item} {
      flex: 1 1 45%;
      min-width: 0;
    }
  }

  @media (max-width: 480px) {
    & > ${Item} {
      flex: 1 1 48%;
      min-width: 0;
    }

    input {
      font-size: 12px;
      padding: 6px;
    }

    label {
      font-size: 11px;
    }
  }
`;
