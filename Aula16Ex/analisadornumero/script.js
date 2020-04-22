let numeros = []  // inicialização do vetor de números

let res = window.document.getElementById('res')


function adicionar() {
    res.innerHTML = ''
    let lista = window.document.getElementById('selnum')

    let txtn = window.document.getElementById('txtn')
    
    if (txtn.value.length == 0) {    // Verifica se o campo está vazio
        window.alert('Digite um Número Válido!')

    } else if (Number(txtn.value) < 1 || Number(txtn.value) > 100) {  // Verifica se o valor digitadp é válido
        window.alert('O Número deve estar entre 1 e 100, tente novamente!')

    } else {
        let num = Number(txtn.value)
        let repetido = false   // para verificar se há repetição de valores.
       
        

/*  Lógica está funcionando
        Para usar a estrutura FOR ... IN  seria necessário o uso do comando BREAK
        para sair da repetição assim que um valor TRUE fosse encontrado.
*/
        for (let pos in numeros) {
            repetido = (num == numeros[pos])  // verifica se existe número repetido no vetor.
            if(repetido){
                break // interrompe a busca por número repetido assim que o encontra.
            }
        }

/*
Sugestão de logica para verificação da existência de valor em um vetor

function InLista(n, lista) {
    if(lista.indexOf(n) != -1){
        return true
    } else {
        return false
    }
}

o método indexOf() retorna a posição que um dado elemento está alocado no vetor. Caso o elemento
não exista, o retorno do método será -1.

*/
    


        if (!repetido) {
            numeros.push(num)
            lista.innerHTML = ''  // Limpa a lista antes da adição dos valores contidos no vetor.
            
            for (let pos in numeros) {
                let option = window.document.createElement('option') // Cria item da lista
                option.value = `num${pos}`  // atribui identificador ao item da lista
                option.text = `valor ${numeros[pos]} adicionado`   // adiciona o texto ao item da lista
                lista.appendChild(option)  // adiciona o item à lista.            
            }
        } else {
            window.alert(`O valor ${num} já foi incluído na lista!`)
        }
        

        txtn.value = '' // limpa o input para uma nova digitação.
        txtn.focus() // Método focus() coloca o edit no "foco", ou seja, o cursos para digitação vai para o input.
        

    }
       
}


/*
  =========================  BOTÃO FINALIZAR  ==========================
*/



function finalizar () {
    if(numeros.length == 0) {
        window.alert('Vetor Numérico Vazio!')
    } else {
        let total = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = numeros[0]
        
        if(numeros.length > 1) {
            soma = 0  // inicializa o valor das soma.

            // Total de Números Adicionados
            for (let pos in numeros) {
                // Verifica MAIOR Número Adicionado
                if(numeros[pos] > maior) {
                    maior = numeros[pos]
                }
                
                // Verifica MENOR Número Adicionado
                if(numeros[pos] < menor) {
                    menor = numeros[pos]
                }

                //SOMA todos os valores
                soma += numeros[pos]
                
            }
            
            
        } 
        
        // Calcula a MÉDIA dos Valores Adicionados.
        let media = soma / total

        // Mostra Resultados na Página WEB.

        res.innerHTML = `<p> Ao Todos temos ${total} números cadastrados </p>` +
                        `<p> O Maior valor informado foi ${maior} </p>` +
                        `<p> O Menor valor informado foi ${menor} </p>` +
                        `<p> Somando todos os valores, temos ${soma} </p>` +
                        `<p> A Média dos valores digitados é ${media} </p>`

    }   

}






