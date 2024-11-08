function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora}:${min}:${sec}`
    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#ffe36e'
        //BOM DIA
        img.src = 'fotomanha.png'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#e9b976'
    } else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#372c34'
    }
}