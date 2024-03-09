import faturamento from "./dados.json"

let menorValorDeFaturamento = 999999999999999;
let maiorValorDeFaturamento = 0;
let somaValorDeFaturamento = 0;
let mediaValorDeFaturamento = 0;
let diasQueFaturaramMaisQueZero = 0;
let diasQueFaturaramMaisQueAMedia = 0;

for (let dia = 0; dia < faturamento.length; dia = dia + 1) {
    const faturamentoDoDia = faturamento[dia]
    somaValorDeFaturamento = somaValorDeFaturamento + faturamentoDoDia.valor 

    if (faturamentoDoDia.valor < menorValorDeFaturamento && faturamentoDoDia.valor > 0) {
        menorValorDeFaturamento = faturamentoDoDia.valor
    }

    if (faturamentoDoDia.valor > maiorValorDeFaturamento && faturamentoDoDia.valor > 0) {
        maiorValorDeFaturamento = faturamentoDoDia.valor
    }

    if (faturamentoDoDia.valor > 0) {
        diasQueFaturaramMaisQueZero = diasQueFaturaramMaisQueZero + 1; 
    }
}

mediaValorDeFaturamento = somaValorDeFaturamento / diasQueFaturaramMaisQueZero

for (let dia = 0; dia < faturamento.length; dia = dia + 1) {
    const faturamentoDoDia = faturamento[dia]
    
    if (faturamentoDoDia.valor > mediaValorDeFaturamento) {
        diasQueFaturaramMaisQueAMedia = diasQueFaturaramMaisQueAMedia + 1;
    }
}


console.log("menorValorDeFaturamento: R$" + menorValorDeFaturamento);
console.log("maiorValorDeFaturamento: R$" + maiorValorDeFaturamento);

console.log("somaValorDeFaturamento: R$" + somaValorDeFaturamento);
console.log("diasQueFaturaramMaisQueZero: " + diasQueFaturaramMaisQueZero);
console.log("mediaValorDeFaturamento: R$" + mediaValorDeFaturamento);

console.log("diasQueFaturaramMaisQueAMedia: " + diasQueFaturaramMaisQueAMedia);