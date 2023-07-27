export type LagoasBaseData = {
  populacao: number;
  vazaoAfluente: number;
  DBOAfluente: number;
  temperatura: number;
  taxaVolumetrica: number;
  taxaAcumulo: number;
  quantidadeLagoas: number;
  proporcao: number;
  k: number;
  dqo: number;
  hAnaerobia?: number;
  hFacultativa: number;

   //aqui vai os dados que ta sendo atribuidos
  coliformesFecais?: number;
  ovosHelmintos?: number;
  quantidadeLagoasMaturacao?: number;
  profundidadeUtilH?: number;
  comprimentoMaturacao?: number;
  larguraMaturacao?: number;
  valorTempoDetencao?: number;
  eficienciaRemocaoDBO?: number;
  eficienciaRemocaoOvosHelmitoss?: number;
};
