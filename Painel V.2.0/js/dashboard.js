/********************************************************************
 * Painel da Frota do CBMMG
 * dashboard.js
 * Versão 2.0
 *
 * Responsável apenas pelos indicadores (cards).
 ********************************************************************/

"use strict";

//==================================================
// Atualiza todos os indicadores
//==================================================

function atualizarIndicadores(dados) {

    atualizarTotal(dados);

    atualizarDisponiveis(dados);

    atualizarManutencao(dados);

    atualizarDescarga(dados);

    atualizarDisponibilidade(dados);

    atualizarIdadeMedia(dados);

    atualizarSubclasse(dados);

    atualizarCombustivel(dados);

}

//==================================================
// Total da Frota
//==================================================

function atualizarTotal(dados) {

    atualizarTexto(

        "totalFrota",

        inteiro(dados.length)

    );

}

//==================================================
// Disponíveis
//==================================================

function atualizarDisponiveis(dados) {

    const total = dados.filter(function (v) {

        return v.situacao === SITUACAO.DISPONIVEL;

    }).length;

    atualizarTexto(

        "disponiveis",

        inteiro(total)

    );

}

//==================================================
// Em Manutenção
//==================================================

function atualizarManutencao(dados) {

    const total = dados.filter(function (v) {

        return v.situacao === SITUACAO.MANUTENCAO;

    }).length;

    atualizarTexto(

        "manutencao",

        inteiro(total)

    );

}

//==================================================
// Processo de Descarga
//==================================================

function atualizarDescarga(dados) {

    const total = dados.filter(function (v) {

        return v.situacao === SITUACAO.DESCARGA;

    }).length;

    atualizarTexto(

        "descarga",

        inteiro(total)

    );

}

//==================================================
// Disponibilidade Média
//==================================================

function atualizarDisponibilidade(dados) {

    if (dados.length === 0) {

        atualizarTexto(

            "disponibilidade",

            "---"

        );

        return;

    }

    const disponibilidade = media(

        dados,

        "indiceDisponibilidade"

    );

    atualizarTexto(

        "disponibilidade",

        disponibilidade.toFixed(2) + "%"

    );

}

//==================================================
// Idade Média
//==================================================

function atualizarIdadeMedia(dados) {

    if (dados.length === 0) {

        atualizarTexto(

            "idadeMedia",

            "---"

        );

        return;

    }

    const idade = media(

        dados,

        "idade"

    );

    atualizarTexto(

        "idadeMedia",

        idade.toFixed(1) + " anos"

    );

}

//==================================================
// Subclasse
//==================================================

function atualizarSubclasse(dados) {

    if (dados.length !== 1) {

        atualizarTexto(

            "subclasse",

            "---"

        );

        return;

    }

    atualizarTexto(

        "subclasse",

        dados[0].subclasse

    );

}

//==================================================
// Tipo de Combustível
//==================================================

function atualizarCombustivel(dados) {

    if (dados.length !== 1) {

        atualizarTexto(

            "combustivel",

            "---"

        );

        return;

    }

    atualizarTexto(

        "combustivel",

        dados[0].combustivel

    );

}