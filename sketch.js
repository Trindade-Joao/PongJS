//variáveis da quadra
let larLinha = 6;
let comLinha = 400;
let tocouLinha = false;

//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 20;
let raio = dBolinha /2;

//variáveis da velocidade da bolinha
let veloXBolinha = 7;
let veloYBolinha = 7;
let colidiu = false;

//variáveis da raquete
let xRaquete = 20;
let yRaquete = 180;
let wRaquete = 10;
let hRaquete = 80;

//variáveis raquete oponente
let xRaqueteOponente = 570;
let yRaqueteOponente = 180;
let chanceDeErrar = 0
let veloYOponente;
let geraRandom = false;
let valorRandom1;
let valorRandom2;


//variáveis Placar
let pontosP1 = 0;
let pontosP2 = 0;

function setup(){
    createCanvas(600, 400);
 
}

//Funções iniciais

function mesa(){ //Essa função serve para desenhar as bordas da mesa
    noStroke();
    fill(color(178,34,34))
    rect(297, 0, 6, 400); //linha de centro
    rect(0, 0, 600, 6);
    rect(0, 394, 600, 6);
    
    rect(0, 0, larLinha, comLinha);  //Fundo da quadra P1
    rect(594, 0, larLinha, comLinha); //Fundo da quadra P2
    
  }
  
  //Funções da Bolinha
  
  function mostraBolinha() {
    fill(255)
    circle(xBolinha, yBolinha, dBolinha);
  }
  
  function movimentaBolinha(){
    xBolinha += veloXBolinha;
    yBolinha += veloYBolinha;
  }
  
  function bugBolinha(){
    if(xBolinha + raio > 600){
      xBolinha -= 60;
      veloXBolinha *= -1;
    }
    if(xBolinha - raio < 0){
      xBolinha += 60;
      veloXBolinha *= -1;
    }
  }
  //Funções das raquetes
  
  function mostraRaquete(x, y){
    //fill(color(255,255,0))
    rect(x, y, wRaquete, hRaquete);  
  }
  
  function movimentaMinhaRaquete(){
    if (keyIsDown(UP_ARROW)){
      if (yRaquete > 0){
        yRaquete -= 10;
      } 
    }else if (keyIsDown(DOWN_ARROW)){
      if (yRaquete + hRaquete < 400){
        yRaquete += 10;
      }  
    }
  }
  
  function movimentaRaqueteOponente(){
    veloYOponente = yBolinha - yRaqueteOponente - 75 / 2 - 50;
    yRaqueteOponente += veloYOponente + chanceDeErrar;
    //calculaChanceDeErrar();
    
  }
  
  //Funções Colisões
  
  function verificaColisaoBorda() {
    if(xBolinha + raio > width || xBolinha - raio < 0){
      veloXBolinha *= -1;
    }  
    if(yBolinha + raio > height || yBolinha - raio < 0){
      veloYBolinha *= -1;
    }
  }
  
  function verificaColisaoRaquete(){
    if (xBolinha - raio < xRaquete + wRaquete && yBolinha - raio < yRaquete + hRaquete && yBolinha + raio > yRaquete ){
      veloXBolinha *= -1;
     
    }
  }
  
  
  function colisaoRaqueteBiblioteca(x, y){
    colidiu = collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, dBolinha);
    if(colidiu){
      veloXBolinha *=-1;
      
      if(xBolinha > 300){
        xBolinha -= 5;
      }else{
        xBolinha += 5; 
      }
    }
  }
  
  //Funções Placar
  
  function mostraPlacar(){
    strokeWeight(2);
    stroke(255);
    textAlign(CENTER);
    textFont('Russo One', 25)
    fill(0)
    rect(130, 9, 40, 35, 5)
    fill(255);
    text(pontosP1, 150, 35);
    fill(0)
    rect(430, 9, 40, 35, 5)
    fill(255);
    text(pontosP2, 450, 35);
  }
  
  function fundoDaQuadra(x, y){
    tocouLinha = collideRectCircle(x, y, larLinha, comLinha, xBolinha, yBolinha, dBolinha);
    if(tocouLinha){
      veloXBolinha *=-1;
      
      if(xBolinha > 300){
        pontosP1 += 1;
        xBolinha -= 20;
      }else{
        pontosP2 += 1;
        xBolinha += 20;
        geraRandom = true;
        valorRandom1 = geradorRandom(50,100);
        valorRandom2 = geradorRandom(30, 80);
  
        
      }
    }
  }
  
  function contadorPontos(){
    if(xBolinha > 590){
      pontosP1 += 1;
      
    }  
    if(xBolinha < 15){
      pontosP2 += 1;
      
    }
  }
  
  //Função fator de erro do oponente
  
  
  function geradorRandom(min, max) {
    if(geraRandom){
      min = Math.ceil(min);
      max = Math.floor(max);
      geraRandom = false;
      return Math.floor(Math.random() * (max - min)) + min;
    } 
  }

function draw(){
    background(color(0, 0, 128));
    mesa();
    
    mostraBolinha();
    movimentaBolinha();
    //bugBolinha();
    
    mostraRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente)
    movimentaMinhaRaquete();
    movimentaRaqueteOponente();
    
    verificaColisaoBorda();
    //verificaColisaoRaquete(xRaquete, yRaquete);
    colisaoRaqueteBiblioteca(xRaquete, yRaquete);
    colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
    
    fundoDaQuadra(0,0);
    fundoDaQuadra(594, 0)
    //contadorPontos();
    mostraPlacar();
}