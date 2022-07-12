let colidiu = false;
//Funções Colisões

function verificaColisaoBorda() {
    //if(xBolinha + raio > width || xBolinha - raio < 0){
    //veloXBolinha *= -1;
    //}  
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        veloYBolinha *= -1;
    }
}


function colisaoRaqueteBiblioteca(x, y) {
    colidiu = collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, dBolinha);
    if (colidiu) {
        veloXBolinha *= -1;        
        somRaquetada.play()
        if (xBolinha > 300) { //Adicionei essa parte para resolver 
            xBolinha -= 5;    // o bug da bolinha presa na raquete
        } else {
            geraRandom = true
            xBolinha += 5;
        }
    }
}