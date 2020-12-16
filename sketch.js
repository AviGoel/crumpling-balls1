
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,dustbin1,ground,dustbin2,dustbin3;

var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper1=new Paper(100,600,50);
   
   dustbin1=new Dustbin(600,625,200,20);
   dustbin2=new Dustbin(490,575,20,100);
   dustbin3=new Dustbin(710,575,20,100);
  
   ground = new Ground(400,640,800,20);

   Engine.run(engine);
   }


function draw() {
  Engine.update(engine);
  background(0);
  ground.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  }
}

