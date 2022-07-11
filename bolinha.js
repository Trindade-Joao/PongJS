//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 20;
let raio = dBolinha / 2;

//variáveis da velocidade da bolinha
let veloXBolinha = 7;
let veloYBolinha = 7;
let colidiu = false;

//Funções da Bolinha

function mostraBolinha() {
  fill(255)
  circle(xBolinha, yBolinha, dBolinha);
}

function movimentaBolinha() {
  xBolinha += veloXBolinha;
  yBolinha += veloYBolinha;
}

