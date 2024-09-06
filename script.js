
function leDoTeclado(evento) {


    if(evento.keyCode === cima) {
        sentidoAtual = cima;


    } else if (evento.keyCode === baixo) {
        sentidoAtual = baixo;


    } else if (evento.keyCode === esquerda) {
        sentidoAtual = esquerda;
        
    }
}