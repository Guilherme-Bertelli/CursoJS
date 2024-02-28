var agora = new Date()
var hora = agora.getHours()
console.log(`Óla, agora são ${agora}Hrs`)

if(hora < 12) {
    console.log("Bom Dia!")
} else if(hora < 16) {
    console.log("Boa Tarde!")
} else {
    console.log("Boa Noite!")
}