function carregar() {
    var imagem = document.querySelector('section#secImagem')
    var data = new Date()
    var hora = data.getHours()
    hora = 1 //(para ver a mudança, retire esse comentário e altere o valor)

    document.querySelector('main>h2').innerHTML = `Agora são ${hora} horas` 
    if(hora < 12) {
        // BOM DIA!
        imagem.style.backgroundImage = "url('imagens/img-dia.jpg')"
        document.body.style.background = "#e2eff7"
    } else if(hora >= 18) {
        // BOA NOITE!
        imagem.style.backgroundImage = "url('imagens/img-noite.jpg')"
        document.body.style.background = "#237ab8"
    } else {
        // BOA TARDE!
        imagem.style.backgroundImage = "url('imagens/img-tarde.jpg')"
        document.body.style.background = "#d7e1d9"
    }
}
