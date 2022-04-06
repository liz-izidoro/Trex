// Vari�vel Global
var trex ,trex_running;
var edges;
var ground, groundImg;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  // trex.x = 50;
  
  edges = createEdgeSprites();

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImg);
}

function draw(){
  background("white");
  ground.velocityX = -2 ;
  console.log(ground.x);
  
  if (keyDown('space')) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.5;
  
  trex.collide(ground);

  drawSprites();

}