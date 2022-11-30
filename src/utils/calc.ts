import { LagoaAnaerobia } from "../types/LagoaAnaerobia";
import { LagoaFacultativa } from "../types/LagoaFacultativa";
import { LagoasBaseData } from "../types/LagoasBaseData";
import { SistemaAustraliano } from "../types/SistemaAustraliano";

type TDimensionamento = {
  lagoaAnaerobia: LagoaAnaerobia;
  lagoaFacultativa: LagoaFacultativa;
  sistemaAustraliano: SistemaAustraliano;
};

export const dimensionamento = ({
  populacao,
  vazaoAfluente,
  DBOAfluente,
  temperatura,
  taxaVolumetrica,
  taxaAcumulo,
  quantidadeLagoas,
  proporcao,
  k,
  hAnaerobia,
  hFacultativa,
  dqo,
}: LagoasBaseData): TDimensionamento => {
  // lagoa anaeróbia

  // Carga afluente de DBO
  let cargaAnaerobia = DBOAfluente * vazaoAfluente;
  let value;
  if (String(cargaAnaerobia).length > 3) {
    value = String(cargaAnaerobia)[0] + ".";
    value = Number(
      value + String(cargaAnaerobia).slice(1, String(cargaAnaerobia).length - 1)
    ).toFixed(4);
  }

  // Cálculo de volume requerido
  let volume = cargaAnaerobia / taxaVolumetrica;

  // Verificação do tempo de detenção
  let tempo = volume / vazaoAfluente;

  // Determinação da área requerida e dimensões
  let area = volume / hAnaerobia;

  // Acúmulo de lodo na lagoa anaeróbia
  let acumulacao_anual = taxaAcumulo * populacao;

  // Espessura da camada de lodo em 1 ano
  let expessura = (acumulacao_anual * 1000 * 1) / area; // 1 adotado

  // Tempo para se atingir 1/3 da altura útil das lagoas
  let tempo1terco = hAnaerobia / 3 / expessura;

  //=========================================================================

  // LAGOA FACULTATIVA

  // Carga afluente da lagoa facultativa
  let CargaFacultativa = ((100 - 60) * cargaAnaerobia) / 100;

  // adoção de taxas de aplicação superficial
  let aplicacaoSuperficial = 220;

  CargaFacultativa = Number(String(CargaFacultativa).slice(0, 3));

  let areaTotalFacultativa = CargaFacultativa / aplicacaoSuperficial;

  let areaTotal_Anaerobia = volume / hAnaerobia;
  let at_value;
  if (String(areaTotal_Anaerobia).length > 3) {
    at_value = String(areaTotal_Anaerobia)[0] + ".";
    at_value = Number(
      at_value + String(areaTotal_Anaerobia).split(".")[0].slice(1, 5)
    ).toFixed(3);
    areaTotal_Anaerobia = Number(at_value) * 1000;
  }
  areaTotalFacultativa = Number(areaTotalFacultativa.toFixed(1));
  //let entrada = 1;

  let areaLagoaFacultativaIndividual =
    (areaTotalFacultativa / quantidadeLagoas) * 10000;
  let areaLagoaAnaerobiaIndividual = areaTotal_Anaerobia / quantidadeLagoas;

  // let larguraFacultativa = Math.sqrt(areaLagoaFacultativaIndividual);
  // let baseFacultativa = 2*larguraFacultativa;

  if (proporcao === 0) {
    proporcao = 2;
  }

  const LAnaerobia = Number(
    Math.sqrt(areaLagoaAnaerobiaIndividual / proporcao).toFixed(2)
  );
  const BAnaerobia = Number(
    (Math.sqrt(areaLagoaAnaerobiaIndividual / proporcao) * proporcao).toFixed(2)
  );

  const LFacultativa = Number(
    Math.sqrt(areaLagoaFacultativaIndividual / proporcao).toFixed(2)
  );
  const BFacultativa = Number(
    (Math.sqrt(areaLagoaFacultativaIndividual / proporcao) * proporcao).toFixed(
      2
    )
  );

  let volumeResultanteFacultativa =
    Number((areaTotalFacultativa * 10).toFixed(3)) *
    1000 *
    Number(hFacultativa.toFixed(2));

  let tempoDetencaoFacultativa =
    Number(volumeResultanteFacultativa.toFixed(3)) / vazaoAfluente / 10;

  // valor adotado
  let regimeMistura_facultativa = k;

  // fazendo correção para temperatura de 23 °C

  let kt = Number(
    (regimeMistura_facultativa * Math.pow(1.05, temperatura - 20)).toFixed(2)
  );

  // estimativa de DBO afluente

  let s = 140 / (1 + kt * tempoDetencaoFacultativa);

  let DBO5Particulada = 28;

  let DBOTotalAfluenteFacultativa = 31 + DBO5Particulada;

  let eficiencia =
    ((DBOAfluente - DBOTotalAfluenteFacultativa) * 100) / DBOAfluente;

  //area util total
  let areaTemp = Number(Number("0." + String(area).slice(0, 4)).toFixed(2));

  let areaTotalAnaerobiaFacultativa = Number(
    (areaTemp + areaTotalFacultativa).toFixed(1)
  );

  let areaTotal = Number(
    (
      areaTotalAnaerobiaFacultativa +
      areaTotalAnaerobiaFacultativa * 0.29
    ).toFixed(1)
  );

  let areaPercapitaFacultativa = Number(
    ((areaTotal * 10000) / populacao).toFixed(1)
  );

  //proporção
  // let b = 3;
  // let l = 1;
  cargaAnaerobia = Number(value);

  expessura = Number((expessura * 100).toFixed(0));
  eficiencia = Number(eficiencia.toFixed(0));
  volume = Number(String(volume).slice(0, 4));
  let dqoDbo = -1;

  if (dqo > 0) {
    dqoDbo = Number((dqo / DBOAfluente).toFixed(2));
  }


    //   =================================================================================================
    //   calculo Maturação

    //   if(calculaMaturacao) {

    //     const largura = 130

    //     console.log(largura)

    //   }

  return {
    lagoaAnaerobia: {
      cargaAnaerobia,
      volume,
      tempo,
      area,
      acumulacao_anual,
      expessura,
      tempo1terco,
      LAnaerobia,
      BAnaerobia,
      dqoDbo,
    },
    lagoaFacultativa: {
      CargaFacultativa,
      areaTotalFacultativa,
      areaLagoaFacultativaIndividual,
      volumeResultanteFacultativa,
      tempoDetencaoFacultativa,
      kt,
      s,
      DBO5Particulada,
      DBOTotalAfluenteFacultativa,
      LFacultativa,
      BFacultativa,
    },
    sistemaAustraliano: {
      eficiencia,
      areaTotalAnaerobiaFacultativa,
      areaTotal,
      areaPercapitaFacultativa,
    }
  };
};
