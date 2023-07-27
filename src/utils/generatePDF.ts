import jsPDF from "jspdf";
import { LagoaAnaerobia } from "../types/LagoaAnaerobia";
import { LagoaFacultativa } from "../types/LagoaFacultativa";
import { LagoaMaturacao } from "../types/LagoaMaturacao";
import { LagoasBaseData } from "../types/LagoasBaseData";
import { SistemaAustraliano } from "../types/SistemaAustraliano";

const addCabecalho = (doc: jsPDF) => {
  doc.text(
    "ESTAÇÃO  DE  TRATAMENTO  DE  ESGOTO  UNIVERSIDADE  FEDERAL RURAL DO",
    80,
    50,
    { align: "justify" }
  );
  doc.text("SEMI-ÁRIDO - UFERSA", 80, 63);
  doc.text(
    "Este programa é destinado à realização do pré-dimensionamento para",
    80,
    80
  );
  doc.text(
    "uma estação de tratamento de esgoto do tipo anaeróbia seguida por",
    80,
    93
  );
  doc.text("lagoa facultativa (sistema australiano)", 80, 106);

  doc.setLineWidth(0.5);
  doc.line(485, 115, 80, 115);
}

type GeneratePDFProps = {
  lagoasBaseData: LagoasBaseData;
  lagoaAnaerobia: LagoaAnaerobia;
  lagoaFacultativa: LagoaFacultativa;
  lagoaMaturacao?: LagoaMaturacao;
  sistemaAustraliano: SistemaAustraliano;
  canvas: HTMLCanvasElement | null;
  anaerobiaCalculated: boolean,
  maturacaoCalculated: boolean
};

export const generatePDF = ({
  lagoasBaseData,
  lagoaAnaerobia,
  lagoaFacultativa,
  lagoaMaturacao,
  sistemaAustraliano,
  canvas,
  anaerobiaCalculated,
  maturacaoCalculated
}: GeneratePDFProps) => {
  const doc = new jsPDF("p", "pt");

  doc.setFont("courier");
  doc.setFontSize(10);
  addCabecalho(doc);

  doc.text("Dados de entrada", 80, 140);
  doc.text(`Populacao: ${lagoasBaseData.populacao}`, 100, 160);
  doc.text(`Vazão afluente: ${lagoasBaseData.vazaoAfluente}`, 100, 173);
  doc.text(`DBO afluente: ${lagoasBaseData.DBOAfluente}`, 100, 186);
  doc.text(`Temperatura: ${lagoasBaseData.temperatura}`, 100, 199);
  doc.text(`Taxa volumétrica: ${lagoasBaseData.taxaVolumetrica}`,100,212);
  doc.text(`Taxa de acúmulo: ${lagoasBaseData.taxaAcumulo}`, 100, 225);
  doc.text(`Quantidade de lagoas: ${lagoasBaseData.quantidadeLagoas}`,100,238);
  doc.text(`Proporção/1: ${lagoasBaseData.proporcao}`, 100, 251);
  doc.text(`K: ${lagoasBaseData.k}`, 100, 264);
  if (lagoasBaseData.hAnaerobia) {
    doc.text(`Profundidade Anaeróbia: ${lagoasBaseData.hAnaerobia}`,100,277);
    doc.text(`Profundidade Facultativa: ${lagoasBaseData.hFacultativa}`,100,290);
  } else {
    doc.text(`Profundidade Facultativa: ${lagoasBaseData.hFacultativa}`,100,277);
  }
  if (lagoaAnaerobia.dqoDbo && lagoaAnaerobia.dqoDbo >= 0) {
    doc.text(`DQO fornecido: ${lagoasBaseData.dqo}`, 100, 303);
  }

  if (lagoaAnaerobia.cargaAnaerobia && lagoaAnaerobia.tempo && lagoaAnaerobia.area && lagoaAnaerobia.tempo1terco) {
    doc.text("Lagoa Anaeróbia", 80, 323);
    doc.text(`Carga afluente de DBO = ${lagoaAnaerobia.cargaAnaerobia.toFixed(3)} kgDBO/m³.d`,100,343);
    doc.text(`Volume resultante da lagoa anaeróbia = ${lagoaAnaerobia.volume} m³`,100,356);
    doc.text(`Tempo de detenção = ${(lagoaAnaerobia.tempo / 1000).toFixed(1)} dia`,100,369);
    doc.text(`Área requerida = ${(lagoaAnaerobia.area / 1000).toFixed(0)} m²`,100,382);
    doc.text(`Acúmulo de lodo na lagoa anaeróbia = ${lagoaAnaerobia.acumulacao_anual} m³/ano`,100,395);
    doc.text(`Expessura da camada de lodo em 1 ano = ${lagoaAnaerobia.expessura}  cm/ano`,100,408);
    doc.text(`Tempo para se atingir 1/3 da altura útil das lagoas = ${lagoaAnaerobia.tempo1terco.toFixed(1)} ano(s)`,100,425);
    
    doc.text("Lagoa Facultativa", 80, 450);  
    
    doc.text(`Carga afluente à lagoa facultativa = ${lagoaFacultativa.CargaFacultativa} kgDBO/d`,100,475);
    doc.text(`Área requerida = ${lagoaFacultativa.areaTotalFacultativa.toFixed(1)} ha (${Number(lagoaFacultativa.areaTotalFacultativa.toFixed(1)).toFixed(3)} m²)`,100,488);
    doc.text(`Área individual para cada ladoa facultativa = ${lagoaFacultativa.areaLagoaFacultativaIndividual.toFixed(1)} m²`,100,501);
    doc.text(`volume resultante da lagoa facultativa = ${(lagoaFacultativa.volumeResultanteFacultativa / 1000).toFixed(3)} m³`,100,514);
    doc.text(`Tempo de detenção Resultante = ${lagoaFacultativa.tempoDetencaoFacultativa.toFixed(2)} m³/ano`,100,527);
    doc.text(`Correção para a temperatura de 23°C = ${lagoaFacultativa.kt}  cm/ano`,100,540);
    doc.text(`Estimativa da DBO solúvel efluente = ${lagoaFacultativa.s.toFixed(0)} mg/l`,100,553);
    doc.text(`Estimativa da DBO particulada efluente = ${lagoaFacultativa.DBO5Particulada} mgDBO`,100,566);
    doc.text(`DBO total efluente = ${lagoaFacultativa.DBOTotalAfluenteFacultativa} mg/l`,100,579);
  } else {

    // correção do espaçamento da lagoa anaeróbia aqui

    doc.text("Lagoa Facultativa", 80, 450);  
    
    doc.text(`Carga afluente à lagoa facultativa = ${lagoaFacultativa.CargaFacultativa} kgDBO/d`,100, 475);
    doc.text(`Área requerida = ${lagoaFacultativa.areaTotalFacultativa.toFixed(1)} ha (${Number(lagoaFacultativa.areaTotalFacultativa.toFixed(1)).toFixed(3)} m²)`,100,488);
    doc.text(`Área individual para cada ladoa facultativa = ${lagoaFacultativa.areaLagoaFacultativaIndividual.toFixed(1)} m²`,100,501);
    doc.text(`volume resultante da lagoa facultativa = ${(lagoaFacultativa.volumeResultanteFacultativa / 1000).toFixed(3)} m³`,100,514);
    doc.text(`Tempo de detenção Resultante = ${lagoaFacultativa.tempoDetencaoFacultativa.toFixed(2)} m³/ano`,100,527);
    doc.text(`Correção para a temperatura de 23°C = ${lagoaFacultativa.kt}  cm/ano`,100,540);
    doc.text(`Estimativa da DBO solúvel efluente = ${lagoaFacultativa.s.toFixed(0)} mg/l`,100,553);
    doc.text(`Estimativa da DBO particulada efluente = ${lagoaFacultativa.DBO5Particulada} mgDBO`,100,566);
    doc.text(`DBO total efluente = ${lagoaFacultativa.DBOTotalAfluenteFacultativa} mg/l`,100,579);
  }
  
  if (maturacaoCalculated && lagoaMaturacao) {
    doc.text("Lagoa de maturação", 80, 610);
    doc.text(`Dados de entrada`, 90, 630);
    doc.text(`Coliformes fecais = ${lagoaMaturacao.coliformesFecais}`, 100, 650);
    doc.text(`Ovos de helmintos = ${lagoaMaturacao.ovosHelmintos}`, 100, 665);
    doc.text(`Lagoas em série = ${lagoaMaturacao.quantidadeLagoasMaturacao}`, 100, 680);
    doc.text(`Profundidade útil = ${lagoaMaturacao.profundidadeUtilH}`, 100, 695);
    doc.text(`Comprimento = ${lagoaMaturacao.comprimentoMaturacao}`, 100, 710);
    doc.text(`Largura = ${lagoaMaturacao.larguraMaturacao}`, 100, 725);
    doc.text(`Tempo de detenção = ${lagoaMaturacao.valorTempoDetencao}`, 100, 740);
    doc.text(`Eficiência típica de remoção de DBO = ${lagoaMaturacao.eficienciaRemocaoDBO}`, 100, 755);
    doc.text(`Eficiência típica de remoção de ovos = ${lagoaMaturacao.eficienciaRemocaoOvosHelmitoss}`, 100, 770);

    doc.addPage();

    addCabecalho(doc);

    doc.text(`Resultado da lagoa de maturação`, 90, 135);
    doc.text(`Remoção de coliformes = ${lagoaMaturacao.remocaoColiformes} CF/100 ml`, 100, 155);
    doc.text(`Volume das lagoas = ${lagoaMaturacao.volumeCadaLagoaMaturacao} m²`, 100, 170);
    doc.text(`Área superficial = ${lagoaMaturacao.areaSuperficialCadaLagoa} m²`, 100, 185);
    doc.text(`Área superficial total = ${lagoaMaturacao.areaSuperficialTotal} m²`, 100, 200);
    doc.text(`Número de dispersão = ${lagoaMaturacao.D}`, 100, 215);
    doc.text(`Coeficiente de decaimento bacteriano = ${lagoaMaturacao.kb} d-1`, 100, 230);
    doc.text(`Coeficiente de decaimento bacteriano = ${lagoaMaturacao.kbT} d-1`, 100, 245);
    doc.text(`Concentração de coliformes efluentes = ${lagoaMaturacao.NttExpandido} CF/100 ml`, 100, 260);
    doc.text(`Eficiência das lagoas = ${lagoaMaturacao.eFicienciaSerieLagoaPorcentagem} %`, 100, 275);
    doc.text(`Concentração de coliformes no efluente final = ${lagoaMaturacao.concentracaoColiformesEfluenteFinal}`, 100, 290);
    doc.text(`A eficiência de remoção global = ${lagoaMaturacao.eficienciaRemocaoGlobalPorcentagem} %`, 100, 305);
    doc.text(`Concentração de ovos no efluente do reator UASB = ${lagoaMaturacao.concentracaoOvosEfluenteReatorUASB} ovos/L`, 100, 320);
    doc.text(`Eficiência de remoção global dos ovos = ${lagoaMaturacao.eficienciaRemocaoGlobalHelmitosPorcentagem} %`, 100, 335);
    doc.text(`Eficiência global de remoção de helmitos = ${lagoaMaturacao.eficienciaGlobalPorcentagem} %`, 100, 350);
    doc.text(`Unidades log removidas = ${lagoaMaturacao.unidadeLogRemovida} unidades log removidas`, 100, 365);

    if (anaerobiaCalculated) {
      doc.text("Sistema Australiano", 80, 395);

      doc.text(`Eficiência = ${sistemaAustraliano.eficiencia}%`, 100, 410);
      doc.text(`Area útil total = ${sistemaAustraliano.areaTotalAnaerobiaFacultativa} ha`,100,425);
      doc.text(`Area Total = ${sistemaAustraliano.areaTotal} ha`, 100, 440);
      doc.text(`Area per capita = ${sistemaAustraliano.areaPercapitaFacultativa} m²/hab`,100,455);

      if (lagoaAnaerobia.dqoDbo && lagoaAnaerobia.dqoDbo >= 0) {
        let message = "";
        if (lagoaAnaerobia.dqoDbo >= 0 && lagoaAnaerobia.dqoDbo < 2.5) {
          message = "(Baixa) - A fração biodegradável é elevada.";
        } else if (lagoaAnaerobia.dqoDbo >= 2.5 && lagoaAnaerobia.dqoDbo < 3.5) {
          message = "(Intermediária) - A fração biodegradável não é elevada.";
        } else if (lagoaAnaerobia.dqoDbo >= 3.5) {
          message = "(Elevada) - A fração inerte (não biodegradável) é elevada.";
        }

        doc.text(`Relação DQO/DBO = ${lagoaAnaerobia.dqoDbo} ${message}`,100,470);
      }
    } 

  } else if (anaerobiaCalculated) {
    doc.text("Sistema Australiano", 80, 600);

    doc.text(`Eficiência = ${sistemaAustraliano.eficiencia}%`, 100, 620);
    doc.text(`Area útil total = ${sistemaAustraliano.areaTotalAnaerobiaFacultativa} ha`,100,635);
    doc.text(`Area Total = ${sistemaAustraliano.areaTotal} ha`, 100, 650);
    doc.text(`Area per capita = ${sistemaAustraliano.areaPercapitaFacultativa} m²/hab`,100,665);
    
    if (lagoaAnaerobia.dqoDbo && lagoaAnaerobia.dqoDbo >= 0) {
      let message = "";
      if (lagoaAnaerobia.dqoDbo >= 0 && lagoaAnaerobia.dqoDbo < 2.5) {
        message = "(Baixa) - A fração biodegradável é elevada.";
      } else if (lagoaAnaerobia.dqoDbo >= 2.5 && lagoaAnaerobia.dqoDbo < 3.5) {
        message = "(Intermediária) - A fração biodegradável não é elevada.";
      } else if (lagoaAnaerobia.dqoDbo >= 3.5) {
        message = "(Elevada) - A fração inerte (não biodegradável) é elevada.";
      }

      doc.text(`Relação DQO/DBO = ${lagoaAnaerobia.dqoDbo} ${message}`,100,680);
    }
  }

  if (canvas !== null) {
    doc.addPage();
    addCabecalho(doc);
    
    doc.text(!anaerobiaCalculated || maturacaoCalculated ? "Layout" : "Layout do Sistema Australiano", 80, 140);
    doc.addImage(canvas.toDataURL(), "PNG", 15, 145, 580, 250);
  }

  window.open(doc.output('bloburl'))
  // doc.save("Relatório Analítico - ETEUFERSA.pdf");
};
