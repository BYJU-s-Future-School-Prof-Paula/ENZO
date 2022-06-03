// Namespace ou Namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Engine = Matter.Engine;

// criar variaveis
var fisica, terra;
var bolota,chao;

function setup() {
  createCanvas(400,400);

  //cria o motor e o mundo
  fisica = Engine.create();
  terra = fisica.world;
  
  var options_bolota = {
    restitution: 0.90,
    frictionAir: 0.01
  };

  bolota = Bodies.circle(50,50,20,options_bolota);
  World.add(terra, bolota);
   
  var options_chao = {
    isStatic: true
  };

  chao = Bodies.rectangle(200,390,402,10,options_chao);
  World.add(terra,chao);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(100);
  Engine.update(fisica);

  ellipse(bolota.position.x,bolota.position.y,20);
  rect(chao.position.x, chao.position.y, 402,10);

}

