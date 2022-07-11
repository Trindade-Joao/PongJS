//Aqui estão todas as variáveis e funções referentes aos pontos e placares

//variáveis Placar
let pontosP1 = 0;
let pontosP2 = 0;

//Funções Placar

function mostraPlacar() {
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

function somaPontos(x, y) {  //Alterei essa função utilizando a colisão com as linhas do fundo para resolver o bug de vários pontos somados de uma vez
    tocouLinha = collideRectCircle(x, y, larLinha, comLinha, xBolinha, yBolinha, dBolinha);
    if (tocouLinha) {
        veloXBolinha *= -1;
        somPonto.play();
        if (xBolinha > 300) {
            pontosP1 += 1;
            xBolinha -= 20;
        } else {
            pontosP2 += 1;
            xBolinha += 20;
            geraRandom = true;
            valorRandom1 = geradorRandom(50, 100);
            valorRandom2 = geradorRandom(30, 80);


        }
    }
}

//Função fator de erro do oponente


function geradorRandom(min, max) {
    if (geraRandom) {
        min = Math.ceil(min);
        max = Math.floor(max);
        geraRandom = false;
        return Math.floor(Math.random() * (max - min)) + min;
    }
}