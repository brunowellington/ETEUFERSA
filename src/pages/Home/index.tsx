import React, { useState } from "react";
import PageTemplate from "../Template";
import {
  Container,
  Painel,
  Title,
  TopInputs,
  InputsDown,
  Item,
  Label,
  BottomInputs,
  ButtonCalc,
  CalcMaturacao,
  Toggle,
  Slider,
  CalcFacultativa,
} from "./styles";
import Input from "../../components/Input";
import Result from "../Result";
import "antd/dist/antd.css";
import { message } from "antd";
import { LagoasBaseData } from "../../types/LagoasBaseData";

type ValuesInNumber<T extends object> = Record<keyof T, number>;
type ValuesInString<T extends object> = Record<keyof T, string>;

type LagoasBaseStringData = ValuesInString<LagoasBaseData>;

// const emptyLagoasBaseData: LagoasBaseData = {
//   populacao: 20000,
//   vazaoAfluente: 3000,
//   DBOAfluente: 350,
//   temperatura: 23,
//   taxaVolumetrica: 0.15,
//   taxaAcumulo: 0.04,
//   quantidadeLagoas: 2,
//   proporcao: 2,
//   k: 0.27,
//   dqo: 500,
//   aplicacaoSuperficial: 220,
//   hAnaerobia: 4.5,
//   hFacultativa: 1.8,
// };

const emptyLagoasBaseData: LagoasBaseData = {
  populacao: 0,
  vazaoAfluente: 0,
  DBOAfluente: 0,
  temperatura: 0,
  taxaVolumetrica: 0,
  taxaAcumulo: 0,
  quantidadeLagoas: 0,
  proporcao: 0,
  proporcaoAnaerobia: 0,
  k: 0,
  dqo: 0,
  aplicacaoSuper: 0,
  eficienciaAnaerobia: 0,
  concentracaoSSefluente: 0,
  concentracaoSSDBO5: 0,
  hAnaerobia: 0,
  hFacultativa: 0,

  //aqui vai as variaveis que recebe atribuição
  coliformesFecais: 0,
  ovosHelmintos: 0,
  quantidadeLagoasMaturacao: 0,
  larguraMaturacao: 0,
  comprimentoMaturacao: 0,
  profundidadeUtilH: 0,
  valorTempoDetencao: 0,
  eficienciaRemocaoDBO: 0,
  eficienciaRemocaoOvosHelmitoss: 0,
};

const emptyLagoasBaseStringData: LagoasBaseStringData = {
  populacao: "",
  vazaoAfluente: "",
  DBOAfluente: "",
  temperatura: "",
  taxaVolumetrica: "",
  taxaAcumulo: "",
  quantidadeLagoas: "",
  proporcao: "",
  proporcaoAnaerobia: "",
  k: "",
  dqo: "",
  aplicacaoSuper: "",
  concentracaoSSefluente: "",
  concentracaoSSDBO5: "",
  eficienciaAnaerobia: "",
  hAnaerobia: "",
  hFacultativa: "",

  // colocar os dados fixos de maturação
  //aqui vai as variaveis que recebe atribuição
  //populacaoMaturacao: "10000",
  //vazaoAfluenteMaturacao: "1478",
  //temperaturaMediaMaturacao: "23",
  coliformesFecais: "",
  ovosHelmintos: "",
  quantidadeLagoasMaturacao: "",
  larguraMaturacao: "",
  comprimentoMaturacao: "",
  profundidadeUtilH: "",
  valorTempoDetencao: "",
  eficienciaRemocaoDBO: "",
  eficienciaRemocaoOvosHelmitoss: "",
};

const transformValuesInNumber = <T extends Record<string, string>>(
  target: T
) => {
  const entires = Object.entries(target) as Array<[keyof T, string]>;
  return entires.reduce<ValuesInNumber<T>>((obj, [key, value]) => {
    obj[key] = Number(value);
    return obj;
  }, {} as ValuesInNumber<T>);
};

function Home() {
  const [toggle, setToggle] = useState(false);
  const [toggleFacultativa, setToggleFacultativa] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [lagoasBaseData, setLagoasBaseData] = useState<LagoasBaseStringData>(
    emptyLagoasBaseStringData
  );
  const [computedLagoasBaseData, setComputedLagoasBaseData] =
    useState<LagoasBaseData>(emptyLagoasBaseData);

  function updateLagoasBaseData(value: Partial<LagoasBaseStringData>) {
    setLagoasBaseData((prev) => ({ ...prev, ...value }));
  }

  const success = () => {
    message.success({
      content: "Dimensionamento efetuado com sucesso!",
      className: "custom-class",
      style: {
        marginTop: "10vh",
      },
    });
  };

  const error = () => {
    message.error({
      content: "Preencha os campos corretamente!",
      className: "custom-class",
      style: {
        marginTop: "10vh",
      },
    });
  };

  const setToggleFacultativaValue = () => {
    setToggleFacultativa(!toggleFacultativa);
  };

  const setToggleValue = () => {
    setToggle(!toggle);
    if (toggle) {
      lagoasBaseData.coliformesFecais = "";
      lagoasBaseData.ovosHelmintos = "";
      lagoasBaseData.quantidadeLagoasMaturacao = "";
      lagoasBaseData.larguraMaturacao = "";
      lagoasBaseData.comprimentoMaturacao = "";
      lagoasBaseData.profundidadeUtilH = "";
      lagoasBaseData.valorTempoDetencao = "";
      lagoasBaseData.eficienciaRemocaoDBO = "";
      lagoasBaseData.eficienciaRemocaoOvosHelmitoss = "";
    } else {
      lagoasBaseData.coliformesFecais = "";
      lagoasBaseData.ovosHelmintos = "";
      lagoasBaseData.quantidadeLagoasMaturacao = "";
      lagoasBaseData.larguraMaturacao = "";
      lagoasBaseData.comprimentoMaturacao = "";
      lagoasBaseData.profundidadeUtilH = "";
      lagoasBaseData.valorTempoDetencao = "";
      lagoasBaseData.eficienciaRemocaoDBO = "";
      lagoasBaseData.eficienciaRemocaoOvosHelmitoss = "";
    }
  };

  function calcular() {
    let obj;

    if (toggle) {
      obj = { ...lagoasBaseData };
    } else {
      if (!toggleFacultativa) {
        let {
          populacao,
          vazaoAfluente,
          DBOAfluente,
          temperatura,
          taxaVolumetrica,
          taxaAcumulo,
          quantidadeLagoas,
          proporcao,
          proporcaoAnaerobia,
          k,
          dqo,
          aplicacaoSuper,
          eficienciaAnaerobia,
          concentracaoSSefluente,
          concentracaoSSDBO5,
          hAnaerobia,
          hFacultativa,
        } = lagoasBaseData;

        obj = {
          populacao,
          vazaoAfluente,
          DBOAfluente,
          temperatura,
          taxaVolumetrica,
          taxaAcumulo,
          quantidadeLagoas,
          proporcao,
          proporcaoAnaerobia,
          k,
          dqo,
          aplicacaoSuper,
          eficienciaAnaerobia,
          concentracaoSSefluente,
          concentracaoSSDBO5,
          hAnaerobia,
          hFacultativa,
        };
      } else {
        // Aqui já incluí todos os campos, mas com os que devem ser zerados substituídos
        let {
          populacao,
          vazaoAfluente,
          DBOAfluente,
          temperatura,
          quantidadeLagoas,
          proporcao,
          k,
          dqo,
          aplicacaoSuper,
          concentracaoSSefluente,
          concentracaoSSDBO5,
          hFacultativa,
        } = lagoasBaseData;

        obj = {
          populacao,
          vazaoAfluente,
          DBOAfluente,
          temperatura,
          taxaVolumetrica: "0", // Zera aqui
          taxaAcumulo: "0", // Zera aqui
          quantidadeLagoas,
          proporcao,
          proporcaoAnaerobia: "0", // Zera aqui
          k,
          dqo,
          aplicacaoSuper,
          eficienciaAnaerobia: "0", // Zera aqui
          concentracaoSSefluente,
          concentracaoSSDBO5,
          hAnaerobia: "0", // Zera aqui
          hFacultativa,
        };
      }
    }

    const validatedValues = Object.values(obj).every(
      (val) => val !== "" && Number(val) >= 0
    );
    obj.hAnaerobia = lagoasBaseData.hAnaerobia;
    let { hAnaerobia } = lagoasBaseData;
    obj = { ...obj, hAnaerobia };

    if (validatedValues) {
      // const [vet1, vet2] = calc.dimensionamento(20.000, 3.000, 350, 23, 4.5, 1.8,  0.15, 0.04,2, 3);
      const numberData = transformValuesInNumber(obj);
      setComputedLagoasBaseData(numberData);
      setCalculated(true);
      success();
    } else {
      error();
      console.log("Valores recebidos para validação:", obj);
    }
  }

  return (
    <PageTemplate imageSrc={true} title={true} topBar={true}>
      <Container>
        <Painel>
          <Title>Painel de entrada de dados</Title>
          <TopInputs>
            <Item>
              <Label>
                <span className="tooltiptext">População em habitantes</span>
                População em habitantes <sup>🛈</sup>
              </Label>
              <Input
                type="number"
                value={lagoasBaseData.populacao}
                setValue={(e) => updateLagoasBaseData({ populacao: e })}
              />
            </Item>
            <Item>
              <Label>
                <span className="tooltiptext">
                  Vazão na entrada da ETE em m³/dia
                </span>
                Vazão afluente <sup>🛈</sup>
              </Label>
              <Input
                type="number"
                value={lagoasBaseData.vazaoAfluente}
                setValue={(e) => updateLagoasBaseData({ vazaoAfluente: e })}
              />
            </Item>
            <Item>
              <Label>
                <span className="tooltiptext">
                  Demanda Bioquímica de Oxigênio na entrada da ETE em mg³/L
                </span>
                DBO afluente <sup>🛈</sup>
              </Label>
              <Input
                type="number"
                value={lagoasBaseData.DBOAfluente}
                setValue={(e) => updateLagoasBaseData({ DBOAfluente: e })}
              />
            </Item>
            <Item>
              <Label>
                <span className="tooltiptext">
                  Temperatura do esgoto no ambiente em °C
                </span>
                Temperatura em °C <sup>🛈</sup>
              </Label>
              <Input
                type="number"
                value={lagoasBaseData.temperatura}
                setValue={(e) => updateLagoasBaseData({ temperatura: e })}
              />
            </Item>

            {!toggleFacultativa && (
              <Item>
                <Label>
                  <span className="tooltiptext">
                    Aplicadas as lagoas anaeróbias em KgDBO/m³dia
                  </span>
                  Taxa volumétrica <sup>🛈</sup>
                </Label>
                <Input
                  type="number"
                  value={lagoasBaseData.taxaVolumetrica}
                  setValue={(e) => updateLagoasBaseData({ taxaVolumetrica: e })}
                />
              </Item>
            )}

            {!toggleFacultativa && (
              <Item>
                <Label>
                  <span className="tooltiptext">Em m³/hab/ano</span>
                  Taxa de acúmulo <sup>🛈</sup>
                </Label>
                <Input
                  type="number"
                  value={lagoasBaseData.taxaAcumulo}
                  setValue={(e) => updateLagoasBaseData({ taxaAcumulo: e })}
                />
              </Item>
            )}
            <Item>
              <Label>
                <span className="tooltiptext">
                  N° de lagoas facultativas em paralelo por sistema único ou
                  lagoas anaeróbias e facultativas em série por sistema
                  australiano
                </span>
                Quantidade de lagoas <sup>🛈</sup>
              </Label>
              <Input
                type="number"
                value={lagoasBaseData.quantidadeLagoas}
                setValue={(e) => updateLagoasBaseData({ quantidadeLagoas: e })}
              />
            </Item>
            <Item>
              <Label>
                <span className="tooltiptext">
                  Proporção adotada entre as dimensões Largura/Comprimento
                </span>
                Proporção/1 Facultativa <sup>🛈</sup>
              </Label>
              <Input
                type="number"
                value={lagoasBaseData.proporcao}
                setValue={(e) => updateLagoasBaseData({ proporcao: e })}
              />
            </Item>

            {!toggleFacultativa && (
              <Item>
                <Label>
                  <span className="tooltiptext">
                    Proporção adotada entre as dimensões Largura/Comprimento
                  </span>
                  Proporção/1 Anaerobia <sup>🛈</sup>
                </Label>
                <Input
                  type="number"
                  value={lagoasBaseData.proporcaoAnaerobia}
                  setValue={(e) =>
                    updateLagoasBaseData({ proporcaoAnaerobia: e })
                  }
                />
              </Item>
            )}

            <Item>
              <Label>
                <span className="tooltiptext">
                  Correção do coeficiente de remoção de DBO em 1/dia
                </span>
                K <sup>🛈</sup>
              </Label>
              <Input
                type="number"
                value={lagoasBaseData.k}
                setValue={(e) => updateLagoasBaseData({ k: e })}
              />
            </Item>
            <Item>
              <Label>
                <span className="tooltiptext">
                  Demanda química de oxigênio expressa em mg/L
                </span>
                DQO <sup>🛈</sup>
              </Label>
              <Input
                type="number"
                value={lagoasBaseData.dqo}
                setValue={(e) => updateLagoasBaseData({ dqo: e })}
              />
            </Item>
            <Item>
              <Label>
                <span className="tooltiptext">
                  Taxa de aplicação superficial em kgDBO/ha.d
                </span>
                Taxa de aplicação superficial <sup>🛈</sup>
              </Label>
              <Input
                type="number"
                value={lagoasBaseData.aplicacaoSuper}
                setValue={(e) => updateLagoasBaseData({ aplicacaoSuper: e })}
              />
            </Item>

            {!toggleFacultativa && (
              <Item>
                <Label>
                  <span className="tooltiptext">Em %</span>
                  Eficiência Anaerobia <sup>🛈</sup>
                </Label>
                <Input
                  type="number"
                  value={lagoasBaseData.eficienciaAnaerobia}
                  setValue={(e) =>
                    updateLagoasBaseData({ eficienciaAnaerobia: e })
                  }
                />
              </Item>
            )}

            <Item>
              <Label title="Concentração em sólidos em suspensão do efluente">
                <span className="tooltiptext">
                  {" "}
                  Concentração sólidos em suspensão do efluente em mg/L{" "}
                </span>
                Concentração SS do efluente<sup>🛈</sup>
              </Label>
              <Input
                type="number"
                value={lagoasBaseData.concentracaoSSefluente}
                setValue={(e) =>
                  updateLagoasBaseData({ concentracaoSSefluente: e })
                }
              />
            </Item>

            <Item>
              <Label title="Concentração em sólidos em suspensão/DBO5">
                <span className="tooltiptext">
                  {" "}
                  Concentração sólidos em suspensão/DBO5{" "}
                </span>
                Concentração SS/DBO5 <sup>🛈</sup>
              </Label>
              <Input
                type="number"
                value={lagoasBaseData.concentracaoSSDBO5}
                setValue={(e) =>
                  updateLagoasBaseData({ concentracaoSSDBO5: e })
                }
              />
            </Item>
          </TopInputs>
          <div
            style={{
              margin: "20px 0",
              color: "#000000",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            Adote profundidades em m para as lagoas de estabilização:{" "}
          </div>
          <BottomInputs>
            {!toggleFacultativa && (
              <Item>
                <Label>
                  <span className="tooltiptext">
                    Recomendado entre 2,5 a 5,0 m
                  </span>
                  Anaeróbia <sup>🛈</sup>
                </Label>
                <Input
                  type="number"
                  disabled={toggleFacultativa ? true : false}
                  value={lagoasBaseData.hAnaerobia}
                  setValue={(e) => updateLagoasBaseData({ hAnaerobia: e })}
                />
              </Item>
            )}
            <Item>
              <Label>
                <span className="tooltiptext">
                  Recomendado entre 1,5 a 3,0 m
                </span>
                Facultativa <sup>🛈</sup>
              </Label>
              <Input
                type="number"
                value={lagoasBaseData.hFacultativa}
                setValue={(e) => updateLagoasBaseData({ hFacultativa: e })}
              />
            </Item>
          </BottomInputs>

          <CalcFacultativa>
            <Toggle>
              <Label>
                <span className="tooltiptext">
                  Ao ativar o toggle, você estará considerando somente os dados
                  de entrada acima para calcular a lagoa Facultativa
                </span>
                <sup>🛈</sup>
              </Label>
              <input
                type="checkbox"
                onClick={() => setToggleFacultativaValue()}
              />
              <Slider className="round"></Slider>
            </Toggle>
            <h2>Considere somente Facultativa?</h2>
          </CalcFacultativa>

          <CalcMaturacao>
            <Toggle>
              <input type="checkbox" onClick={() => setToggleValue()} />
              <Slider className="round"></Slider>
            </Toggle>
            <h2>Deseja calcular Lagoa de Maturação?</h2>
          </CalcMaturacao>
          {toggle ? (
            <InputsDown>
              <Item>
                <Label>
                  <span className="tooltiptext">
                    Concentração de coliformes fecais em CF/100 mL no esgoto
                    bruto
                  </span>
                  Coliformes fecais <sup>🛈</sup>
                </Label>
                <Input
                  type="number"
                  value={lagoasBaseData.coliformesFecais}
                  setValue={(e) =>
                    updateLagoasBaseData({ coliformesFecais: e })
                  }
                />
              </Item>
              <Item>
                <Label>
                  <span className="tooltiptext">
                    Concentração de ovos helmintos no esgoto bruto em ovos/L
                  </span>
                  Ovos helmintos <sup>🛈</sup>
                </Label>
                <Input
                  type="number"
                  value={lagoasBaseData.ovosHelmintos}
                  setValue={(e) => updateLagoasBaseData({ ovosHelmintos: e })}
                />
              </Item>
              <Item>
                <Label>
                  <span className="tooltiptext">
                    Número de lagoas de maturação em série
                  </span>
                  Lagoas em série <sup>🛈</sup>
                </Label>
                <Input
                  type="number"
                  value={lagoasBaseData.quantidadeLagoasMaturacao}
                  setValue={(e) =>
                    updateLagoasBaseData({ quantidadeLagoasMaturacao: e })
                  }
                />
              </Item>
              <Item>
                <Label>
                  <span className="tooltiptext">
                    Profundidade útil da lagoa de maturação em metros
                  </span>
                  Profundidade útil <sup>🛈</sup>
                </Label>
                <Input
                  type="number"
                  value={lagoasBaseData.profundidadeUtilH}
                  setValue={(e) =>
                    updateLagoasBaseData({ profundidadeUtilH: e })
                  }
                />
              </Item>
              <Item>
                <Label>
                  <span className="tooltiptext">
                    Comprimento da lagoa de maturação em metros
                  </span>
                  Comprimento <sup>🛈</sup>
                </Label>
                <Input
                  type="number"
                  value={lagoasBaseData.comprimentoMaturacao}
                  setValue={(e) =>
                    updateLagoasBaseData({ comprimentoMaturacao: e })
                  }
                />
              </Item>
              <Item>
                <Label>
                  <span className="tooltiptext">
                    Largura da lagoa de maturação em metros
                  </span>
                  Largura <sup>🛈</sup>
                </Label>
                <Input
                  type="number"
                  value={lagoasBaseData.larguraMaturacao}
                  setValue={(e) =>
                    updateLagoasBaseData({ larguraMaturacao: e })
                  }
                />
              </Item>
              <Item>
                <Label>
                  <span className="tooltiptext">
                    Tempo de detenção total em dias
                  </span>
                  Tempo de detenção <sup>🛈</sup>
                </Label>
                <Input
                  type="number"
                  value={lagoasBaseData.valorTempoDetencao}
                  setValue={(e) =>
                    updateLagoasBaseData({ valorTempoDetencao: e })
                  }
                />
              </Item>

              <Item>
                <Label>
                  <span className="tooltiptext">Em %</span>
                  Eficiência típica de remoção de DBO <sup>🛈</sup>
                </Label>
                <Input
                  type="number"
                  value={lagoasBaseData.eficienciaRemocaoDBO}
                  setValue={(e) =>
                    updateLagoasBaseData({ eficienciaRemocaoDBO: e })
                  }
                />
              </Item>

              <Item>
                <Label>
                  <span className="tooltiptext">Em %</span>
                  Eficiência típica de remoção de ovos <sup>🛈</sup>
                </Label>
                <Input
                  type="number"
                  value={lagoasBaseData.eficienciaRemocaoOvosHelmitoss}
                  setValue={(e) =>
                    updateLagoasBaseData({ eficienciaRemocaoOvosHelmitoss: e })
                  }
                />
              </Item>
            </InputsDown>
          ) : null}
          <ButtonCalc id="resultados">
            <a href="#resultados" onClick={calcular}>
              Dimensionar
            </a>
          </ButtonCalc>
        </Painel>
        {calculated ? (
          // <Result vet1={vet1} vet2={vet2} populacao={populacao_Calculated} vazao={vazaoAfluente_Calculated} DBOAfluente={DBOAfluente_Calculated} temperatura={temperatura_Calculated} taxaVolumetrica={taxaVolumetrica_Calculated} taxaAcumulo={taxaAcumulo_Calculated} quantidadeLagoas={quantidadeLagoas_Calculated} proporcao={proporcao_Calculated} k={k_Calculated} hAnaerobia={hAnaerobia_Calculated} hFacultativa={hFacultativa_Calculated} dqo={dqo_Calculated}/>
          <Result lagoasBaseData={computedLagoasBaseData} />
        ) : null}
      </Container>
    </PageTemplate>
  );
}

export default Home;
