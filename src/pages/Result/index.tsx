import { useRef, useState, useEffect } from "react";
// import React,{ useEffect, useRef } from "react";
import styled from "styled-components";
import jsPDF from 'jspdf';
// import logo from '../../assets/images/logo.png';
import Img1 from '../../assets/images/layout1.png'
import Img2 from '../../assets/images/layout2.png'
import Img3 from '../../assets/images/layout3.png'
import Img11x1 from '../../assets/images/layout11x1.png'
import Img21x1 from '../../assets/images/layout21x1.png'
import Img31x1 from '../../assets/images/layout31x1.png'

const Page = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Value = styled.p`
    width: 360px;
    text-align: right;
`
const Card = styled.div`
    width: 600px;
    height: 100%;
    background: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Container = styled.div`
    width: 63vw;
    padding: 10px;
    display: flex;
    margin-bottom: 30px;
    align-items: start;
    justify-content: space-around;

    ${Card}{
        width: 400px;
        ${Value}{
            width: 43%;
        }
    }
`

const TitleCard = styled.h2`
    color: var(--primaria);
    margin-bottom: 20px;
    font-weight: bold;
`

const Item = styled.div`
    width: 100%;
    padding-bottom: 5px;
    margin-bottom: 10px;
    line-height: 18px;
    font-size: 16px;
    border-bottom: 1px solid #828282;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        margin-bottom: 0;
    }
`

const Canvas = styled.div`
    width: 1100px;
    height: 440px;
    background-color: #909090;
`

const Description = styled.p`
    font-weight: 500;
    cursor: help;
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

const GraficContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    padding: 10px;
    border-radius: 8px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const PDFButton = styled.div`
    width: 100%;
    margin: 20px 0;

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
function Result(props: any) {
    const vet1 = props.vet1
    const vet2 = props.vet2
    const [image, setImage] = useState(null) as any;
    let l = props.quantidadeLagoas
    let list = []
    
    while (l > 0) {
        list.push(props.quantidadeLagoas)
        l--
    }

    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const img = new Image();
        
        if (props.proporcao === "1") {
            if (list.length === 1) {
                img.src = Img11x1;
            } else {
                if (list.length === 2) {
                    img.src = Img21x1;
                } else {
                    img.src = Img31x1;
                }
            }
            if (img !== null) {
                img.onload = () => setImage(img);
            }
        } else {
            if (list.length === 1) {
                img.src = Img1;
            } else {
                if (list.length === 2) {
                    img.src = Img2;
                } else {
                    img.src = Img3;
                }
            }
            if (img !== null) {
                img.onload = () => setImage(img);
            }
        }
    },[props.quantidadeLagoas, props.proporcao])

    useEffect(() => {
        if (image && canvas) {
            if (canvas.current != null) {
                const ctx = canvas.current.getContext("2d") as any;
                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, 1100, 440);
                ctx.drawImage(image, 0, 0, 1100, 440);
                if (props.proporcao === "1") {
                    if(list.length === 1) {
                        ctx.font = `14px Roboto`;
                        ctx.fillText(`${vet1[8]} m`, 230, 170);
                        ctx.fillText(`${vet1[7]} m`, 310, 195);
                        ctx.fillText(`${vet2[14]} m`, 760, 140);
                        ctx.fillText(`${vet2[13]} m`, 870, 224);
                        ctx.font='bold 18px Roboto';
                    
                    } else if (list.length === 2 ) {
                        ctx.font = `14px Roboto`;
                        ctx.fillText(`${vet1[8]} m`, 235, 130);
                        ctx.fillText(`${vet1[7]} m`, 310, 155);
                        ctx.fillText(`${vet1[8]} m`, 230, 330);
                        ctx.fillText(`${vet1[7]} m`, 310, 300);
                        ctx.font = `14px Roboto`;
                        ctx.fillText(`${vet2[14]} m`, 750, 65);
                        ctx.fillText(`${vet2[13]} m`, 870, 152);
                        ctx.fillText(`${vet2[14]} m`, 750, 395);
                        ctx.fillText(`${vet2[13]} m`, 870, 305);
                    } else {
                        ctx.font = `14px Roboto`;
                        ctx.fillText(`${vet1[8]} m`, 230, 82);
                        ctx.fillText(`${vet1[7]} m`, 310, 115);
                        ctx.fillText(`${vet1[8]} m`, 230, 267);
                        ctx.fillText(`${vet1[7]} m`, 310, 350);
                        ctx.font='bold 18px Roboto';
                        if (list.length > 9) {
                            ctx.fillText(`${list.length}`, 280, 334);
                        } else {
                            ctx.fillText(`${list.length}`, 285, 334);
                        }
                        ctx.font = `14px Roboto`;
                        ctx.fillText(`${vet2[14]} m`, 790, 20);
                        ctx.fillText(`${vet2[13]} m`, 870, 108);
                        ctx.fillText(`${vet2[14]} m`, 790, 267);
                        ctx.fillText(`${vet2[13]} m`, 870, 355);
                        ctx.font='bold 18px Roboto';
                        ctx.fillText(`${list.length}`, 826, 368);
                    }
                } else {
                    if(list.length === 1) {
                        ctx.font = `14px Roboto`;
                        ctx.fillText(`${vet1[8]} m`, 230, 170);
                        ctx.fillText(`${vet1[7]} m`, 350, 195);
                        ctx.fillText(`${vet2[14]} m`, 760, 140);
                        ctx.fillText(`${vet2[13]} m`, 945, 224);
                        ctx.font='bold 18px Roboto';
                    
                    } else if (list.length === 2 ) {
                        ctx.font = `14px Roboto`;
                        ctx.fillText(`${vet1[8]} m`, 235, 130);
                        ctx.fillText(`${vet1[7]} m`, 350, 155);
                        ctx.fillText(`${vet1[8]} m`, 230, 330);
                        ctx.fillText(`${vet1[7]} m`, 350, 300);
                        ctx.font = `14px Roboto`;
                        ctx.fillText(`${vet2[14]} m`, 750, 65);
                        ctx.fillText(`${vet2[13]} m`, 935, 152);
                        ctx.fillText(`${vet2[14]} m`, 750, 395);
                        ctx.fillText(`${vet2[13]} m`, 935, 305);
                    } else {
                        ctx.font = `14px Roboto`;
                        ctx.fillText(`${vet1[8]} m`, 185, 82);
                        ctx.fillText(`${vet1[7]} m`, 350, 115);
                        ctx.fillText(`${vet1[8]} m`, 185, 267);
                        ctx.fillText(`${vet1[7]} m`, 350, 350);
                        ctx.font='bold 18px Roboto';
                        ctx.fillText(`${list.length}`, 303, 321);
                        ctx.font = `14px Roboto`;
                        ctx.fillText(`${vet2[14]} m`, 790, 20);
                        ctx.fillText(`${vet2[13]} m`, 935, 108);
                        ctx.fillText(`${vet2[14]} m`, 790, 267);
                        ctx.fillText(`${vet2[13]} m`, 935, 355);
                        ctx.font='bold 18px Roboto';
                        ctx.fillText(`${list.length}`, 841, 354);
                    }
                }
            }
        }
        
    }, [image, canvas]);

    const jsPdfGenerator = () => {
        var doc = new jsPDF('p', 'pt');
        doc.setFont('courier');
        doc.setFontSize(10);
        doc.text('ESTAÇÃO  DE  TRATAMENTO  DE  ESGOTO  UNIVERSIDADE  FEDERAL RURAL DO', 80, 50, {align: 'justify'});
        doc.text('SEMI-ÁRIDO - UFERSA', 80, 63);
        doc.text('Este programa é destinado à realização do pré-dimensionamento para', 80, 80);
        doc.text('uma estação de tratamento de esgoto do tipo anaeróbia seguida por', 80, 93);
        doc.text('lagoa facultativa (sistema australiano)', 80, 106);

        doc.setLineWidth(0.5);
        doc.line(485, 115, 80, 115);
        
        doc.text('Dados de entrada', 80, 140);
        doc.text('Populacao: ' + `${props.populacao}`, 100, 160);
        doc.text('Vazão afluente: ' + `${props.vazao}`, 100, 173);
        doc.text('DBO afluente: ' + `${props.DBOAfluente}`, 100, 186);
        doc.text('Temperatura: ' + `${props.temperatura}`, 100, 199);
        doc.text('Taxa volumétrica: ' + `${props.taxaVolumetrica}`, 100, 212);
        doc.text('Taxa de acúmulo: ' + `${props.taxaAcumulo}`, 100, 225);
        doc.text('Quantidade de lagoas: ' + `${props.quantidadeLagoas}`, 100, 238);
        doc.text('Proporção/1: ' + `${props.proporcao}`, 100, 251);
        doc.text('K: ' + `${props.k}`, 100, 264);
        doc.text('Profundidade Anaeróbia: ' + `${props.hAnaerobia}`, 100, 277);
        doc.text('Profundidade Facultativa: ' + `${props.hFacultativa}`, 100, 290);
        if(vet1[9] >= 0) {
            doc.text('DQO fornecido: ' + `${props.dqo}`, 100, 303);
        }


        doc.text('Lagoa Anaeróbia', 80, 320);
        doc.text('Carga afluente de DBO = ' + `${vet1[0].toFixed(3)} kgDBO/m³.d`, 100, 343);
        doc.text('Volume resultante da lagoa anaeróbia = ' + `${vet1[1]} m³`, 100, 356);
        doc.text('Tempo de detenção = ' + `${(vet1[2] / 1000).toFixed(1)} dia`, 100, 369);
        doc.text('Área requerida = ' + `${(vet1[3] / 1000).toFixed(0)} m²`, 100, 382);
        doc.text('Acúmulo de lodo na lagoa anaeróbia = ' + `${vet1[4]} m³/ano`, 100, 395);
        doc.text('Expessura da camada de lodo em 1 ano = ' + `${vet1[5]}  cm/ano`, 100, 408);
        doc.text('Tempo para se atingir 1/3 da altura útil das lagoas = ' + `${(vet1[6]).toFixed(1)} ano(s)`, 100, 421);
        
        doc.text('Lagoa Facultativa', 80, 450);

        doc.text('Carga afluente à lagoa facultativa = ' + `${vet2[0]} kgDBO/d`, 100, 475);
        doc.text('Área requerida = ' + `${vet2[1].toFixed(1)} ha (${((Number(vet2[1].toFixed(1)))).toFixed(3)} m²)`, 100, 488);
        doc.text('Área individual para cada ladoa facultativa = ' + `${vet2[2].toFixed(1)} m²`, 100, 501);
        doc.text('volume resultante da lagoa facultativa = ' + `${(vet2[3] / 1000).toFixed(3)} m³`, 100, 514);
        doc.text('Tempo de detenção Resultante = ' + `${vet2[4].toFixed(2)} m³/ano`, 100, 527);
        doc.text('Correção para a temperatura de 23°C = ' + `${vet2[5]}  cm/ano`, 100, 540);
        doc.text('Estimativa da DBO solúvel efluente = ' + `${vet2[6].toFixed(0)} mg/l`, 100, 553);
        doc.text('Estimativa da DBO particulada efluente = ' + `${(vet2[7])} mgDBO`, 100, 566);
        doc.text('DBO total efluente = ' + `${vet2[8]} mg/l`, 100, 579);
        
        doc.text('Sistema Australiano', 80, 610);

        doc.text('Eficiência = ' + `${vet2[9]}%`, 100, 635);
        doc.text('Area útil total = ' + `${vet2[10]} ha`, 100, 648);
        doc.text('Area Total = ' + `${vet2[11]} ha`, 100, 661);
        doc.text('Area per capita = ' + `${vet2[12]} m²/hab`, 100, 674);
        
        if(vet1[9] >= 0) {
            let message = "";
            if(vet1[9] >= 0 && vet1[9] < 2.5 ) {
                message = "(Baixa) - A fração biodegradável é elevada."
            }else if(vet1[9] >= 2.5 && vet1[9] < 3.5) {
                message = "(Intermediária) - A fração biodegradável não é elevada."
            }else if(vet1[9] >= 3.5){
                message = "(Elevada) - A fração inerte (não biodegradável) é elevada."
            }

            doc.text('Relação DQO/DBO = ' + `${vet1[9]} ${message}`, 100, 687);
        }

        if (canvas.current != null) {
            doc.addPage();
            doc.text('ESTAÇÃO  DE  TRATAMENTO  DE  ESGOTO  UNIVERSIDADE  FEDERAL RURAL DO', 80, 50, {align: 'justify'});
            doc.text('SEMI-ÁRIDO - UFERSA', 80, 63);
            doc.text('Este programa é destinado à realização do pré-dimensionamento para', 80, 80);
            doc.text('uma estação de tratamento de esgoto do tipo anaeróbia seguida por', 80, 93);
            doc.text('lagoa facultativa (sistema australiano)', 80, 106);

            doc.setLineWidth(0.5);
            doc.line(485, 115, 80, 115);
            doc.text('Layout do Sistema Australiano', 80, 140);
            doc.addImage(canvas.current.toDataURL(), 'PNG', 15, 145, 580, 250);
        }
        doc.save('Relatório Analítico - ETEUFERSA.pdf');
    }

    return (
        <Page>
            <Container>
                <Card>
                    <TitleCard>Lagoa Anaeróbia</TitleCard>
                    <Item>
                        <Description>Carga afluente de DBO <sup>🛈</sup>
                            <span className="tooltiptext">Carga afluente de DBO</span>
                        </Description>
                        <Value>{vet1[0].toFixed(3)} kgDBO/m³.d</Value>
                    </Item>
                    <Item>
                        <Description>Volume <sup>🛈</sup>
                            <span className="tooltiptext">Volume resultante da lagoa anaeróbia</span>
                        </Description>
                        <Value>{vet1[1]} m³</Value>
                    </Item>
                    <Item>
                        <Description>Tempo <sup>🛈</sup>
                            <span className="tooltiptext">Tempo de detenção</span>
                        </Description>
                        <Value>{(vet1[2] / 1000).toFixed(1)} dia</Value>
                    </Item>
                    <Item>
                        <Description>Área <sup>🛈</sup>
                            <span className="tooltiptext">Área requerida</span>
                        </Description>
                        <Value>{(vet1[3] / 1000).toFixed(0)} m²</Value>
                    </Item>
                    <Item>
                        <Description>Acumulação anual <sup>🛈</sup>
                            <span className="tooltiptext">Acúmulo de lodo na lagoa anaeróbia</span>
                        </Description>
                        <Value>{vet1[4]} m³/ano</Value>
                    </Item>
                    <Item>
                        <Description>Expessura <sup>🛈</sup>
                            <span className="tooltiptext">Expessura da camada de lodo em 1 ano</span>
                        </Description>
                        <Value>{vet1[5]}  cm/ano</Value>
                    </Item>
                    <Item>
                        <Description>Tempo para se atingir 1/3 <sup>🛈</sup>
                            <span className="tooltiptext">Tempo para se atingir 1/3 da altura útil das lagoas</span>
                        </Description>
                        <Value>{(vet1[6]).toFixed(1)} anos</Value>
                    </Item>
                </Card>
                <Card> 
                    <TitleCard>Lagoa Facultativa</TitleCard>
                    <Item>
                        <Description>Carga afluente <sup>🛈</sup>
                            <span className="tooltiptext">Carga afluente à lagoa facultativa</span>
                        </Description>
                        <Value>{vet2[0]} kgDBO/d</Value>
                    </Item>
                    <Item>
                        <Description>Área <sup>🛈</sup>
                            <span className="tooltiptext">Área requerida</span>
                        </Description>
                        <Value>{vet2[1].toFixed(1)} ha ({((Number(vet2[1].toFixed(1)))).toFixed(3)} m²) </Value>
                    </Item>
                    <Item>
                        <Description>Àrea de cada lagoa <sup>🛈</sup>
                            <span className="tooltiptext">Área individual para cada ladoa facultativa</span>
                        </Description>
                        <Value>{vet2[2].toFixed(1)} m²</Value>
                    </Item>
                    <Item>
                        <Description>Volume <sup>🛈</sup>
                            <span className="tooltiptext">volume resultante da lagoa facultativa</span>
                        </Description>
                        <Value>{(vet2[3] / 1000).toFixed(3)} m³</Value>
                    </Item>
                    <Item>
                        <Description>Tempo <sup>🛈</sup>
                            <span className="tooltiptext">Tempo de detenção Resultante</span>
                        </Description>
                        <Value>{vet2[4].toFixed(2)} m³/ano</Value>
                    </Item>
                    <Item>
                        <Description>KT <sup>🛈</sup>
                            <span className="tooltiptext">Correção para a temperatura de 23°C</span>
                        </Description>
                        <Value>{vet2[5]}  cm/ano</Value>
                    </Item>
                    <Item>
                        <Description>S <sup>🛈</sup>
                            <span className="tooltiptext">Estimativa da DBO solúvel efluente</span>
                        </Description>
                        <Value>{vet2[6].toFixed(0)} mg/l</Value>
                    </Item>
                    <Item>
                        <Description>DBO<sub>5</sub> Particulada <sup>🛈</sup>
                            <span className="tooltiptext">Estimativa da DBO particulada efluente</span>
                        </Description>
                        <Value>{(vet2[7])} mgDBO<sub>5</sub>/l</Value>
                    </Item>
                    <Item>
                        <Description>DBO efluente <sup>🛈</sup>
                            <span className="tooltiptext">DBO total efluente</span>
                        </Description>
                        <Value>{vet2[8]} mg/l</Value>
                    </Item>
                </Card>
            </Container>
            <Card>
                <TitleCard>Sistema Australiano</TitleCard>
                <Item>
                    <Description>Eficiência <sup>🛈</sup>
                        <span className="tooltiptext">Eficiência total do distema de lagoa anaeróbia-lagoa facultativa na remoção da DBO</span>
                    </Description>
                    <Value>{vet2[9]}%</Value>
                </Item>
                <Item>
                    <Description>Area útil total <sup>🛈</sup>
                        <span className="tooltiptext">Lagoas anaeróbia + facultativa</span>
                    </Description>
                    <Value>{vet2[10]} ha</Value>
                </Item>
                <Item>
                    <Description>Area Total <sup>🛈</sup>
                        <span className="tooltiptext">25% a 33% superior a área útil requerida</span>
                    </Description>
                    <Value>{vet2[11]} ha</Value>
                </Item>
                <Item>
                    <Description>Area per capita <sup>🛈</sup>
                        <span className="tooltiptext">Área per capita</span>
                    </Description>
                    <Value>{vet2[12]} m²/hab </Value>
                </Item>
                {vet1[9] >= 0 && vet1[9] < 2.5 &&
                    <Item>
                        <Description>Relação DQO/DBO = {vet1[9]}  <sup>🛈</sup>
                            <span className="tooltiptext">Baixa - A fração biodegradável é elevada.</span>
                        </Description>
                        <Value>Indicação para tratamento biológico </Value>
                    </Item>
                }
                {vet1[9] >= 2.5 && vet1[9] < 3.5 &&
                    <Item>
                        <Description>Relação DQO/DBO = {vet1[9]} <sup>🛈</sup>
                            <span className="tooltiptext">Intermediária - A fração biodegradável não é elevada.</span>
                        </Description>
                        <Value style={{textAlign: 'justify'}}>Estudos de tratabilidade para verificar viabilidade do tratamento biológico. </Value>
                    </Item>
                }
                {vet1[9] >= 3.5 && 
                    <Item>
                        <Description>Relação DQO/DBO = {vet1[9]} <sup>🛈</sup>
                            <span className="tooltiptext">Elevada - A fração inerte (não biodegradável) é elevada.</span>
                        </Description>
                        <Value> Possível indicação para tratamento físico-químico</Value>
                    </Item>
                
                }
                
            </Card>
            <GraficContainer>
                {/* <canvas ref={canvas}></canvas> */}
                <TitleCard>Layout do sistema</TitleCard>
                <Canvas id="canvas">
                    <canvas width={1100} height={440} ref={canvas}></canvas>
                </Canvas>
                {/* <Grafic>
                    <Anaerobia>
                        {
                            list.map((e,index) => {
                                return (
                                    <Retangle style={{ width: `${vet1[8] * 3}px`,maxWidth: '170px', height: `${vet1[7] * 3}px`, minHeight: '35px', marginRight: "100px", fontSize: "10px" }}>
                                        <TTop>{vet1[8]}m</TTop>
                                        <TRight>{vet1[7]}m</TRight>
                                        <DescLagoa>Lag. Anaer. {index+1}</DescLagoa>
                                    </Retangle>
                                )
                            })
                        }
                    </Anaerobia>
                    <Facultativa>
                        {
                            list.map((e, index) => {
                                return (
                                    <Retangle style={{ width: `${vet2[14] * 2}px`, maxWidth: '400px', height: `${vet2[13] * 2}px`,  minHeight: '50px'}}>
                                        <TTop>{vet2[14]}m</TTop>
                                        <TRight style={{ lineHeight: `${vet2[13] / 3}px` }}>{vet2[13]}m</TRight>
                                        <DescLagoa>Lagoa Facult. {index+1}</DescLagoa>
                                    </Retangle>
                                )
                            })
                        }
                    </Facultativa>
                </Grafic> */}
            </GraficContainer>
            <PDFButton>
                <button onClick={jsPdfGenerator}>Gerar Relatório</button>
            </PDFButton>

        </Page>
    );
}

export default Result;