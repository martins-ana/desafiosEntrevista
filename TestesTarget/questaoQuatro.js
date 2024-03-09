const faturamento = [
    {
        sigla: "SP",
        valor: 67836.43
    },
    {
        sigla: "RJ",
        valor: 36678.66
    },
    {
        sigla: "MG",
        valor: 29229.88
    },
    {
        sigla: "ES",
        valor: 27165.48
    },
    {
        sigla: "Outros",
        valor: 19849.53
    }
]

let valorTotal = 0;

for (let index = 0; index < faturamento.length; index++) {
    const estado = faturamento[index];

    valorTotal = valorTotal + estado.valor
}

function verificaPorcentagem(valor) {
    return ((valor / valorTotal) * 100).toFixed(2);
}

for (let index = 0; index < faturamento.length; index++) {
    const estado = faturamento[index];

    console.log("estado: " + estado.sigla + ", porcentagem: " + verificaPorcentagem(estado.valor) + "%");
}


console.log("valorTotal: R$" + valorTotal);