//variáveis do botão
let xBtn = 232;
let yBtn = 298;
let wBtn = 140;
let hBtn = 50;

function mouseClicked(){
    if(mouseX >= xBtn && mouseX <= (xBtn + wBtn) && mouseY >= yBtn && mouseY <= (yBtn + hBtn)){
        if(tela == 1){
            tela = 2;
        }
        if(tela == 3 || tela == 4){
            tela = 1
        }

    }
 
    
}