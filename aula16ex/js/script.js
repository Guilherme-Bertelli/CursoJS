let num = document.querySelector('input#numero')
let lista = document.querySelector('select#lista')
let saida = document.querySelector('div#saida')
let msg = document.querySelector('option#msg')
let numeros = []

function isNumero(n){ // função para ver se o número está entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function isLista(n, l){ // função par ver se o número já foi adicionado na lista
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){ // função para o botão ADICIONAR
    if(isNumero(num.value) && !isLista(num.value, numeros)){ 
        msg.style.display = "none"
        numeros.push(Number(num.value)) 
        let item = document.createElement('option')
        item.innerHTML = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        saida.style.height = "0"
        saida.innerHTML = ""
    }else{
        window.alert('Valor já adicionado ou incorreto!')
    }
    num.value = ""
    num.focus()
}

function finalizar(){ // função para o botão FINALIZAR
    
    if(numeros.length == 0){
        window.alert("Adicione valores antes de finalizar!")
    }else{
        saida.style.height = "27vh"
        saida.style.transition = "innerHTML .5s"
        let tot = numeros.length
        let min = Math.min.apply(null, numeros)
        let max = Math.max.apply(null, numeros)
        let soma = 0
        for(let pos in numeros){
            soma += numeros[pos] // REPETIÇÕES em um linha não precisa de{}
        }    
        let media = soma/tot
        saida.innerHTML = `Ao todo, temos ${tot} números cadastrados.<br>
        O maior valor informado foi ${max}.<br>
        O menor valor informado foi ${min}.<br>
        Somando todos os valores, temos ${soma}.<br>
        A média do valores digitado é ${media.toFixed(1)}`
        // let maior = numeros[0]
        // let menor = numeros[0]
        // for(let pos in numeros){
        //     soma += numeros[pos]
        //     if(numeros[pos] > maior){
        //         maior = numeros[pos]
        //     }
        //     if(numeros[pos] < menor){
        //         menor = numeros[pos]
        //     }
        // }
    }
}