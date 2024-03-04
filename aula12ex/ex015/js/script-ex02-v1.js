function verificar() {
    var data = new Date() //========== Data atual
    var ano = data.getFullYear() // == Ano atual
    var anoEscolha = document.querySelector('input#idade').value // Valor do ano escolhido
    var txt = document.querySelector('p#seNao')
    
    var idade = ano - anoEscolha // idade
    var sexo = document.getElementsByName('sexo') // Valor do sexo
    var sexoEscolha = ""
    var secImg = document.querySelector('section#secImagem')

    if((anoEscolha.length == 0 || anoEscolha > ano) || anoEscolha < 1900) {
        window.alert("Verifique os dados e tente novamente!")
        secImg.style.display = "none"
        secImg.style.backgroundImage = ""
        document.querySelector('main').style.height = "40vh"
    } else {
        if(sexo[0].checked) {
            sexoEscolha = "Homem"
            if(idade > 1 && idade <= 14) {
                secImg.style.display = "flex"
                secImg.style.backgroundImage = "url('imagens/menino.jpg')"
                secImg.style.transition = ".2s"
            } else if(idade <= 45) {
                secImg.style.display = "flex"
                secImg.style.backgroundImage = "url('imagens/h-jovem.jpg')"
                secImg.style.transition = ".2s"
            } else {
                secImg.style.display = "flex"
                secImg.style.backgroundImage = "url('imagens/idoso.jpg')"
                secImg.style.transition = ".2s"
            }
        } else if(sexo[1].checked) {
            sexoEscolha = "Mulher"
            if(idade > 1 && idade <= 14) {
                secImg.style.display = "flex"
                secImg.style.backgroundImage = "url('imagens/menina.jpg')"
                secImg.style.transition = ".2s"
            } else if(idade <= 45) {
                secImg.style.display = "flex"
                secImg.style.backgroundImage = "url('imagens/m-jovem.jpg')"
                secImg.style.transition = ".2s"
            } else {
                secImg.style.display = "flex"
                secImg.style.backgroundImage = "url('imagens/idosa.jpg')"
                secImg.style.transition = ".2s"
            }
        }
        document.querySelector('main').style.height = "70vh"
        txt.innerHTML = `Detectamos ${sexoEscolha} com ${idade} anos`
    }
}