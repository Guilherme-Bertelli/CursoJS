// RECURSIVIDADE
function fatorial(n) {
    if(n == 1){ //= se 5 for ==(ígual) a 1
        return 1 // retorne o 1
    }else { // ==================== se 5 não for ==(ígual) a 1
        return n * fatorial(n-1) // retorne a função fatorial(n)
    }
}
console.log(fatorial(5))