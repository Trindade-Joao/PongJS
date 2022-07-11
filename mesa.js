//Aqui estão todos os códigos relacionados a mesa

//variáveis da mesa
let larLinha = 6;
let comLinha = 400;
let xFundoMesaP1 = 0;
let xFundoMesaP2 = 594;
let yFudoMesa = 0;

let tocouLinha = false;

function mesa() { //Essa função serve para desenhar as bordas da mesa
    background(color(0, 0, 128));
    noStroke();
    fill(color(178, 34, 34))
    rect(297, 0, 6, 400); //linha de centro
    rect(0, 0, 600, 6);
    rect(0, 394, 600, 6);

    rect(xFundoMesaP1, yFudoMesa, larLinha, comLinha);  //Fundo da mesa P1
    rect(xFundoMesaP2, yFudoMesa, larLinha, comLinha); //Fundo da mesa P2

}


