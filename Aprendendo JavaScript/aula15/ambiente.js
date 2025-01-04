let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é o vetor ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}


/*
let num = [5, 8, 4]
num[3] = 6 'é igual adicione 6 na variavel num na posiçao 3'
num.push(7)
num.length
num.sort() -----> sort() coloca todos os numeros em ordem crescente
*/