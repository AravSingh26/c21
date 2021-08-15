const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

// objects to be created
var ground;
var left;
var right,top_wall;
var btn1, btn2


function setup() {
  createCanvas(400,400);
  engine = Engine.create();


  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
ground= new Ground(200,390,400,20)  //calling out class for ground object
left= new Ground(10,200,20,400)
right= new Ground(390,200,20,400)
top_wall=new Ground(200,10,400,20)

  var ball_options = {
    restitution : 0.95
  }

  ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)

  btn1=createImg('right.png')
  btn1.position(220,30)
  btn1.size(50,50)
  btn1.mouseClicked(hForce)
  btn1=createImg('up.png')
  btn1.position(20,30)
  btn1.size(50,50)
  btn1.mouseClicked(vForce)
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ground.show()
  left.show() 
  right.show()
  top_wall.show()

  ellipse(ball.position.x, ball.position.y,20)
}

function hForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0,y:-0.05});

}
