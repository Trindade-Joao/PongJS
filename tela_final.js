//variáveis para medidas dos Gifs na tela
let xGif = 84;
let yGif = 40;
let wGif = 432;
let hGif = 244;

function telaFinal(img){  //basta colocar a variável do gif
    background(fundoFinal);
    image(btnReiniciar, xBtn, yBtn, wBtn, hBtn);
    image(img, xGif, yGif, wGif, hGif);
    pontosP1 = 0;
    pontosP2 = 0;
}