let valores = [4,5,1,3,9,4]
valores.sort()
valores[1] = 2

console.log(valores)

// console.log(valores[0])
// console.log(valores[1])
// console.log(valores[2])
// console.log(valores[3])
// console.log(valores[4])
// console.log(valores[5])

// for(var pos=0;pos < valores.length;pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

for(let pos in valores){// Forma simplificada pelo JS
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}