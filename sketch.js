tela = 3;

function setup() {
    createCanvas(600, 400);
    somTrilha.loop();
    
    
    
}

function draw() {
    if(tela == 1){
        telaInicial();
    } 
    if(tela == 2){
        TelaPrincipal();
    }
    if(tela == 3){
        telaFinal(imgVencedor);
    }
    if(tela == 4){
        telaFinal(imgPerdedor);
    }
    
}