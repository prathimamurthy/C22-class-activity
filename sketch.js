// Engine - this is the physics engine
//world - physical world and this contains all the objects
//bodies - game objects which will reside in the world

//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ground, ball;

function setup() {

  createCanvas(800,400);

   engine = Engine.create();
   world = engine.world;

   var ground_options = {
     isStatic : true
   }
   ground = Bodies.rectangle(400,380,800,6,ground_options);

   World.add(world, ground);

   console.log(ground);


   //object.attributename
   console.log(ground.position.x);
   console.log(ground.position.y);

   var ball_options = {
     restitution : 0.6
   }
   ball = Bodies.circle(200,200,40 ,ball_options);

   World.add(world, ball);


   

}

function draw() {

  background(255,255,255);  

  Engine.update(engine);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,5);

  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,40,40);
}