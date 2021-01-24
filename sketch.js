const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ground;
var particles = [];
var plinkos = [];
var diversions = [];

var score = 0;
var particle;

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);

  ground = new Ground(400,745,850,10);
  
  for(var i = 75; i<=800; i = i+50){
    plinkos.push(new Plinko(i,75))
  }

  for(var i = 50 ; i<=800; i = i+50){
    plinkos.push(new Plinko(i,175))
  }

  for(var i = 75; i<=800; i = i+50){
    plinkos.push(new Plinko(i,275))
  }

  for(var i = 50 ; i<=800; i = i+50){
    plinkos.push(new Plinko(i,375))
  }

for(var i = 0 ; i<=800; i = i+110){
  diversions.push(new Diversion(i,600,20,300))
}

}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  ground.display();
  for(var i = 0; i<plinkos.length ; i++){
    plinkos[i].display();
  }

  for(var i = 0; i<diversions.length; i++){
    diversions[i].display();
  }

    if(frameCount%60 === 0){
      particles.push(new Particle(random(0,800),0,10))
    }

    for(var i = 0; i<particles.length; i++ ){
      particles[i].display();
    }

    text("Score:"+ score,20,20)

  drawSprites();
}