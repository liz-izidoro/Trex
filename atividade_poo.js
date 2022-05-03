/**
 * Tipos de variáveis
 * texto = "um texto"
 * numerico = 20
 * vetor = [10, 20, 30]
 * objeto = {}
 */

var box1;

function setup(){
  createCanvas(600,200)
  
  box1 = new Box(200, 100, 80, 80, 10);
  box1.show();
}

function draw(){
  background("black");
}
