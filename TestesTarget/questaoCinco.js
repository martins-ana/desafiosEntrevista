function inverteTexto(texto) {
    let palavraInvertida = ""

    for (let index = texto.length - 1; index >= 0; index = index - 1) {

        const ultimaLetra = texto[index];
        palavraInvertida = palavraInvertida + ultimaLetra
    }

    return palavraInvertida;
}

const textoParaInverter = "frase para ser invertida"

console.log("antes de inverter: " + textoParaInverter);
console.log("depois de inverter: " + inverteTexto(textoParaInverter));