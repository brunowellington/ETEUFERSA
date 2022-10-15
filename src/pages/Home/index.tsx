import React, { useState } from "react";
import calc from '../../utils/calc';
import PageTemplate from "../Template";
import styled from "styled-components";
import Input from '../../components/Input';
import Result from '../Result';
import 'antd/dist/antd.css';
import { message } from 'antd';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .ant-message-notice-content{
        background: red;
    } 
    .ant-message-custom-content{

    } 
    .ant-message-success {
        background: red;

    }
`
const Painel = styled.div`
    width: 750px;
    height: 100%;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 130px;
    background-color: white;
`
const Title = styled.h2`
    color: #828282;
    text-align: center;
    margin: 10px 0;
`
const TopInputs = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: auto auto auto auto;
    padding: 10px;
`
const Item = styled.div`
    display: flex;
    height: 60px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const Label = styled.label`
    font-size: 15px;
    color: #828282;
    position: relative;
    display: inline-block;

    sup{
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
`
const BottomInputs = styled.div`
    width: 343px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: auto auto;
    padding: 10px;
`
const ButtonCalc = styled.div`
    width: 100%;
    button{
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
    
`
function Home(){
    const [populacao, setPopulacao] = useState("");
    const [vazaoAfluente, setvazaoAfluente] = useState("");
    const [DBOAfluente, setDBOAfluente] = useState("");
    const [temperatura, setTemperatura] = useState("");
    const [taxaVolumetrica, setTaxaVolumetrica] = useState("");
    const [taxaAcumulo, setTaxaAcumulo] = useState("");
    const [quantidadeLagoas, setQuantidadeLagoas] = useState("");
    const [proporcao, setProporcao] = useState("");
    const [k, setK] = useState("");
    const [dqo, setDqo] = useState("");
    const [hAnaerobia, setHAnaerobia] = useState("");
    const [hFacultativa, setHFacultativa] = useState("");

    const [populacao_Calculated, setPopulacaoCalculated] = useState("");
    const [vazaoAfluente_Calculated, setvazaoAfluenteCalculated] = useState("");
    const [DBOAfluente_Calculated, setDBOAfluenteCalculated] = useState("");
    const [temperatura_Calculated, setTemperaturaCalculated] = useState("");
    const [taxaVolumetrica_Calculated, setTaxaVolumetricaCalculated] = useState("");
    const [taxaAcumulo_Calculated, setTaxaAcumuloCalculated] = useState("");
    const [quantidadeLagoas_Calculated, setQuantidadeLagoasCalculated] = useState("");
    const [proporcao_Calculated, setProporcaoCalculated] = useState("");
    const [k_Calculated, setKCalculated] = useState("");
    const [dqo_Calculated, setDqoCalculated] = useState("");
    const [hAnaerobia_Calculated, setHAnaerobiaCalculated] = useState("");
    const [hFacultativa_Calculated, setHFacultativaCalculated] = useState("");
    const [calculated, setCalculated] = useState(false);
    let [vet1, setVet1] = useState([Number()])
    let [vet2, setVet2] = useState([Number()])
    
    // console.log(populacao);
    const success = () => {
        message.success({
            content: 'Dimensionamento efetuado com sucesso!',
            className: 'custom-class',
            style: {
                marginTop: '10vh',
            }
        });
    };

    const error = () => {
        message.error({
            content: 'Preencha os campos corretamente!',
            className: 'custom-class',
            style: {
                marginTop: '10vh',
            },
        });
    };

    function calcular(){
        if( Number(populacao) > 0 &&
            Number(vazaoAfluente) > 0 &&
            Number(DBOAfluente) > 0 &&
            Number(temperatura) > 0 &&
            Number(taxaVolumetrica) > 0 &&
            Number(taxaAcumulo) > 0 &&
            Number(quantidadeLagoas) > 0 &&
            Number(proporcao) >= 0 &&
            Number(hAnaerobia) > 0 &&
            Number(hFacultativa) > 0 ) {
            setCalculated(true);
                // const [vet1, vet2] = calc.dimensionamento(20.000, 3.000, 350, 23, 4.5, 1.8,  0.15, 0.04,2, 3);
                const [vet1, vet2] = calc.dimensionamento(Number(populacao), Number(vazaoAfluente), Number(DBOAfluente), Number(temperatura), Number(taxaVolumetrica), Number(taxaAcumulo), Number( quantidadeLagoas), Number(proporcao), Number(k), Number(hAnaerobia), Number(hFacultativa), Number(dqo));
                setPopulacaoCalculated(populacao);
                setvazaoAfluenteCalculated(vazaoAfluente);
                setDBOAfluenteCalculated(DBOAfluente);
                setTemperaturaCalculated(temperatura);
                setTaxaVolumetricaCalculated(taxaVolumetrica);
                setTaxaAcumuloCalculated(taxaAcumulo);
                setQuantidadeLagoasCalculated(quantidadeLagoas);
                setProporcaoCalculated(proporcao);
                setKCalculated(k);
                setDqoCalculated(dqo);
                setHAnaerobiaCalculated(hAnaerobia);
                setHFacultativaCalculated(hFacultativa);
                setVet1(vet1);
                setVet2(vet2);
                success();
        } else {
            error()
        }
    }
    
    return(
        <PageTemplate
            imageSrc={true}
            title={true}
            topBar={true}
        >
            <Container>
                <Painel>
                    <Title>Painel de entrada de dados</Title>
                    <TopInputs>
                        <Item>
                            <Label>
                                <span className="tooltiptext">População que será atendida pelo sistema</span>
                                População <sup>🛈</sup>
                            </Label>
                            <Input type="number" err={Number(populacao) > 0} func={setPopulacao} />
                        </Item>
                        <Item>
                            <Label>
                                <span className="tooltiptext">Quantidade da entrada de esgoto por dia</span>
                                Vazão afluente <sup>🛈</sup>
                            </Label>
                            <Input type="number" err={Number(vazaoAfluente) > 0} func={setvazaoAfluente} />
                        </Item>
                        <Item>
                            <Label>
                                <span className="tooltiptext">Quantidade de matéria orgânica expressa em massa</span>
                                DBO afluente <sup>🛈</sup>
                            </Label>
                            <Input type="number" err={Number(DBOAfluente) > 0} func={setDBOAfluente} />
                        </Item>
                        <Item>
                            <Label>
                                <span className="tooltiptext">Temperatura da lagoa</span>
                                Temperatura °C <sup>🛈</sup>
                            </Label>
                            <Input type="number" err={Number(temperatura) > 0} func={setTemperatura} />
                        </Item>
                        <Item>
                            <Label>
                                <span className="tooltiptext">Volume da lagoa anaeróbia para a conversão de carga de DBO aplicada</span>
                                Taxa volumétrica <sup>🛈</sup>
                            </Label>
                            <Input type="number" err={Number(taxaVolumetrica) > 0} func={setTaxaVolumetrica} />
                        </Item>
                        <Item>
                            <Label>
                                <span className="tooltiptext">Acúmulo de lodo na lagoa anaeróbia</span>
                                Taxa de acúmulo <sup>🛈</sup>
                            </Label>
                            <Input type="number" err={Number(taxaAcumulo) > 0} func={setTaxaAcumulo} />
                        </Item>
                        <Item>
                            <Label>
                                <span className="tooltiptext">Serve para lagoa anaeróbia e facultativa</span>
                                Quantidade de lagoas <sup>🛈</sup>
                            </Label>
                            <Input type="number" err={Number(quantidadeLagoas) > 0} func={setQuantidadeLagoas} />
                        </Item>
                        <Item>
                            <Label>
                                <span className="tooltiptext">Proporção adotada para manter o formato retangular das lagoas, EX: 2/1</span>
                                Proporção/1 <sup>🛈</sup>
                            </Label>
                            <Input type="number" err={Number(proporcao) > 0} func={setProporcao} />
                        </Item>
                        <Item>
                            <Label>
                                <span className="tooltiptext">Correção do coeficiente de remoção DBO</span>
                                K <sup>🛈</sup>
                            </Label>
                            <Input type="number" err={Number(k) > 0} func={setK} />
                        </Item>
                        <Item>
                            <Label>
                                <span className="tooltiptext">Para esgotos domésticos, a relação DQO/DBO varia em torno de 1,7 a 2,4.</span>
                                DQO <sup>🛈</sup>
                            </Label>
                            <Input type="number" err={Number(dqo) >= 0} func={setDqo} />
                        </Item>
                    </TopInputs>
                    <div style={{margin: '20px 0', color: "#828282", fontSize: "15px"}}>Adote profundidades (m) para as lagoas de estabilização! </div>
                    <BottomInputs>
                        <Item>
                            <Label>
                                <span className="tooltiptext">Recomendado entre 2,5 a 5,0 m</span>
                                Anaeróbia <sup>🛈</sup>
                            </Label>
                            <Input type="number" err={Number(hAnaerobia) > 0 ? true : false} func={setHAnaerobia} />
                        </Item>
                        <Item>
                            <Label>
                                <span className="tooltiptext">Recomendado entre 1,5 a 3,0 m</span>
                                Facultativa <sup>🛈</sup>
                            </Label>
                            <Input type="number" err={Number(hFacultativa) > 0 ? true : false}  func={setHFacultativa} />
                        </Item>
                    </BottomInputs>
                    <ButtonCalc>
                        <button onClick={calcular}>Dimensionar</button>
                    </ButtonCalc>
                </Painel>
                {calculated &&
                    <Result vet1={vet1} vet2={vet2} populacao={populacao_Calculated} vazao={vazaoAfluente_Calculated} DBOAfluente={DBOAfluente_Calculated} temperatura={temperatura_Calculated} taxaVolumetrica={taxaVolumetrica_Calculated} taxaAcumulo={taxaAcumulo_Calculated} quantidadeLagoas={quantidadeLagoas_Calculated} proporcao={proporcao_Calculated} k={k_Calculated} hAnaerobia={hAnaerobia_Calculated} hFacultativa={hFacultativa_Calculated} dqo={dqo_Calculated}/>
                }
            </Container>
        </PageTemplate>
    )
}

export default Home;