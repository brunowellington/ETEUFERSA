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
  Resultado,
  Linha,
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
        <Linha />
        <h2>Resultados</h2>
        <Linha />
      </Resultado>
      <Container>
        {anaerobiaCalculated && (
          <Card>
            <TitleCard>Lagoa Anaeróbia</TitleCard>
            <Item>
              <Description>
                Carga afluente de DBO <sup>🛈</sup>
                <span className="tooltiptext">Carga afluente de DBO</span>
              </Description>
              <Value>{lagoaAnaerobia.cargaAnaerobia} kgDBO/m³.d</Value>
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
                <span className="tooltiptext">
                  Tempo de detenção hidráulico
                </span>
              </Description>
              <Value>{lagoaAnaerobia.tempo?.toFixed(1)} dia</Value>
            </Item>
            <Item>
              <Description>
                Área <sup>🛈</sup>
                <span className="tooltiptext">Área requerida</span>
              </Description>
              <Value>{lagoaAnaerobia.area?.toFixed(0)} m²</Value>
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
              <Value>{lagoaAnaerobia.tempo1terco?.toFixed(1)} anos</Value>
            </Item>
          </Card>
        )}

        <Card>
          <TitleCard>Lagoa Facultativa</TitleCard>
          <Item>
            <Description>
              Carga afluente à lagoa facultativa <sup>🛈</sup>
              <span className="tooltiptext">
                Carga afluente à lagoa facultativa (kgDBO/d)
              </span>
            </Description>
            <Value>
              {lagoaFacultativa.CargaFacultativa?.toFixed(0)} kgDBO/d
            </Value>
          </Item>
          <Item>
            <Description>
              Área requerida<sup>🛈</sup>
              <span className="tooltiptext">Área requerida (ha)</span>
            </Description>
            <Value>{lagoaFacultativa.areaTotalFacultativa} ha</Value>
          </Item>
          <Item>
            <Description>
              Área individual para cada lagoa facultativa <sup>🛈</sup>
              <span className="tooltiptext">
                Área individual para cada lagoa facultativa (m³)
              </span>
            </Description>
            <Value>{lagoaFacultativa.areaLagoaFacultativaIndividual} m²</Value>
          </Item>
          <Item>
            <Description>
              Volume resultante da lagoa facultativa <sup>🛈</sup>
              <span className="tooltiptext">
                Volume resultante da lagoa facultativa (m³)
              </span>
            </Description>
            <Value>
              {(lagoaFacultativa.volumeResultanteFacultativa / 1000).toFixed(3)}{" "}
              m³
            </Value>
          </Item>
          <Item>
            <Description>
              Tempo de detenção resultante <sup>🛈</sup>
              <span className="tooltiptext">
                Tempo de detenção resultante (d)
              </span>
            </Description>
            <Value>
              {lagoaFacultativa.tempoDetencaoFacultativa?.toFixed(2)} dias
            </Value>
          </Item>
          <Item>
            <Description>
              Correção para a temperatura local <sup>🛈</sup>
              <span className="tooltiptext">
                Correção para a temperatura local (ºC)
              </span>
            </Description>
            <Value>
              {lagoaFacultativa.kt} d<sup>-1</sup>
            </Value>
          </Item>
          <Item>
            <Description>
              Estimativa da DBO solúvel efluente <sup>🛈</sup>
              <span className="tooltiptext">
                Estimativa da DBO solúvel efluente (mg/L)
              </span>
            </Description>
            <Value>{lagoaFacultativa.s.toFixed(0)} mg/l</Value>
          </Item>
          <Item>
            <Description>
              Estimativa da DBO particulada efluente <sup>🛈</sup>
              <span className="tooltiptext">
                Estimativa da DBO particulada efluente (mgDBO<sub>5</sub>)
              </span>
            </Description>
            <Value>
              {lagoaFacultativa.DBO5Particulada.toFixed(0)} mgDBO<sub>5</sub>/l
            </Value>
          </Item>
          <Item>
            <Description>
              DBO total efluente <sup>🛈</sup>
              <span className="tooltiptext">DBO total efluente (mg/L)</span>
            </Description>
            <Value>
              {lagoaFacultativa.DBOTotalAfluenteFacultativa?.toFixed(0)} mg/l
            </Value>
          </Item>
          <Item>
            <Description>
              Eficiência <sup>🛈</sup>
              <span className="tooltiptext">
                Eficiência no sistema de lagoa facultativa na remoção de DBO (%)
              </span>
            </Description>
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
            <Description>
              Remoção de coliformes após facultativa <sup>🛈</sup>
              <span className="tooltiptext">
                Remoção de coliformes após facultativa (CF/100mL)
              </span>
            </Description>
            <Value>{lagoaMaturacao.remocaoColiformes} CF/100 ml</Value>
          </Item>

          <Item>
            <Description>
              Volume das lagoas <sup>🛈</sup>
              <span className="tooltiptext">Volume das lagoas (m³)</span>
            </Description>
            <Value>{lagoaMaturacao.volumeCadaLagoaMaturacao} m³</Value>
          </Item>

          <Item>
            <Description>
              Área superficial <sup>🛈</sup>
              <span className="tooltiptext">Área superficial (m²)</span>
            </Description>
            <Value>{lagoaMaturacao.areaSuperficialCadaLagoa} m²</Value>
          </Item>

          <Item>
            <Description>
              Área superficial total <sup>🛈</sup>
              <span className="tooltiptext">Área superficial total (m²)</span>
            </Description>
            <Value>{lagoaMaturacao.areaSuperficialTotal} m²</Value>
          </Item>

          <Item>
            <Description>
              Número de dispersão <sup>🛈</sup>
              <span className="tooltiptext">Número de dispersão</span>
            </Description>
            <Value>{lagoaMaturacao.D?.toFixed(2)} </Value>
          </Item>

          <Item>
            <Description>
              Coeficiente de decaimento bacteriano <sup>🛈</sup>
              <span className="tooltiptext">
                Coeficiente de decaimento bacteriano a 20 ºC (d<sup>-1</sup>)
              </span>
            </Description>
            <Value>
              {lagoaMaturacao.kb} d<sup>-1</sup>{" "}
            </Value>
          </Item>

          <Item>
            <Description>
              Coeficiente de decaimento bacteriano para temperatura local
              <sup>🛈</sup>
              <span className="tooltiptext">
                Coeficiente de decaimento bacteriano para temperatura local (d
                <sup>-1</sup>)
              </span>
            </Description>
            <Value>
              {lagoaMaturacao.kbT} d<sup>-1</sup>{" "}
            </Value>
          </Item>

          <Item>
            <Description>
              Concentração de coliformes após maturação 1 <sup>🛈</sup>
              <span className="tooltiptext">
                Concentração de coliformes efluentes da 1ª lagoa da série
                (CF/100mL)
              </span>
            </Description>
            <Value>{lagoaMaturacao.NttExpandido} CF/100 ml </Value>
          </Item>

          <Item>
            <Description>
              Eficiência das lagoas <sup>🛈</sup>
              <span className="tooltiptext">(%)</span>
            </Description>
            <Value>{lagoaMaturacao.eFicienciaSerieLagoaPorcentagem} % </Value>
          </Item>

          <Item>
            <Description>
              Concentração de coliformes após maturação 2 <sup>🛈</sup>
              <span className="tooltiptext">
                Concentração de coliformes efluentes da 2ª lagoa da série
                (CF/100mL)
              </span>
            </Description>
            <Value>{lagoaMaturacao.concentracaoColiformesEfluenteFinal} </Value>
          </Item>

          <Item>
            <Description>
              Eficiência de remoção global <sup>🛈</sup>
              <span className="tooltiptext">
                Tratamento secundário + lagoas de polimento (%)
              </span>
            </Description>
            <Value>
              {lagoaMaturacao.eficienciaRemocaoGlobalPorcentagem} %{" "}
            </Value>
          </Item>

          <Item>
            <Description>
              Concentração efluente pós tratamento secundário <sup>🛈</sup>
              <span className="tooltiptext">
                Ovos helmintos no efluentes do tratamento secundário (ovos/L)
              </span>
            </Description>
            <Value>
              {lagoaMaturacao.concentracaoOvosEfluenteReatorUASB} ovos/L{" "}
            </Value>
          </Item>

          <Item>
            <Description>
              Eficiência de remoção global dos ovos <sup>🛈</sup>
              <span className="tooltiptext">(%)</span>
            </Description>
            <Value>
              {lagoaMaturacao.eficienciaRemocaoGlobalHelmitosPorcentagem} %{" "}
            </Value>
          </Item>

          <Item>
            <Description>
              Eficiência global de remoção de helmintos <sup>🛈</sup>
              <span className="tooltiptext">(%)</span>
            </Description>
            <Value>{lagoaMaturacao.eficienciaGlobalPorcentagem} % </Value>
          </Item>

          <Item>
            <Description>
              Unidades log removidas <sup>🛈</sup>
              <span className="tooltiptext">
                Unidades log removidas de helmintos (global)
              </span>
            </Description>
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
            <Description>
              Eficiência <sup>🛈</sup>
              <span className="tooltiptext">
                Eficiência total do sistema de lagoa anaeróbia - lagoa
                facultativa na remoção da DBO
              </span>
            </Description>
            <Value>{sistemaAustraliano.eficiencia} %</Value>
          </Item>
          <Item>
            <Description>
              Área útil total <sup>🛈</sup>
              <span className="tooltiptext">
                Lagoas anaeróbia + facultativa
              </span>
            </Description>
            <Value>{sistemaAustraliano.areaTotalAnaerobiaFacultativa} ha</Value>
          </Item>
          <Item>
            <Description>
              Área total <sup>🛈</sup>
              <span className="tooltiptext">
                25% a 33% superior a área útil requerida
              </span>
            </Description>
            <Value>{sistemaAustraliano.areaTotal} ha</Value>
          </Item>
          <Item>
            <Description>
              Área per capita <sup>🛈</sup>
              <span className="tooltiptext">Área per capita</span>
            </Description>
            <Value>{sistemaAustraliano.areaPercapitaFacultativa} m²/hab </Value>
          </Item>
          {lagoaAnaerobia.dqoDbo && (
            <>
              {lagoaAnaerobia.dqoDbo >= 0 && lagoaAnaerobia.dqoDbo < 2.5 && (
                <Item>
                  <Description>
                    Relação DQO/DBO = {lagoaAnaerobia.dqoDbo} <sup>🛈</sup>
                    <span className="tooltiptext">
                      Baixa - A fração biodegradável é elevada
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
                    Estudos de tratabilidade para verificar viabilidade do
                    tratamento biológico.{" "}
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
