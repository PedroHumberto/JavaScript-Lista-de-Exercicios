function dataFormatada(data){
    const meses =[
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio",    "Junho",     "Julho", "Agosto",
        "Setembro.", "Outubro", "Novembro", "Dezembro"
    ]

    return data = `${data.getDate()} de ${meses[(data.getMonth())]} de ${data.getFullYear()}`
}

let dia = prompt('Digite um dia (DD)')
let mes = prompt('Digite um mes (MM)')
let ano = prompt('Digite um ano (AAAA)')

console.log(dataFormatada(new Date(`${mes}/${dia}/${ano}`)))