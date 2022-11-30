import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .ant-message-notice-content {
    background: red;
  }
  .ant-message-custom-content {
  }
  .ant-message-success {
    background: red;
  }
`;
export const Painel = styled.div`
  width: 750px;
  height: 100%;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 130px;
  background-color: white;
`;
export const Title = styled.h2`
  color: #828282;
  text-align: center;
  margin: 10px 0;
`;
export const TopInputs = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
`;
export const Item = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Label = styled.label`
  font-size: 15px;
  color: #828282;
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
export const BottomInputs = styled.div`
  width: 343px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: auto auto;
  padding: 10px;
`;
export const ButtonCalc = styled.div`
  width: 100%;
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
