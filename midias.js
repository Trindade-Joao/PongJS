//Todas as mídias serão carregadas aqui

//variáveis de som
let somPonto;
let somRaquetada;
let somTrilha;

//variáveis de imagens
let btnInicio;
let btnReiniciar;
let fundoInicial;
let fundoFinal;
let imgVencedor;
let imgPerdedor;

function preload(){
    somPonto = loadSound("Sons/ponto.wav");
    somRaquetada = loadSound("Sons/raquete.wav");
    somTrilha = loadSound("Sons/somDeFundo.wav");

    btnInicio = loadImage("Imagens/btnInicio.png");
    btnReiniciar = loadImage("Imagens/btnReiniciar.png");
    fundoInicial = loadImage("Imagens/fundoInicial.png");
    fundoFinal = loadImage("Imagens/fundoFinal.png");
    imgPerdedor = loadImage("Imagens/perdedor.gif");
    imgVencedor = loadImage("Imagens/vencedor.gif");

}