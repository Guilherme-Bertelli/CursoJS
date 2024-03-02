var verificar = document.querySelector('button#verificar').addEventListener('click', verificar)//Cria um evento de clique no botão

function verificar() {
    var textoP = document.querySelector('p#seNao')// Texto do parágrafo
    var ano = document.querySelector('input#idade')// Idade
    var anoEscolhido = Number(ano.value)
    var idade = 2024 - anoEscolhido
    var sexoMouF = document.querySelector('input[name="sexo"]:checked')// Sexo
    var sexos = sexoMouF.value
    var imagem = document.querySelector('section#secImagem')// Imagem
    var blocoPrincipal = document.querySelector //Main
    ('main#conteudoPrincipal')

    switch(sexos) { 
        // Caso HOMEM
        case "homem":
            if(idade <= 14 && idade >= 1) { // Se tiver de 1 a 14 anos carrega a imagem da criança
                imagem.style.display = "flex"
                blocoPrincipal.style.height = "70vh"
                imagem.style.backgroundImage = "url('imagens/menino.jpg')"
                imagem.style.transition = ".2s"
            }      
            if(idade > 14 && idade < 45) { // Se tiver de 15 a 45 anos carrega a imagem de um jovem
                imagem.style.display = "flex"
                blocoPrincipal.style.height = "70vh"
                imagem.style.backgroundImage = "url('imagens/h-jovem.jpg')"
                imagem.style.transition = ".2s"
            } 
            if(idade > 45) { // Se tiver de 45 a 120 anos carrega a imagem de um idoso
                imagem.style.display = "flex"
                blocoPrincipal.style.height = "70vh"
                imagem.style.backgroundImage = "url('imagens/idoso.jpg')"
                imagem.style.transition = ".2s"
            } 

            if(idade < 120 && idade > 1) { // Se tiver de 1 a 120 anos carrega a mensagem da linha de baixo
                textoP.innerHTML = `Detectamos que é ${sexos} com ${idade} anos`
            } else { // Se não tiver de 1 a 120 carrega um alert pedindo para verificar os dados
                imagem.style.display = "none"
                blocoPrincipal.style.height = "40vh"
                imagem.style.backgroundImage = "url('')"
                imagem.style.transition = ".2s"
                window.alert("Verifique os dados e tente novamente")
                textoP.innerHTML = ``
            }
            break
        // Caso HOMEM acaba aqui    

        // Caso MULHER
        case "mulher":
            if(idade <= 14 && idade >= 1) { // Se tiver de 1 a 14 anos carrega a imagem da criança
                imagem.style.display = "flex"
                blocoPrincipal.style.height = "70vh"
                imagem.style.backgroundImage = "url('imagens/menina.jpg')"
                imagem.style.transition = ".2s"
            }  
            if(idade > 14 && idade < 45) { // Se tiver de 15 a 45 anos carrega a imagem de uma jovem
                imagem.style.display = "flex"
                blocoPrincipal.style.height = "70vh"
                imagem.style.backgroundImage = "url('imagens/m-jovem.jpg')"
                imagem.style.transition = ".2s"
            } 
            if(idade > 45) { // Se tiver de 45 a 120 anos carrega a imagem de uma idosa
                imagem.style.display = "flex"
                blocoPrincipal.style.height = "70vh"
                imagem.style.backgroundImage = "url('imagens/idosa.jpg')"
                imagem.style.transition = ".2s"
            }
            if(idade < 120 && idade > 1) { // Se tiver de 1 a 120 anos carrega a mensagem da linha de baixo
                textoP.innerHTML = `Detectamos que é ${sexos} com ${idade} anos`
            } else { // Se não tiver de 1 a 120 carrega um alert pedindo para verificar os dados
                imagem.style.display = "none"
                blocoPrincipal.style.height = "40vh"
                imagem.style.backgroundImage = "url('')"
                imagem.style.transition = ".2s"
                window.alert("Verifique os dados e tente novamente")
                textoP.innerHTML = ``
            }
            break 
        // Caso MULHER acaba aqui    
    }
}