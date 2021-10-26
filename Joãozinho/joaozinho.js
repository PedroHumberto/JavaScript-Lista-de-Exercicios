
function calculaFatorial(fatorial) {
    var resultado = fatorial;    
    for (var i = 1; i < fatorial; i++) {
        resultado *= i;
    }
    return resultado
}


var entrada = "5 " + "8 " + "13 " + "15 "

entradas = entrada.split(" ")
for(var e in entradas){
    e = parseInt(e)
    var numero = parseInt(entradas[e])
    if(numero){
        console.log(`Instância ${e + 1}`)
        var resultadoFatorial = calculaFatorial(numero)
        resultadoFatorial = resultadoFatorial.toString()
        resultadoFatorial = resultadoFatorial.replaceAll("0", "")
        console.log(resultadoFatorial[resultadoFatorial.length-1])
    }

}