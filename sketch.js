
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1 = new Bob(200,200,60);
	bob2 = new Bob(240,200,60);
	bob3 = new Bob(260,200,60);
	bob4 = new Bob(280,200,60);
	bob5 = new Bob(300,200,60);
  
  chain1 = new Rope(bob1.body,{x:150, y:100});
  chain2 = new Rope(bob2.body,{x:270, y:100});
  chain3 = new Rope(bob3.body,{x:390, y:100});
  chain4 = new Rope(bob4.body,{x:510, y:100});
  chain5 = new Rope(bob5.body,{x:630, y:100});
  
  roof1 = new Roof(390,100,540,40);

  Engine.run(engine);
}

function draw() {
  
  rectMode(CENTER);
  
  background("gray");
 
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  roof1.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  drawSprites();
 
}

function keyPressed(){ 
  if(keyCode === UP_ARROW){ 
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-2,y:0}); 
  } 
}



