function calculoMaca(quantidadeMaca){
    let maca = 5.80
    let macaDesconto = 4.50
    
        if(quantidadeMaca > 5){
            maca = macaDesconto
            let totalCompraMaca = maca * quantidadeMaca
            totalCompraMaca = totalCompraMaca - (totalCompraMaca * 0.10)
            return totalCompraMaca
        }
        else{
            let totalCompraMaca = maca * quantidadeMaca
            return totalCompraMaca
        }
}
function calculoMorango(quantidadeMorango){
    let morango = 7.50
    let morangoDesconto = 6.20
    
        if(quantidadeMorango > 5){
            morango = morangoDesconto
            let totalCompraMorango = morango * quantidadeMorango
            totalCompraMorango = totalCompraMorango - (totalCompraMorango * 0.10)
            return totalCompraMorango
        }
        else{
            let totalCompraMorango = morango * quantidadeMorango
            return totalCompraMorango
        }
}


let cliente = prompt("Escolha morango(mo) ou maçã(ma): ")

if (cliente == 'mo'){
    let quantidadeMorango = parseInt(prompt('Quantos kg?'))
    totalCompraMorango = calculoMorango(quantidadeMorango)
    let opcao2 = prompt("Deseja comprar Maçã? (s) ou (n)")

    if(opcao2 == 's'){
        let quantidadeMaca = parseInt(prompt('Quantos kg?'))
        totalCompraMaca = calculoMaca(quantidadeMaca)
        let totalCompra = totalCompraMorango + totalCompraMaca
        console.log(`O total da sua compra é de  R$${totalCompra}`)
    }
    else{
        console.log(`O total da sua compra é de  R$${totalCompraMorango}`)
    }
    
}
else if(cliente == 'ma'){
    let quantidadeMaca = parseInt(prompt('Quantos kg?'))
    totalCompraMaca = calculoMaca(quantidadeMaca)   

    let opcao2 = prompt("Deseja comprar Maçã? (s) ou (n)")
    if(opcao2 == 's'){
        let quantidadeMorango = parseInt(prompt('Quantos kg?'))
        totalCompraMorango = calculoMorango(quantidadeMorango)
        let totalCompra = totalCompraMorango + totalCompraMaca
        console.log(`O total da sua compra é de  R$${totalCompra}`)
    }
    else{
        console.log(`O total da sua compra é de  R$${totalCompraMaca}`)
    }
}

else{
    console.log("Opção inexistente")
}
