
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject, rope1, rope2, rope3, rope4, rope5;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

  bobDiameter = 40;
  bobXposition = width/2;
  bobYposition = height/4+ 500 ;
  //Create the Bodies Here.
  bobObject1 = new Bob(bobXposition-bobDiameter*2,bobYposition,bobDiameter);
	bobObject2 = new Bob(bobXposition-bobDiameter,bobYposition,bobDiameter);
	bobObject3 = new Bob(bobXposition,bobYposition,bobDiameter);
	bobObject4 = new Bob(bobXposition+bobDiameter,bobYposition,bobDiameter);
	bobObject5 = new Bob(bobXposition+bobDiameter*2,bobYposition,bobDiameter);
  roofObject = new Ground(width/2,height/4,width/7,20); 
  rope1 = new Rope(bobObject1.body, roofObject.body, -bobDiameter*2, 0);
  rope2 = new Rope(bobObject2.body, roofObject.body,-bobDiameter,0);
  rope3 = new Rope(bobObject3.body, roofObject.body,0, 0);
  rope4 = new Rope(bobObject4.body, roofObject.body, bobDiameter, 0);
  rope5 = new Rope(bobObject5.body, roofObject.body, bobDiameter*2, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 }
 function keyPressed() {
  if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-50,y:-45});
   }
 }
