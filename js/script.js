function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

//var hora = 19  //COMANDO FORÇANDO A HORA PARA TESTE

msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora <12) {
//Good Morning!
img.src = "images/manha.png"
document.body.style.background = '#e2cd9f'

}  else if (hora >= 12 && hora <= 18) {
//Good Afternoon!
img.src = "images/tarde.png"
document.body.style.background = '#b9846f'

} else {
    //Good Evening!
    img.src = "images/noite.png"
    document.body.style.background = '#515154'
}
}