
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var paper1,dustbin1;
//var box1,box2,box3

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

   dustbin1 = new Dustbin(900,280,170,200)
	ground1 = new Ground(600,390,1200,20);	
	paper1 = new Paper(200,300,70);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("yellow");
 
  ground1.display();
  dustbin1.display();  
  paper1.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:230,y:-230});
	}
}