
var res = window.document.querySelector('div#res')

function contar () {
    
    var txtres = ''   
    
    var txtinicio = window.document.getElementById('txtinicio').value
    var txtfim = window.document.getElementById('txtfim').value
    var txtpasso = window.document.getElementById('txtpasso').value
          
    
    if (txtinicio != '' && txtfim != '' && txtpasso != '' ) {
        
        var inicio = Number(txtinicio)
        var fim = Number(txtfim)
        var passo = Number(txtpasso)

        if (passo != 0 && inicio <= fim) {
            res.innerHTML = '<p> Contando: </p>'
            
            for (var i = inicio; i <= fim; i+=passo) {
                txtres += (i + '\u{270D}')
            }
        
            res.innerHTML += txtres + 'Fim'
            
        } else if (passo != 0 && inicio >= fim) {
            res.innerHTML = '<p> Contando: </p>'
            
            for (var i = inicio; i >= fim; i-=passo) {
                txtres += (i + '\u{270D}')
            }
        
            res.innerHTML += txtres + 'Fim \u{1F3C1}'
            
        } else {
            window.alert('O Passo deve ser diferente de ZERO!')
            res.innerHTML = '<p> Aguardando correções ... </p>'
        } 
        
        
    } else {
        window.alert('Os valores Início, Fim e Passo devem ser informados!')
        res.innerHTML = '<p> Aguardando correções ... </p>'
    }   

}

/*
Para inserir os emojis acessar o site: https://unicode.org/emoji/charts/full-emoji-list.html
copiar o codigo do emojidesejado e adaptar para o comando JavaScritp

Ex.: Código no site: U+1F601  --> Código no JavaScript: \u{1F601},
ou seja substitui o U+  por \u{}
U+270D
*/ 