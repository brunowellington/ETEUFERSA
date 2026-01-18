import { useRef, useState, useEffect } from "react";
import {
  Page,
  Value,
  Card,
  Container,
  TitleCard,
  Item,
  Canvas,
  GraficContainer,
  PDFButton,
  Resultado,
} from "./styles";
import { generatePDF } from "../../utils/generatePDF";
// import logo from '../../assets/images/logo.png';
import { LagoasBaseData } from "../../types/LagoasBaseData";
import * as calc from "../../utils/calc";
import { mappedImages } from "../../utils/images";
import { writeInCanvas } from "../../utils/writeInCanvas";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Label } from "../Home/styles";

type ResultProps = {
  lagoasBaseData: LagoasBaseData;
};

function Result({ lagoasBaseData }: ResultProps) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const {
    lagoaAnaerobia,
    lagoaFacultativa,
    sistemaAustraliano,
    lagoaMaturacao,
    anaerobiaCalculated,
    maturacaoCalculated,
  } = calc.dimensionamento(lagoasBaseData);
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new Image();

    const is1x1 = lagoasBaseData.proporcao === 1;
    let value = lagoasBaseData.quantidadeLagoas;
    const quantidadeLagoaMaturacao =
      lagoasBaseData.quantidadeLagoasMaturacao || 0;

    if (maturacaoCalculated) {
      if (lagoasBaseData.quantidadeLagoas === 1) {
        if (quantidadeLagoaMaturacao === 1) value = 1;
        if (quantidadeLagoaMaturacao === 2) value = 2;
        if (quantidadeLagoaMaturacao > 2) value = 3;
      } else if (lagoasBaseData.quantidadeLagoas === 2) {
        if (quantidadeLagoaMaturacao === 1) value = 4;
        if (quantidadeLagoaMaturacao === 2) value = 5;
        if (quantidadeLagoaMaturacao > 2) value = 6;
      } else {
        if (quantidadeLagoaMaturacao === 1) value = 7;
        if (quantidadeLagoaMaturacao === 2) value = 8;
        if (quantidadeLagoaMaturacao > 2) value = 9;
      }
    } else {
      if (value > 2) value = 3;
    }

    const src =
      mappedImages[
        maturacaoCalculated
          ? "maturacao"
          : is1x1
            ? "proporcao1x1"
            : "proporcaonx1"
      ][value];

    img.src = src;
    img.onload = () => setImage(img);
  }, [lagoasBaseData, maturacaoCalculated]);

  useEffect(() => {
    writeInCanvas({
      image,
      canvas: canvas.current,
      lagoaAnaerobia,
      lagoaFacultativa,
      lagoaMaturacao,
      lagoasBaseData,
      maturacaoCalculated,
    });
  }, [
    image,
    lagoaAnaerobia,
    lagoaFacultativa,
    lagoaMaturacao,
    lagoasBaseData,
    maturacaoCalculated,
  ]);

  const onClick = () =>
    generatePDF({
      lagoasBaseData,
      lagoaAnaerobia,
      lagoaFacultativa,
      lagoaMaturacao,
      sistemaAustraliano,
      canvas: canvas.current,
      anaerobiaCalculated,
      maturacaoCalculated,
    });

  return (
    <Page>
      <Resultado>
        <h2>Resultados</h2>
      </Resultado>
      <Container>
        {anaerobiaCalculated && (
          <Card>
            <TitleCard>Lagoa Anaeróbia</TitleCard>
            <Item>
              <Label>
                <span className="tooltiptext">Carga afluente de DBO</span>
                Carga afluente de DBO <AiOutlineInfoCircle color="#009be5" />
              </Label>
              <Value>{lagoaAnaerobia.cargaAnaerobia} kgDBO/m³.d</Value>
            </Item>
            <Item>
              <Label>
                <span className="tooltiptext">
                  Volume resultante da lagoa anaeróbia
                </span>
                Volume <AiOutlineInfoCircle color="#009be5" />
              </Label>
              <Value>{lagoaAnaerobia.volume} m³</Value>
            </Item>
            <Item>
              <Label>
                <span className="tooltiptext">
                  Tempo de detenção hidráulico
                </span>
                Tempo <AiOutlineInfoCircle color="#009be5" />
              </Label>
              <Value>{lagoaAnaerobia.tempo?.toFixed(1)} dia</Value>
            </Item>
            <Item>
              <Label>
                <span className="tooltiptext">Área requerida</span>
                Área <AiOutlineInfoCircle color="#009be5" />
              </Label>
              <Value>{lagoaAnaerobia.area?.toFixed(0)} m²</Value>
            </Item>
            <Item>
              <Label>
                <span className="tooltiptext">
                  Acúmulo de lodo na lagoa anaeróbia
                </span>
                Acumulação anual <AiOutlineInfoCircle color="#009be5" />
              </Label>
              <Value>{lagoaAnaerobia.acumulacao_anual} m³/ano</Value>
            </Item>
            <Item>
              <Label>
                <span className="tooltiptext">
                  Expessura da camada de lodo em 1 ano
                </span>
                Expessura <AiOutlineInfoCircle color="#009be5" />
              </Label>
              <Value>{lagoaAnaerobia.expessura} cm/ano</Value>
            </Item>
            <Item>
              <Label>
                <span className="tooltiptext">
                  Tempo para se atingir 1/3 da altura útil das lagoas
                </span>
                Tempo para se atingir 1/3{" "}
                <AiOutlineInfoCircle color="#009be5" />
              </Label>
              <Value>{lagoaAnaerobia.tempo1terco?.toFixed(1)} anos</Value>
            </Item>
          </Card>
        )}

        <Card>
          <TitleCard>Lagoa Facultativa</TitleCard>
          <Item>
            <Label>
              <span className="tooltiptext">
                Carga afluente à lagoa facultativa (kgDBO/d)
              </span>
              Carga afluente à lagoa facultativa{" "}
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>
              {lagoaFacultativa.CargaFacultativa?.toFixed(0)} kgDBO/d
            </Value>
          </Item>
          <Item>
            <Label>
              <span className="tooltiptext">Área requerida (ha)</span>
              Área requerida <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{lagoaFacultativa.areaTotalFacultativa} ha</Value>
          </Item>
          <Item>
            <Label>
              <span className="tooltiptext">
                Área individual para cada lagoa facultativa (m³)
              </span>
              Área individual para cada lagoa facultativa{" "}
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{lagoaFacultativa.areaLagoaFacultativaIndividual} m²</Value>
          </Item>
          <Item>
            <Label>
              <span className="tooltiptext">
                Volume resultante da lagoa facultativa (m³)
              </span>
              Volume resultante da lagoa facultativa{" "}
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>
              {(lagoaFacultativa.volumeResultanteFacultativa / 1000).toFixed(3)}{" "}
              m³
            </Value>
          </Item>
          <Item>
            <Label>
              <span className="tooltiptext">
                Tempo de detenção resultante (d)
              </span>
              Tempo de detenção resultante{" "}
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>
              {lagoaFacultativa.tempoDetencaoFacultativa?.toFixed(2)} dias
            </Value>
          </Item>
          <Item>
            <Label>
              <span className="tooltiptext">
                Correção para a temperatura local (ºC)
              </span>
              Correção para a temperatura local{" "}
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>
              {lagoaFacultativa.kt} d<sup>-1</sup>
            </Value>
          </Item>
          <Item>
            <Label>
              <span className="tooltiptext">
                Estimativa da DBO solúvel efluente (mg/L)
              </span>
              Estimativa da DBO solúvel efluente{" "}
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{lagoaFacultativa.s.toFixed(0)} mg/l</Value>
          </Item>
          <Item>
            <Label>
              <span className="tooltiptext">
                Estimativa da DBO particulada efluente (mgDBO<sub>5</sub>)
              </span>
              Estimativa da DBO particulada efluente{" "}
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>
              {lagoaFacultativa.DBO5Particulada.toFixed(0)} mgDBO<sub>5</sub>/l
            </Value>
          </Item>
          <Item>
            <Label>
              <span className="tooltiptext">DBO total efluente (mg/L)</span>
              DBO total efluente <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>
              {lagoaFacultativa.DBOTotalAfluenteFacultativa?.toFixed(0)} mg/l
            </Value>
          </Item>
          <Item>
            <Label>
              <span className="tooltiptext">
                Eficiência no sistema de lagoa facultativa na remoção de DBO (%)
              </span>
              Eficiência <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>
              {lagoaFacultativa.eficienciaFacultativa?.toFixed(0)} %
            </Value>
          </Item>
        </Card>
      </Container>

      {/*card de lagoa de maturacao */}
      {maturacaoCalculated && lagoaMaturacao && (
        <Card>
          <TitleCard>Lagoa de Maturação</TitleCard>
          <Item>
            <Label>
              <span className="tooltiptext">
                Remoção de coliformes após facultativa (CF/100mL)
              </span>
              Remoção de coliformes após facultativa{" "}
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{lagoaMaturacao.remocaoColiformes} CF/100 ml</Value>
          </Item>

          <Item>
            <Label>
              <span className="tooltiptext">Volume das lagoas (m³)</span>
              Volume das lagoas <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{lagoaMaturacao.volumeCadaLagoaMaturacao} m³</Value>
          </Item>

          <Item>
            <Label>
              <span className="tooltiptext">Área superficial (m²)</span>
              Área superficial <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{lagoaMaturacao.areaSuperficialCadaLagoa} m²</Value>
          </Item>

          <Item>
            <Label>
              <span className="tooltiptext">Área superficial total (m²)</span>
              Área superficial total <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{lagoaMaturacao.areaSuperficialTotal} m²</Value>
          </Item>

          <Item>
            <Label>
              <span className="tooltiptext">Número de dispersão</span>
              Número de dispersão <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{lagoaMaturacao.D?.toFixed(2)} </Value>
          </Item>

          <Item>
            <Label>
              <span className="tooltiptext">
                Coeficiente de decaimento bacteriano a 20 ºC (d<sup>-1</sup>)
              </span>
              Coeficiente de decaimento bacteriano{" "}
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>
              {lagoaMaturacao.kb} d<sup>-1</sup>{" "}
            </Value>
          </Item>

          <Item>
            <Label>
              <span className="tooltiptext">
                Coeficiente de decaimento bacteriano para temperatura local (d
                <sup>-1</sup>)
              </span>
              Coeficiente de decaimento bacteriano para temperatura local
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>
              {lagoaMaturacao.kbT} d<sup>-1</sup>{" "}
            </Value>
          </Item>

          <Item>
            <Label>
              <span className="tooltiptext">
                Concentração de coliformes efluentes da 1ª lagoa da série
                (CF/100mL)
              </span>
              Concentração de coliformes após maturação 1{" "}
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{lagoaMaturacao.NttExpandido} CF/100 ml </Value>
          </Item>

          <Item>
            <Label>
              <span className="tooltiptext">(%)</span>
              Eficiência das lagoas <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{lagoaMaturacao.eFicienciaSerieLagoaPorcentagem} % </Value>
          </Item>

          <Item>
            <Label>
              <span className="tooltiptext">
                Concentração de coliformes efluentes da 2ª lagoa da série
                (CF/100mL)
              </span>
              Concentração de coliformes após maturação 2{" "}
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{lagoaMaturacao.concentracaoColiformesEfluenteFinal} </Value>
          </Item>

          <Item>
            <Label>
              <span className="tooltiptext">
                Tratamento secundário + lagoas de polimento (%)
              </span>
              Eficiência de remoção global{" "}
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>
              {lagoaMaturacao.eficienciaRemocaoGlobalPorcentagem} %{" "}
            </Value>
          </Item>

          <Item>
            <Label>
              <span className="tooltiptext">
                Ovos helmintos no efluentes do tratamento secundário (ovos/L)
              </span>
              Concentração efluente pós tratamento secundário{" "}
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>
              {lagoaMaturacao.concentracaoOvosEfluenteReatorUASB} ovos/L{" "}
            </Value>
          </Item>

          <Item>
            <Label>
              <span className="tooltiptext">(%)</span>
              Eficiência de remoção global dos ovos{" "}
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>
              {lagoaMaturacao.eficienciaRemocaoGlobalHelmitosPorcentagem} %{" "}
            </Value>
          </Item>

          <Item>
            <Label>
              <span className="tooltiptext">(%)</span>
              Eficiência global de remoção de helmintos{" "}
              <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{lagoaMaturacao.eficienciaGlobalPorcentagem} % </Value>
          </Item>

          <Item>
            <Label>
              <span className="tooltiptext">
                Unidades log removidas de helmintos (global)
              </span>
              Unidades log removidas <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>
              {lagoaMaturacao.unidadeLogRemovida} unidades log removidas{" "}
            </Value>
          </Item>
        </Card>
      )}

      {anaerobiaCalculated && (
        <Card>
          <TitleCard>Sistema Australiano</TitleCard>
          <Item>
            <Label>
              <span className="tooltiptext">
                Eficiência total do sistema de lagoa anaeróbia - lagoa
                facultativa na remoção da DBO
              </span>
              Eficiência <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{sistemaAustraliano.eficiencia} %</Value>
          </Item>
          <Item>
            <Label>
              <span className="tooltiptext">
                Lagoas anaeróbia + facultativa
              </span>
              Área útil total <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{sistemaAustraliano.areaTotalAnaerobiaFacultativa} ha</Value>
          </Item>
          <Item>
            <Label>
              <span className="tooltiptext">
                25% a 33% superior a área útil requerida
              </span>
              Área total <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{sistemaAustraliano.areaTotal} ha</Value>
          </Item>
          <Item>
            <Label>
              <span className="tooltiptext">Área per capita</span>
              Área per capita <AiOutlineInfoCircle color="#009be5" />
            </Label>
            <Value>{sistemaAustraliano.areaPercapitaFacultativa} m²/hab </Value>
          </Item>
          {lagoaAnaerobia.dqoDbo && (
            <>
              {lagoaAnaerobia.dqoDbo >= 0 && lagoaAnaerobia.dqoDbo < 2.5 && (
                <Item>
                  <Label>
                    <span className="tooltiptext">
                      Baixa - A fração biodegradável é elevada
                    </span>
                    Relação DQO/DBO = {lagoaAnaerobia.dqoDbo}{" "}
                    <AiOutlineInfoCircle color="#009be5" />
                  </Label>
                  <Value>Indicação para tratamento biológico </Value>
                </Item>
              )}
              {lagoaAnaerobia.dqoDbo >= 2.5 && lagoaAnaerobia.dqoDbo < 3.5 && (
                <Item>
                  <Label>
                    <span className="tooltiptext">
                      Intermediária - A fração biodegradável não é elevada.
                    </span>
                    Relação DQO/DBO = {lagoaAnaerobia.dqoDbo}{" "}
                    <AiOutlineInfoCircle color="#009be5" />
                  </Label>
                  <Value style={{ textAlign: "justify" }}>
                    Estudos de tratabilidade para verificar viabilidade do
                    tratamento biológico.{" "}
                  </Value>
                </Item>
              )}
              {lagoaAnaerobia.dqoDbo >= 3.5 && (
                <Item>
                  <Label>
                    <span className="tooltiptext">
                      Elevada - A fração inerte (não biodegradável) é elevada.
                    </span>
                    Relação DQO/DBO = {lagoaAnaerobia.dqoDbo}{" "}
                    <AiOutlineInfoCircle color="#009be5" />
                  </Label>
                  <Value>
                    {" "}
                    Possível indicação para tratamento físico-químico
                  </Value>
                </Item>
              )}
            </>
          )}
        </Card>
      )}

      <GraficContainer>
        {/* <canvas ref={canvas}></canvas> */}
        <TitleCard>Layout do sistema</TitleCard>
        <Canvas id="canvas">
          <canvas width={1100} height={438} ref={canvas}></canvas>
        </Canvas>
      </GraficContainer>
      <PDFButton>
        <button onClick={onClick}>Gerar Relatório</button>
      </PDFButton>
    </Page>
  );
}

export default Result;
