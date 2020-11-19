
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new Roof(390,190,300,20)
	ball1 = new Ball(270,300,21)
	ball2 = new Ball(320,300,21)
	ball3 = new Ball(370,300,21)
	ball4 = new Ball(420,300,21)
	ball5 = new Ball(470,300,21)
	rope1 = new Rope(roof1.body,ball1.body,-100)
	rope2 = new Rope(roof1.body,ball2.body,-50)
	rope3 = new Rope(roof1.body,ball3.body,0)
	rope4 = new Rope(roof1.body,ball4.body,50)
	rope5 = new Rope(roof1.body,ball5.body,100)

			Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:50,y:-90})
	}
}

