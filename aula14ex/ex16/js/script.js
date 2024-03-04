function contar() {
    var inicio = document.querySelector('input#inicio')
    var vInicio = Number(inicio.value)
    var fim = document.querySelector('input#fim')
    var vFim = Number(fim.value)
    var saida = document.querySelector('div#saida')
    var passo = document.querySelector('input#passo')
    var vPasso = Number(passo.value)
    saida.innerHTML = ""

    if(inicio.value.length == 0 || fim.value.lengt == 0 || passo.value.length == 0) {
        window.alert("Os dados estão incorretos. Verifique e tente novamente!")
    } else {
        for(vInicio;vInicio <= vFim;vInicio += vPasso){
            saida.innerHTML += `${vInicio} \u{1F449}`
        }
        if(saida.innerHTML == ""){
            saida.innerHTML = ""
        }
    }
}