import { LagoaAnaerobia } from "../types/LagoaAnaerobia";
import { LagoaFacultativa } from "../types/LagoaFacultativa";
import { LagoasBaseData } from "../types/LagoasBaseData";
import { SistemaAustraliano } from "../types/SistemaAustraliano";
import { LagoaMaturacao } from "../types/LagoaMaturacao";

type TDimensionamento = {
  lagoaAnaerobia: LagoaAnaerobia;
  lagoaFacultativa: LagoaFacultativa;
  sistemaAustraliano: SistemaAustraliano;
  lagoaMaturacao: LagoaMaturacao;
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

  populacaoMaturacao,
  vazaoAfluenteMaturacao,
     
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

        //dados 1
        //const populacaoMaturacao = 10000;
        console.log("populacao: " + populacaoMaturacao);
        //const vazaoAfluenteMaturacao  = 1478;
        console.log("vazao afluente:" + vazaoAfluenteMaturacao);
        const temperaturaMediaMaturacao = 23;
        console.log("temperatura media no mês mais frio: " + temperaturaMediaMaturacao);
        const coliformesFecais = 1 * Math.pow(10,7);
        console.log("coliformes fecais: " + coliformesFecais);
        const ovosHelmintos = 200;
        console.log("ovos de helmintos: " + ovosHelmintos);

        //Remoçao dos coliformes pelo reator UASB
        const reatorUASB = 80;
        const remocaoColiformes = Math.round(coliformesFecais * (1 - reatorUASB/100));
        console.log(remocaoColiformes + " CF/100 ml")

        //Volume das lagoas
        const quantidadeLagoasMaturacao = 4;
        const tempoDetencaoMaturacao = 12 / quantidadeLagoasMaturacao;
        const volumeCadaLagoaMaturacao = tempoDetencaoMaturacao * vazaoAfluenteMaturacao;
        console.log("volume cada lagoa: " + volumeCadaLagoaMaturacao + "m³");

        //dados 2 das dimensões das lagoas
        const profundidadeUtilH = 0.80;
        console.log("profundidade util (fundo ao NA): " + profundidadeUtilH);
       
        const areaSuperficialCadaLagoa = Math.round(volumeCadaLagoaMaturacao / profundidadeUtilH); // aqui que dava dando BO
        console.log("area superficial cada lagoa: " + areaSuperficialCadaLagoa);
       
        const areaSuperficialTotal = areaSuperficialCadaLagoa * quantidadeLagoasMaturacao;
        console.log("area superficial total: " + areaSuperficialTotal);
       
        const comprimentoMaturacao = 148.80;
        console.log("comprimento: " + comprimentoMaturacao);
       
        const larguraMaturacao = 37.20;
        console.log("largura: " + larguraMaturacao);
       
        const profundidadeUtilMaturacao = 0.80;
        console.log("profundidade util: " + profundidadeUtilMaturacao);

        //Concentração de coliformes no efluente final
        //Cálculo segundo o modelo de fluxo disperso
        const D = 1 / (comprimentoMaturacao / larguraMaturacao);
        console.log("D = "+ D);

        //valor do coeficinete de decaimento bacteriano
        const kb = Number((0.542 * Math.pow(profundidadeUtilH, -1.259)).toFixed(2));
        console.log("kb = "+ kb);
       
        // Para temperatura 23 celcius, o valor de Kb é:
        const kbT = Number((kb * Math.pow(1.07, temperaturaMediaMaturacao - 20)).toFixed(2));
        console.log("KbT = "+ kbT);


        //Concentração de coliformes no efluente final
        const a = Number(Math.sqrt(1 + 4 * kbT * (temperaturaMediaMaturacao-20) * D).toFixed(2));
        console.log("a = "+ a);

        
        let euler = 2.718281828459045235360287;
        let d = 0.25;
        //Vê com alysson essa divisão para não ter essa truncagem na linha 243
        const Nt = (remocaoColiformes * (4*1.9*Math.pow(euler, (1/(2*d)))))/(Math.pow((1+1.91), 2)*(Math.pow(euler, (1.9/(2*d))))-(Math.pow(1-1.91, 2))*(Math.pow(euler, (-1.9/(2*d)))))

        const Ntt = Number(String((Number(Nt.toFixed(4))/100000)).slice(0,4));
        const NttExpandido = Ntt * Math.pow(10,5)  
        console.log("Valor de Nt = " + NttExpandido) ;

        const e = ((remocaoColiformes - NttExpandido)) / remocaoColiformes ;
        console.log("valor de e " + e);
        console.log("valor de e na porcentagem " + (100*e).toFixed(0) + "%");
    
        const eFicienciaSerieLagoa = 1 - Math.pow((1 - e), quantidadeLagoasMaturacao)
        console.log("Eficiencia da lagoas em serie: " + eFicienciaSerieLagoa.toFixed(4))
        console.log("valor da porcentagem Eficiencia da lagoas em serie: " + (100*eFicienciaSerieLagoa).toFixed(2) + "%")
        
        const concentracaoColiformesEfluenteFinal = Math.round(remocaoColiformes * (1 - eFicienciaSerieLagoa))
        console.log("Concentração dos coliformes no efluente final: " + concentracaoColiformesEfluenteFinal)
        console.log("Concentração dos coliformes no efluente final expandido: " + (concentracaoColiformesEfluenteFinal / 100).toFixed(1) + " x 10²")
      
        const eficienciaRemocaoGlobal = (coliformesFecais - concentracaoColiformesEfluenteFinal) /coliformesFecais
        console.log("Eficiencia de remoção global: " + eficienciaRemocaoGlobal.toFixed(4))
        console.log("Eficiencia de remoção global por %: " + (eficienciaRemocaoGlobal * 100).toFixed(2) + "%") 
        
        //Remoção de ovos de helmitos
        //1. Reator UASB
        const eficienciaReator = 60
        const concentracaoOvosEfluenteReatorUASB =  ovosHelmintos * (1 - eficienciaReator/100)
        console.log("Concentracao de ovos no efluente do reator UASB: " + concentracaoOvosEfluenteReatorUASB + " ovos/L")

        //2.Lagoas de polimento
        const t = temperaturaMediaMaturacao-20
        const tElevado = (temperaturaMediaMaturacao-20) **2
        const eficienciaRemocaoOvosHelmitos = (100 * (1 - 0.41 * Math.pow(euler, -0.49 * t + 0.0085 * tElevado))) 
        console.log("Eficiencia remocao ovos helmitos: " + eficienciaRemocaoOvosHelmitos.toFixed(1) + "%")
        const eficienciaRemocaoOvosHelmitosPercentual = Number((eficienciaRemocaoOvosHelmitos/100).toFixed(3))
        //console.log(eficienciaRemocaoOvosHelmitosPercentual)

        ////Remoção de ovos de helmitos
        //1. Reator UASB
        //Eficiencia de remoção global
        const eficienciaRemocaoGlobalHelmitos = Number((1 - Math.pow(1 - eficienciaRemocaoOvosHelmitosPercentual, 4)).toFixed(4))
        console.log("Eficiencia remocao global helmitos: " + eficienciaRemocaoGlobalHelmitos)
        const eficienciaRemocaoGlobalHelmitosPorcentagem =  eficienciaRemocaoGlobalHelmitos * 100
        console.log("Eficiencia remocao global helmitos %: " + eficienciaRemocaoGlobalHelmitosPorcentagem + "%")

        const unidadeLogRemovidasLagoa = Math.round(quantidadeLagoasMaturacao * eficienciaRemocaoGlobalHelmitos)
        console.log("Unidade log removidas nas lagoas aproximadamente: " + unidadeLogRemovidasLagoa + " unidades log")

        //A eficiência global (reator UASB + lagoas) é:
        const ovosH = 8 * Math.pow(10,-3) // não sei de onde vem, slide 79
        const eficienciaGlobal = (ovosHelmintos - ovosH) / ovosHelmintos
        console.log("Eficiencia global: " + eficienciaGlobal) 
        const eficienciaGlobalPorcentagem = eficienciaGlobal * 100
        console.log("Eficiencia global %: " + eficienciaGlobalPorcentagem + " %")

        //Em termos de unidades log removidas no sistema
        const unidadeLog = 1 - (eficienciaGlobalPorcentagem / 100);
        const unidadeLogRemovida = (-1 * Math.log10(unidadeLog)).toFixed(0);
        console.log(unidadeLogRemovida)

        console.log("termina aqui")
        
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
    },
    lagoaMaturacao: {
      populacaoMaturacao,
      vazaoAfluenteMaturacao,
      remocaoColiformes,
      
      // temperaturaMediaMaturacao,
      // coliformesFecais,
      // ovosHelmintos,
      // reatorUASB,
      // quantidadeLagoasMaturacao,
      // profundidadeUtilH,
      // comprimentoMaturacao,
      // larguraMaturacao,
      // profundidadeUtilMaturacao,
    }
  };
};
