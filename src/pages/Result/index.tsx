import { useRef, useState, useEffect } from "react";
import {
  Page,
  Value,
  Card,
  Container,
  TitleCard,
  Item,
  Canvas,
  Description,
  GraficContainer,
  PDFButton,
} from "./styles";
import { generatePDF } from "../../utils/generatePDF";
// import logo from '../../assets/images/logo.png';
import { LagoasBaseData } from "../../types/LagoasBaseData";
import * as calc from "../../utils/calc";
import { mappedImages } from "../../utils/images";
import { writeInCanvas } from "../../utils/writeInCanvas";

type ResultProps = {
  lagoasBaseData: LagoasBaseData;
};

function Result({ lagoasBaseData }: ResultProps) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { lagoaAnaerobia, lagoaFacultativa, sistemaAustraliano, lagoaMaturacao } = calc.dimensionamento(lagoasBaseData);
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new Image();

    const is1x1 = lagoasBaseData.proporcao === 1;
    const proporcao = is1x1 ? "proporcao1x1" : "proporcaonx1";
    const src = mappedImages[proporcao][lagoasBaseData.quantidadeLagoas];

    img.src = src;
    img.onload = () => setImage(img);
  }, [lagoasBaseData.quantidadeLagoas, lagoasBaseData.proporcao]);

  useEffect(() => {
    writeInCanvas({
      image,
      canvas: canvas.current,
      lagoaAnaerobia,
      lagoaFacultativa,
      lagoasBaseData,
    });
  }, [image, lagoaAnaerobia, lagoaFacultativa, lagoasBaseData]);

  const onClick = () =>
    generatePDF({
      lagoasBaseData,
      lagoaAnaerobia,
      lagoaFacultativa,
      sistemaAustraliano,
      canvas: canvas.current,
    });

  return (
    <Page>
      <Container>
        <Card>
          <TitleCard>Lagoa Anaeróbia</TitleCard>
          <Item>
            <Description>
              Carga afluente de DBO <sup>🛈</sup>
              <span className="tooltiptext">Carga afluente de DBO</span>
            </Description>
            <Value>{lagoaAnaerobia.cargaAnaerobia.toFixed(3)} kgDBO/m³.d</Value>
          </Item>
          <Item>
            <Description>
              Volume <sup>🛈</sup>
              <span className="tooltiptext">
                Volume resultante da lagoa anaeróbia
              </span>
            </Description>
            <Value>{lagoaAnaerobia.volume} m³</Value>
          </Item>
          <Item>
            <Description>
              Tempo <sup>🛈</sup>
              <span className="tooltiptext">Tempo de detenção</span>
            </Description>
            <Value>{(lagoaAnaerobia.tempo / 1000).toFixed(1)} dia</Value>
          </Item>
          <Item>
            <Description>
              Área <sup>🛈</sup>
              <span className="tooltiptext">Área requerida</span>
            </Description>
            <Value>{(lagoaAnaerobia.area / 1000).toFixed(0)} m²</Value>
          </Item>
          <Item>
            <Description>
              Acumulação anual <sup>🛈</sup>
              <span className="tooltiptext">
                Acúmulo de lodo na lagoa anaeróbia
              </span>
            </Description>
            <Value>{lagoaAnaerobia.acumulacao_anual} m³/ano</Value>
          </Item>
          <Item>
            <Description>
              Expessura <sup>🛈</sup>
              <span className="tooltiptext">
                Expessura da camada de lodo em 1 ano
              </span>
            </Description>
            <Value>{lagoaAnaerobia.expessura} cm/ano</Value>
          </Item>
          <Item>
            <Description>
              Tempo para se atingir 1/3 <sup>🛈</sup>
              <span className="tooltiptext">
                Tempo para se atingir 1/3 da altura útil das lagoas
              </span>
            </Description>
            <Value>{lagoaAnaerobia.tempo1terco.toFixed(1)} anos</Value>
          </Item>
        </Card>
        <Card>
          <TitleCard>Lagoa Facultativa</TitleCard>
          <Item>
            <Description>
              Carga afluente <sup>🛈</sup>
              <span className="tooltiptext">
                Carga afluente à lagoa facultativa
              </span>
            </Description>
            <Value>{lagoaFacultativa.CargaFacultativa} kgDBO/d</Value>
          </Item>
          <Item>
            <Description>
              Área <sup>🛈</sup>
              <span className="tooltiptext">Área requerida</span>
            </Description>
            <Value>
              {lagoaFacultativa.areaTotalFacultativa.toFixed(1)} ha (
              {Number(lagoaFacultativa.areaTotalFacultativa.toFixed(1)).toFixed(
                3
              )}{" "}
              m²){" "}
            </Value>
          </Item>
          <Item>
            <Description>
              Àrea de cada lagoa <sup>🛈</sup>
              <span className="tooltiptext">
                Área individual para cada ladoa facultativa
              </span>
            </Description>
            <Value>
              {lagoaFacultativa.areaLagoaFacultativaIndividual.toFixed(1)} m²
            </Value>
          </Item>
          <Item>
            <Description>
              Volume <sup>🛈</sup>
              <span className="tooltiptext">
                volume resultante da lagoa facultativa
              </span>
            </Description>
            <Value>
              {(lagoaFacultativa.volumeResultanteFacultativa / 1000).toFixed(3)}{" "}
              m³
            </Value>
          </Item>
          <Item>
            <Description>
              Tempo <sup>🛈</sup>
              <span className="tooltiptext">Tempo de detenção Resultante</span>
            </Description>
            <Value>
              {lagoaFacultativa.tempoDetencaoFacultativa.toFixed(2)} m³/ano
            </Value>
          </Item>
          <Item>
            <Description>
              KT <sup>🛈</sup>
              <span className="tooltiptext">
                Correção para a temperatura de 23°C
              </span>
            </Description>
            <Value>{lagoaFacultativa.kt} cm/ano</Value>
          </Item>
          <Item>
            <Description>
              S <sup>🛈</sup>
              <span className="tooltiptext">
                Estimativa da DBO solúvel efluente
              </span>
            </Description>
            <Value>{lagoaFacultativa.s.toFixed(0)} mg/l</Value>
          </Item>
          <Item>
            <Description>
              DBO<sub>5</sub> Particulada <sup>🛈</sup>
              <span className="tooltiptext">
                Estimativa da DBO particulada efluente
              </span>
            </Description>
            <Value>
              {lagoaFacultativa.DBO5Particulada} mgDBO<sub>5</sub>/l
            </Value>
          </Item>
          <Item>
            <Description>
              DBO efluente <sup>🛈</sup>
              <span className="tooltiptext">DBO total efluente</span>
            </Description>
            <Value>{lagoaFacultativa.DBOTotalAfluenteFacultativa} mg/l</Value>
          </Item>
        </Card>
      </Container>
      <Card>
        <TitleCard>Sistema Australiano</TitleCard>
        <Item>
          <Description>
            Eficiência <sup>🛈</sup>
            <span className="tooltiptext">
              Eficiência total do distema de lagoa anaeróbia-lagoa facultativa
              na remoção da DBO
            </span>
          </Description>
          <Value>{sistemaAustraliano.eficiencia}%</Value>
        </Item>
        <Item>
          <Description>
            Area útil total <sup>🛈</sup>
            <span className="tooltiptext">Lagoas anaeróbia + facultativa</span>
          </Description>
          <Value>{sistemaAustraliano.areaTotalAnaerobiaFacultativa} ha</Value>
        </Item>
        <Item>
          <Description>
            Area Total <sup>🛈</sup>
            <span className="tooltiptext">
              25% a 33% superior a área útil requerida
            </span>
          </Description>
          <Value>{sistemaAustraliano.areaTotal} ha</Value>
        </Item>
        <Item>
          <Description>
            Area per capita <sup>🛈</sup>
            <span className="tooltiptext">Área per capita</span>
          </Description>
          <Value>{sistemaAustraliano.areaPercapitaFacultativa} m²/hab </Value>
        </Item>
        {lagoaAnaerobia.dqoDbo >= 0 && lagoaAnaerobia.dqoDbo < 2.5 && (
          <Item>
            <Description>
              Relação DQO/DBO = {lagoaAnaerobia.dqoDbo} <sup>🛈</sup>
              <span className="tooltiptext">
                Baixa - A fração biodegradável é elevada.
              </span>
            </Description>
            <Value>Indicação para tratamento biológico </Value>
          </Item>
        )}
        {lagoaAnaerobia.dqoDbo >= 2.5 && lagoaAnaerobia.dqoDbo < 3.5 && (
          <Item>
            <Description>
              Relação DQO/DBO = {lagoaAnaerobia.dqoDbo} <sup>🛈</sup>
              <span className="tooltiptext">
                Intermediária - A fração biodegradável não é elevada.
              </span>
            </Description>
            <Value style={{ textAlign: "justify" }}>
              Estudos de tratabilidade para verificar viabilidade do tratamento
              biológico.{" "}
            </Value>
          </Item>
        )}
        {lagoaAnaerobia.dqoDbo >= 3.5 && (
          <Item>
            <Description>
              Relação DQO/DBO = {lagoaAnaerobia.dqoDbo} <sup>🛈</sup>
              <span className="tooltiptext">
                Elevada - A fração inerte (não biodegradável) é elevada.
              </span>
            </Description>
            <Value> Possível indicação para tratamento físico-químico</Value>
          </Item>
        )}
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
                                    <Retangle style={{ width: `${lagoaAnaerobia.BAnaerobia * 3}px`,maxWidth: '170px', height: `${lagoaAnaerobia.LAnaerobia * 3}px`, minHeight: '35px', marginRight: "100px", fontSize: "10px" }}>
                                        <TTop>{lagoaAnaerobia.BAnaerobia}m</TTop>
                                        <TRight>{lagoaAnaerobia.LAnaerobia}m</TRight>
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
                                    <Retangle style={{ width: `${lagoaFacultativa.BFacultativa * 2}px`, maxWidth: '400px', height: `${lagoaFacultativa.LFacultativa * 2}px`,  minHeight: '50px'}}>
                                        <TTop>{lagoaFacultativa.BFacultativa}m</TTop>
                                        <TRight style={{ lineHeight: `${lagoaFacultativa.LFacultativa / 3}px` }}>{lagoaFacultativa.LFacultativa}m</TRight>
                                        <DescLagoa>Lagoa Facult. {index+1}</DescLagoa>
                                    </Retangle>
                                )
                            })
                        }
                    </Facultativa>
                </Grafic> */}
      </GraficContainer>
      <PDFButton>
        <button onClick={onClick}>Gerar Relatório</button>
      </PDFButton>
    </Page>
  );
}

export default Result;
