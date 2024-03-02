var imagem = document.querySelector('section#secImagem')
var data = new Date()
var hora = data.getHours()
//hora = 22 //(para ver a mudança, retire esse comentário e altere o valor)

document.querySelector('main>h2').innerHTML = `Agora são ${hora} horas` 
if(hora < 12) {
    imagem.style.backgroundImage = "url('imagens/img-dia.jpg')"
    document.body.style.background = "lightblue"
} else if(hora >= 18) {
    imagem.style.backgroundImage = "url('imagens/img-noite.jpg')"
    document.body.style.background = "#606060"
} else {
    imagem.style.backgroundImage = "url('imagens/img-tarde.jpg')"
    document.body.style.background = "#996226a0"
}