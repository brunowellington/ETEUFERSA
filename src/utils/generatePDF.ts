import jsPDF from "jspdf";
import { LagoaAnaerobia } from "../types/LagoaAnaerobia";
import { LagoaFacultativa } from "../types/LagoaFacultativa";
import { LagoaMaturacao } from "../types/LagoaMaturacao";
import { LagoasBaseData } from "../types/LagoasBaseData";
import { SistemaAustraliano } from "../types/SistemaAustraliano";

/* ================= CONFIGURAÇÕES ABNT ================= */

const MARGIN_TOP = 85; // 3 cm
const MARGIN_LEFT = 85; // 3 cm
const MARGIN_RIGHT = 57; // 2 cm
const MARGIN_BOTTOM = 7; // 2 cm

const LINE_HEIGHT = 14;

/* ================= CABEÇALHO ================= */

const addCabecalho = (doc: jsPDF) => {
  doc.setFont("Times", "Normal");
  doc.setFontSize(10);

  const pageWidth = doc.internal.pageSize.getWidth();

  doc.text(
    "ESTAÇÃO DE TRATAMENTO DE ESGOTO - UNIVERSIDADE FEDERAL RURAL DO SEMI-ÁRIDO - UFERSA",
    pageWidth / 2,
    40,
    { align: "center" },
  );

  doc.text(
    "Este programa é destinado à realização do pré-dimensionamento para uma estação de tratamento\n" +
      "de esgoto do tipo anaeróbia seguida por lagoa facultativa (sistema australiano) e/ou lagoa de maturação.\n",
    pageWidth / 2,
    60,
    { align: "center" },
  );

  doc.setLineWidth(0.2);
  doc.line(MARGIN_LEFT, 75, pageWidth - MARGIN_RIGHT, 75);
};

/* ================= TYPES ================= */

type GeneratePDFProps = {
  lagoasBaseData: LagoasBaseData;
  lagoaAnaerobia: LagoaAnaerobia;
  lagoaFacultativa: LagoaFacultativa;
  lagoaMaturacao?: LagoaMaturacao;
  sistemaAustraliano: SistemaAustraliano;
  canvas: HTMLCanvasElement | null;
  anaerobiaCalculated: boolean;
  maturacaoCalculated: boolean;
};

/* ================= PDF ================= */

export const generatePDF = ({
  lagoasBaseData,
  lagoaAnaerobia,
  lagoaFacultativa,
  lagoaMaturacao,
  sistemaAustraliano,
  canvas,
  anaerobiaCalculated,
  maturacaoCalculated,
}: GeneratePDFProps) => {
  const doc = new jsPDF("p", "pt", "a4");

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  let y = MARGIN_TOP;

  const checkPage = (extra = LINE_HEIGHT) => {
    if (y + extra > pageHeight - MARGIN_BOTTOM) {
      doc.addPage();
      addCabecalho(doc);
      y = MARGIN_TOP;
    }
  };

  const title = (text: string) => {
    checkPage(30);
    doc.setFontSize(12);
    doc.setFont("Times", "Bold");
    doc.text(text, MARGIN_LEFT, y);
    y += LINE_HEIGHT + 6;
    doc.setFont("Times", "Normal");
    doc.setFontSize(11);
  };

  const text = (value: string) => {
    checkPage();
    doc.text(value, MARGIN_LEFT, y, {
      maxWidth: pageWidth - MARGIN_LEFT - MARGIN_RIGHT,
    });
    y += LINE_HEIGHT;
  };

  const textWrap = (value: string) => {
    checkPage(30);
    const wrapped = doc.splitTextToSize(
      value,
      pageWidth - MARGIN_LEFT - MARGIN_RIGHT,
    );
    doc.text(wrapped, MARGIN_LEFT, y);
    y += wrapped.length * LINE_HEIGHT + 10;
  };

  /* ================= INÍCIO ================= */

  addCabecalho(doc);

  /* ================= DADOS DE ENTRADA ================= */

  text("\n");
  title("Dados de entrada:");

  text(`População em habitantes: ${lagoasBaseData.populacao}`);
  text(`Vazão afluente: ${lagoasBaseData.vazaoAfluente}`);
  text(`DBO afluente: ${lagoasBaseData.DBOAfluente}`);
  text(`Temperatura em °C: ${lagoasBaseData.temperatura}`);
  text(`Taxa volumétrica: ${lagoasBaseData.taxaVolumetrica}`);
  text(`Taxa de acúmulo: ${lagoasBaseData.taxaAcumulo}`);
  text(`Quantidade de lagoas: ${lagoasBaseData.quantidadeLagoas}`);
  text(`Proporção/1 facultativa: ${lagoasBaseData.proporcao}`);
  text(`Proporção/1 anaeróbia: ${lagoasBaseData.proporcaoAnaerobia}`);
  text(`K: ${lagoasBaseData.k}`);
  if (lagoasBaseData.dqo) {
    text(`DQO: ${lagoasBaseData.dqo}`);
  }
  text(`Taxa de aplicação superficial: ${lagoasBaseData.aplicacaoSuper}`);
  text(`Eficiência anaeróbia: ${lagoasBaseData.eficienciaAnaerobia}`);
  text(
    `Concentração de sólidos em suspensão do efluente: ${lagoasBaseData.concentracaoSSefluente}`,
  );
  text(
    `Concentração de sólidos em suspensão/DBO5: ${lagoasBaseData.concentracaoSSDBO5}`,
  );
  if (lagoasBaseData.hAnaerobia) {
    text(`Profundidade anaeróbia: ${lagoasBaseData.hAnaerobia}`);
  }
  text(`Profundidade facultativa: ${lagoasBaseData.hFacultativa}`);

  if (maturacaoCalculated && lagoaMaturacao) {
    text("\n");

    text(`Coliformes fecais: ${lagoaMaturacao.coliformesFecais}`);
    text(`Ovos de helmintos: ${lagoaMaturacao.ovosHelmintos}`);
    text(`Lagoas em série: ${lagoaMaturacao.quantidadeLagoasMaturacao}`);
    text(`Profundidade útil: ${lagoaMaturacao.profundidadeUtilH}`);
    text(`Comprimento: ${lagoaMaturacao.comprimentoMaturacao}`);
    text(`Largura: ${lagoaMaturacao.larguraMaturacao}`);
    text(`Tempo de detenção: ${lagoaMaturacao.valorTempoDetencao}`);
    text(
      `Eficiência típica de remoção de DBO: ${lagoaMaturacao.eficienciaRemocaoDBO}`,
    );
    text(
      `Eficiência típica de remoção de ovos: ${lagoaMaturacao.eficienciaRemocaoOvosHelmitoss}`,
    );
  }

  /* ================= LAGOA ANAERÓBIA ================= */
  text("\n");
  if (anaerobiaCalculated && lagoaAnaerobia.cargaAnaerobia) {
    title("Resultados da análise:");
    title("Lagoa Anaeróbia");
    text(
      `Carga afluente de DBO: ${lagoaAnaerobia.cargaAnaerobia.toFixed(
        3,
      )} kgDBO/m³.d`,
    );
    text(`Volume: ${lagoaAnaerobia.volume} m³`);
    text(
      `Tempo: ${
        lagoaAnaerobia.tempo ? (lagoaAnaerobia.tempo / 1000).toFixed(1) : "N/A"
      } dia`,
    );
    text(
      `Área: ${
        lagoaAnaerobia.area ? (lagoaAnaerobia.area / 1000).toFixed(0) : "N/A"
      } m²`,
    );
    text(`Acúmulação anual de lodo: ${lagoaAnaerobia.acumulacao_anual} m³/ano`);
    text(`Espessura da camada de lodo: ${lagoaAnaerobia.expessura} cm/ano`);

    textWrap(
      `Tempo para atingir 1/3 da altura útil: ${
        lagoaAnaerobia.tempo1terco
          ? lagoaAnaerobia.tempo1terco.toFixed(1)
          : "N/A"
      } ano(s)`,
    );
  }

  /* ================= LAGOA FACULTATIVA ================= */

  title("Lagoa Facultativa");

  text(
    `Carga afluente afluente à lagoa facultativa: ${lagoaFacultativa.CargaFacultativa} kgDBO/d`,
  );
  text(
    `Área requerida: ${lagoaFacultativa.areaTotalFacultativa.toFixed(3)} ha`,
  );
  text(
    `Área individual para cada lagoa facultativa: ${lagoaFacultativa.areaLagoaFacultativaIndividual.toFixed(
      1,
    )} m²`,
  );
  text(
    `Volume resultante resultante da lagoa facultativa: ${(
      lagoaFacultativa.volumeResultanteFacultativa / 1000
    ).toFixed(3)} m³`,
  );
  text(
    `Tempo de detenção resultante: ${lagoaFacultativa.tempoDetencaoFacultativa.toFixed(
      2,
    )} dias`,
  );
  text(`Correção para temperatura local: ${lagoaFacultativa.kt} d-¹`);
  text(
    `Estimativa da DBO solúvel efluente: ${lagoaFacultativa.s.toFixed(0)} mg/l`,
  );
  text(
    `Estimativa da DBO particulada efluente: ${lagoaFacultativa.DBO5Particulada} mgDBO/l`,
  );
  text(
    `DBO total efluente: ${lagoaFacultativa.DBOTotalAfluenteFacultativa} mg/l`,
  );
  text(
    `Eficiência da lagoa facultativa: ${lagoaFacultativa.DBO5Particulada} %`,
  );

  /* ================= LAGOA DE MATURAÇÃO ================= */

  if (maturacaoCalculated && lagoaMaturacao) {
    text("\n");
    text("\n");
    title("Lagoa de Maturação");

    text(
      `Remoção de coliformes após facultativa: ${lagoaMaturacao.remocaoColiformes} CF/100 ml`,
    );
    text(`Volume das lagoas: ${lagoaMaturacao.volumeCadaLagoaMaturacao} m³`);
    text(`Área superficial: ${lagoaMaturacao.areaSuperficialCadaLagoa} m²`);
    text(`Área superficial total: ${lagoaMaturacao.areaSuperficialTotal} m²`);
    text(`Número de dispersão: ${lagoaMaturacao.D}`);
    text(`Coeficiente de decaimento bacteriano: ${lagoaMaturacao.kb} d-¹`);
    text(
      `Coeficiente de decaimento bacteriano para temperatura local: ${lagoaMaturacao.kbT} d-¹`,
    );
    text(
      `Concentração de coliformes após maturação 1: ${lagoaMaturacao.NttExpandido} CF/100 ml`,
    );
    text(
      `Eficiência das lagoas: ${lagoaMaturacao.eFicienciaSerieLagoaPorcentagem} %`,
    );
    text(
      `Concentração de coliformes após maturação 2: ${lagoaMaturacao.concentracaoColiformesEfluenteFinal}`,
    );
    text(
      `Eficiência de remoção global: ${lagoaMaturacao.eficienciaRemocaoGlobalPorcentagem} %`,
    );
    text(
      `Concentração efluente pós tratamento secundário: ${lagoaMaturacao.concentracaoOvosEfluenteReatorUASB} ovos/l`,
    );
    text(
      `Eficiência de remoção global dos ovos: ${lagoaMaturacao.eficienciaRemocaoGlobalHelmitosPorcentagem} %`,
    );
    text(
      `Eficiência global de remoção de helmintos: ${lagoaMaturacao.eficienciaGlobalPorcentagem} %`,
    );
    text(
      `Unidades log removidas: ${lagoaMaturacao.unidadeLogRemovida} unidades log removidas`,
    );
  }

  /* ================= SISTEMA AUSTRALIANO ================= */

  if (anaerobiaCalculated) {
    text("\n");
    title("Sistema Australiano");

    text(`Eficiência: ${sistemaAustraliano.eficiencia}%`);
    text(
      `Área útil total: ${sistemaAustraliano.areaTotalAnaerobiaFacultativa} ha`,
    );
    text(`Área total: ${sistemaAustraliano.areaTotal} ha`);
    text(
      `Área per capita: ${sistemaAustraliano.areaPercapitaFacultativa} m²/hab`,
    );

    if (lagoaAnaerobia.dqoDbo !== undefined) {
      let message =
        lagoaAnaerobia.dqoDbo < 2.5
          ? "Baixa – fração biodegradável elevada"
          : lagoaAnaerobia.dqoDbo < 3.5
            ? "Intermediária – fração biodegradável moderada"
            : "Elevada – fração inerte predominante";

      textWrap(`Relação DQO/DBO: ${lagoaAnaerobia.dqoDbo} (${message})`);
    }
  }

  /* ================= LAYOUT ================= */

  if (canvas) {
    text("\n");
    text("\n");
    title("Layout do sistema");

    doc.addImage(
      canvas.toDataURL(),
      "PNG",
      MARGIN_LEFT,
      y,
      pageWidth - MARGIN_LEFT - MARGIN_RIGHT,
      260,
    );
  }

  window.open(doc.output("bloburl"));
};
