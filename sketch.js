// Vari�vel Global
var trex ,trex_running;
var edges;
var ground, groundImg;
var cloud, cloudImg;
var cacto1, cacto2, cacto3, cacto4, cacto5, cacto6;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImg = loadImage("ground2.png");
  cloudImg = loadImage("cloud.png");
  cacto1 = loadImage("obstacle1.png");
  cacto2 = loadImage("obstacle2.png");
  cacto3 = loadImage("obstacle3.png");
  cacto4 = loadImage("obstacle4.png");
  cacto5 = loadImage("obstacle5.png");
  cacto6 = loadImage("obstacle6.png");
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
  createCactos();
  drawSprites();
}

function createClouds() {

  if (frameCount % 60 === 0) {
    cloud = createSprite(600, 100, 40, 10);
    cloud.addImage("cloud", cloudImg);
    cloud.y = Math.round(random(10,  60));
    cloud.scale = 0.5;
    cloud.velocityX = -2;
    cloud.lifetime = 300;
  }
}
function createCactos() {
var cacto;
  if (frameCount % 60 === 0) {
    cacto = createSprite(600, 160, 40, 10);
    cacto.velocityX = -6;
var aleatorio = Math.round(random(1, 6));
    switch (aleatorio) {
      case 1:
        cacto.addImage(cacto1);
        break;
      case 2:
        cacto.addImage(cacto2);
        break;
      case 3:
        cacto.addImage(cacto3);
        break;
      case 4:
        cacto.addImage(cacto4);
        break;
      case 5:
        cacto.addImage(cacto5);
        break;
      case 6:
        cacto.addImage(cacto6);
        break;
    
      default:
        break;
    }
    cacto.scale = 0.5;
    cacto.lifetime = 150;
    // cloud.y = Math.round(random(10,  60));
    // cloud.scale = 0.5;
    // cloud.velocityX = -2;
  }
  
}