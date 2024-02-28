var agora = new Date()
var diaSem = agora.getDay()

/*  No Js é assim:
    0 = Dom
    1 = Seg
    2 = Ter
    3 = Qua
    4 = Qui
    5 = Sex
    6 = Sab
*/

switch(diaSem) {
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda-feira")
        break
    case 2:
        console.log("Terça-feira")
        break 
    case 3:
        console.log("Quarta-feira")
        break
    case 4:
        console.log("Quinta-feira")
        break   
    case 5:
        console.log("Sexta-feira")
        break
    case 6:
        console.log("Sabado")
        break
    default:
        console.log("[ERRO] Dia invalido!")
    break    
}