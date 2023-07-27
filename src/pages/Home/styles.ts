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
  width: 900px;
  height: 100%;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
  background-color: white;
`;
export const Title = styled.h2`
  color: #828282;
  text-align: center;
  margin: 10px 0;
`;
export const TopInputs = styled.div`
  display: grid;
  grid-gap: 20px 5px;
  grid-template-columns: auto auto auto auto auto;
  padding: 10px;
`;

export const InputsDown = styled.div`
  display: grid;
  grid-gap: 20px 5px;
  grid-template-columns: auto auto auto;
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
    left: 100%;
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
  margin-top: 30px;
  a {
    display: block;
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
    transition: 1s;
    transition-property: all;
  }
`;
export const CalcFacultativa = styled.div`
  width: 400px;
  display: flex;
  margin-top: 20px;
  h2 {
    margin-left: 15px;
    font-size: 18px;
    color: #828282;
  }
  sup {
    right: -330px;
  }
`

export const CalcMaturacao = styled.div`
  display: flex;
  margin-top: 20px;

  h2 {
    margin-left: 15px;
    font-size: 18px;
    color: #828282;
  }
`

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;

  ::before {
    position: absolute;
    content: "";
    height: 28px;
    width: 28px;
    left: 1px;
    bottom: 0px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  border-radius: 34px;
  ::before {
    border-radius: 50%;
  }
  
`
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
    background-color: #2196F3;
  }

  input:focus + ${Slider} {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + ${Slider}:before {
    -webkit-transform: translateX(25px);
    -ms-transform: translateX(26px);
    transform: translateX(20px);
  }
`
