function calculeSequencia (numeroEscolhido) {
    let numero1 = 0;
    let numero2 = 1;

    for (let resultado = 0; resultado <= numeroEscolhido; resultado = numero1 + numero2) {
        console.log(resultado)

        if (resultado === numeroEscolhido) {
            return "pertence a sequência"
        }
        
        numero1 = numero2;
        
        numero2 = resultado;
    } 
    
    return "não pertence a sequência"
}

console.log(calculeSequencia(0));