
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball
var engine
var world


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
     
	Ground=new ground(500,690,1000,10)
	leftside= new ground(600,625,10,120)
	rightside= new ground(850,625,10,120)



	var ball_options={
	  restituition:0.3,
	  density:1.2,
	  friction:0,
	  isStatic:false

		

	}

	ball=Bodies.circle(200,230,20,ball_options)
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 
  
  
  drawSprites();
  Ground.display()
  leftside.display()
  rightside.display()
  

  ellipse(ball.position.x,ball.position.y,20,20)
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-64})
	}
	
}



