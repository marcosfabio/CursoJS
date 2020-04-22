let valores = [8, 1, 7, 4, 2, 9]

/*
console.log(valores)
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

*/

/*

Estrutura tradicional do FOR

console.log(valores)
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/


// Estrutura FOR...IN
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// Buscar valores por posição: .indexOf() --> indica a posição do valor informado
// se o valor não existir retorna -1.

if(valores.indexOf(20) == -1) {
    console.log('Valor Não Encontrado!')
} else {
    console.log(`Numero encontrado`)

}



