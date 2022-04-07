// Vari�vel Global
var trex ,trex_running;
var edges;
var ground, groundImg;
var cloud, cloudImg;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImg = loadImage("ground2.png");
  cloudImg = loadImage("cloud.png");
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
  background("black");
  
  ground.velocityX = -2 ;
  
  if (keyDown('space') && trex.y >= 100) {
    trex.velocityY = -10;
  
  }

  // Resolve o problema do ch�o sumir
  if (ground.x < 0) {
    ground.x = ground.width / 2;
    
  }

  trex.velocityY = trex.velocityY + 0.5;
  
  trex.collide(ground);

  createClouds();

  drawSprites();
}

function createClouds() {

  if (frameCount % 60 === 0) {
    cloud = createSprite(600, 100, 40, 10);
    cloud.addImage("cloud", cloudImg);
    cloud.y = Math.round(random(10,  60));
    cloud.scale = 0.5;
    cloud.velocityX = -2;
  }
  
}