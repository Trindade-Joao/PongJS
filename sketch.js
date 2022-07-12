function setup() {
    createCanvas(600, 400);
    somTrilha.loop();
    
    
}

function draw() {
    mesa();

    mostraBolinha();
    movimentaBolinha();    

    mostraRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaMinhaRaquete();
    movimentaRaqueteOponente();

    verificaColisaoBorda();
    colisaoRaqueteBiblioteca(xRaquete, yRaquete);
    colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);

    somaPontos(xFundoMesaP1, yFudoMesa);
    somaPontos(xFundoMesaP2, yFudoMesa);
    mostraPlacar();
    
    geradorRandom();
    console.log(chanceDeErrar);
 

    

 
    
}