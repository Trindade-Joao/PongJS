//Aqui está estruturada a tela principal do jogo

function TelaPrincipal(){
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
    
    fimDeJogo();
    
    geradorRandom();
}