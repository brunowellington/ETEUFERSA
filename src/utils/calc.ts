export default {
    dimensionamento(populacao:number, vazao_afluente:number, dbo_afluente:number, temperatura:number,  taxa_volumetrica:number, taxa_acumulo:number, lagoasAdotadas: number, proporcao:number, k:number, h_anaerobia:number, h_facultativa:number, dqo:number){        
        // lagoa anaeróbia
        
        // Carga afluente de DBO
        let cargaAnaerobia = dbo_afluente * vazao_afluente; 
        let value
        if(String(cargaAnaerobia).length > 3 ){
            value = String(cargaAnaerobia)[0] + '.'
            value = Number(value + String(cargaAnaerobia).slice(1,String(cargaAnaerobia).length-1)).toFixed(4);
        }
        
        // Cálculo de volume requerido
        let volume = cargaAnaerobia / taxa_volumetrica;

        // Verificação do tempo de detenção
        let tempo = volume / vazao_afluente;
        
        // Determinação da área requerida e dimensões
        let area = volume / h_anaerobia;
        
        // Acúmulo de lodo na lagoa anaeróbia
        let acumulacao_anual = taxa_acumulo * populacao;
        
        // Espessura da camada de lodo em 1 ano
        let expessura = ((acumulacao_anual*1000) * 1) / area; // 1 adotado
        
        // Tempo para se atingir 1/3 da altura útil das lagoas
        let tempo1terco = ((h_anaerobia/3)/ expessura);

        //=========================================================================
        
        // LAGOA FACULTATIVA

        // Carga afluente da lagoa facultativa
        let CargaFacultativa = ((100 - 60)*cargaAnaerobia)/100;

        // adoção de taxas de aplicação superficial
        let aplicacaoSuperficial = 220;

        CargaFacultativa = Number(String(CargaFacultativa).slice(0,3))
        
        let areaTotal_Facultativa = CargaFacultativa/aplicacaoSuperficial;
        
        let areaTotal_Anaerobia = volume/h_anaerobia;
        let at_value
        if(String(areaTotal_Anaerobia).length > 3 ){
            at_value = String(areaTotal_Anaerobia)[0] + '.'
            at_value = Number(at_value + String(areaTotal_Anaerobia).split('.')[0].slice(1,5)).toFixed(3);
            areaTotal_Anaerobia = Number(at_value) * 1000
        }
        areaTotal_Facultativa = Number(areaTotal_Facultativa.toFixed(1));
        //let entrada = 1;
    
        
        let areaLagoaFacultativaIndividual = (areaTotal_Facultativa/lagoasAdotadas)*10000;
        let areaLagoaAnaerobiaIndividual = (areaTotal_Anaerobia/lagoasAdotadas);
        
        
        // let larguraFacultativa = Math.sqrt(areaLagoaFacultativaIndividual);
        // let baseFacultativa = 2*larguraFacultativa;

        if(proporcao === 0){
            proporcao = 2;
        }
       
        const L_anaerobia = Number(Math.sqrt(areaLagoaAnaerobiaIndividual/proporcao).toFixed(2));
        const B_anaerobia = Number((Math.sqrt(areaLagoaAnaerobiaIndividual/proporcao)*proporcao).toFixed(2));
        
        const L_Facultativa = Number(Math.sqrt(areaLagoaFacultativaIndividual/proporcao).toFixed(2));
        const B_Facultativa = Number((Math.sqrt(areaLagoaFacultativaIndividual/proporcao)*proporcao).toFixed(2));
        
        
        let volumeResultante_Facultativa = (Number((areaTotal_Facultativa*10).toFixed(3))*1000) * Number(h_facultativa.toFixed(2));

        let tempoDetencao_facultativa = (Number(volumeResultante_Facultativa.toFixed(3)) / vazao_afluente)/10;

        // valor adotado
        let regimeMistura_facultativa = k;

        // fazendo correção para temperatura de 23 °C
        
        let kt = Number((regimeMistura_facultativa * Math.pow(1.05, temperatura-20)).toFixed(2));

        // estimativa de DBO afluente

        let s = 140/(1+(kt* tempoDetencao_facultativa));

        let DBO5_Particulada = 28;

        let DBOTotalAfluente_facultativa = 31 + DBO5_Particulada;

        let eficiencia = ((dbo_afluente- DBOTotalAfluente_facultativa)* 100/ dbo_afluente);

        //area util total
        let areaTemp = Number((Number('0.'+ String(area).slice(0,4))).toFixed(2));

        let areaTotal_AnaerobiaFacultativa = Number((areaTemp + areaTotal_Facultativa).toFixed(1));

        let areaTotal = Number((areaTotal_AnaerobiaFacultativa + areaTotal_AnaerobiaFacultativa * 0.29).toFixed(1));
        
        let areaPercapita_facultativa = Number(((areaTotal*10000) / (populacao)).toFixed(1));

        //proporção 
        // let b = 3;
        // let l = 1;
        cargaAnaerobia = Number(value)

        expessura = Number((expessura*100).toFixed(0))
        eficiencia = Number(eficiencia.toFixed(2));
        volume = Number(String(volume).slice(0,4));
        let dqo_dbo = -1
        
        if(dqo > 0){
           dqo_dbo = Number((dqo / dbo_afluente).toFixed(2));
        }
        

        let vet1 = [cargaAnaerobia, volume, tempo, area, acumulacao_anual, expessura, tempo1terco, L_anaerobia, B_anaerobia, dqo_dbo];
        let vet2 = [CargaFacultativa, areaTotal_Facultativa, areaLagoaFacultativaIndividual, volumeResultante_Facultativa, tempoDetencao_facultativa, kt, s, DBO5_Particulada, DBOTotalAfluente_facultativa, eficiencia, areaTotal_AnaerobiaFacultativa, areaTotal, areaPercapita_facultativa, L_Facultativa, B_Facultativa];

        return [vet1, vet2];
    }
}