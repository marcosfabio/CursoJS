function fatorial (n) {
    let fat = 1
    for(let c = n; c > 1; c-- ) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

//   RECURSIVIDADE DE FUNÇÃO: a função faz chamada DELA MESMA.

function fatorial2 (n) {
    if(n==1){
        return 1
    } else {
        return n * fatorial2(n-1)
    }
}
console.log(fatorial2(3))