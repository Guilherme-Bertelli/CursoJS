let num = [5,4,9,11,3]
num.push(7)
num.sort()
num[6] = 1
console.log(`${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é o ${num[0]}`)
let pos = num.indexOf(4)

if(pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

