function contar() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var saida = document.querySelector('p#saida')

    if(inicio.value.length == 0 || fim.value.lengt == 0 || passo.value.length == 0) {
        window.alert("[ERRO] Faltam dados!")
        saida.innerHTML = ""
    } else {
        var vInicio = Number(inicio.value)
        var vFim = Number(fim.value)
        var vPasso = Number(passo.value)
        saida.innerHTML = "Contando:<br>"
        if(vPasso == 0) {
            window.alert("Passo inválido! Considerando PASSO 1")
            vPasso = 1
        }
        if(vInicio < vFim) { // Contagem crescente
            for(vInicio;vInicio <= vFim;vInicio += vPasso){
                saida.innerHTML += `${vInicio} \u{1F449}`
            }
        } else {
            for(vInicio;vInicio >= vFim;vInicio -= vPasso){
                saida.innerHTML += `${vInicio} \u{1F449}`
            }
        }
        saida.innerHTML += ` \u{1F3C1}`
    }
}