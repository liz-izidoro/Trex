const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var leftWall, rightWall, bottomWall, topWall;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  // criando um objeto da classe Wall
  leftWall = new Wall(10, 200, 20, 400);
  rightWall = new Wall(390, 200, 20, 400);
  topWall = new Wall(200, 10, 400, 20);
  bottomWall = new Wall(200, 390, 400, 20);
  ball = Bodies.circle(200, 100, 20, {restitution: 0.95});
  World.add(world, ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background('black');
  leftWall.show();
  rightWall.show();
  topWall.show();
  bottomWall.show();
  ellipse(ball.position.x, ball.position.y, 20);
  Engine.update(engine);
}
