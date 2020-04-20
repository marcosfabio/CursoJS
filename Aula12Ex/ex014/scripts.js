
function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12) {
        imagem.src = 'foto_amanhecer.jpeg'
        document.body.style.background = '#e4b03f'
    } else if (hora >= 12 && hora <= 18) {
        imagem.src = 'foto_pordosol.jpeg'
        document.body.style.background = '#690b0b'
    } else {
        imagem.src = 'foto_noite.jpeg'
        document.body.style.background = '#261730'
    }
}



