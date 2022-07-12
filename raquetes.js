//Todas as Variáveis e funções das Raquetes

//variáveis da raquete
let xRaquete = 20;
let yRaquete = 180;
let wRaquete = 10;
let hRaquete = 80;

//variáveis raquete oponente
let xRaqueteOponente = 570;
let yRaqueteOponente = 180;
let veloYOponente;


//Funções das raquetes

function mostraRaquete(x, y) {
    //fill(color(255,255,0))
    rect(x, y, wRaquete, hRaquete);
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        if (yRaquete > 0) {
            yRaquete -= 10;
        }
    } else if (keyIsDown(DOWN_ARROW)) {
        if (yRaquete + hRaquete < 400) {
            yRaquete += 10;
        }
    }
}

function movimentaRaqueteOponente() {
    
    veloYOponente = yBolinha - yRaqueteOponente - 75 / 2 - 50;
    yRaqueteOponente = yRaqueteOponente + veloYOponente + chanceDeErrar;
    calculaChanceDeErrar(valorRandom1, valorRandom2);

   

}