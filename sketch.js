var box1,box2,box3, boxLeft, boxRight, boxBase, paper, boxPosition, boxY, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,650,1200,20);


	boxPosition = width/2-100;
	boxY = 610;
	box1 = createSprite(boxPosition+300, boxY+35, 200, 20);
	box1.shapeColor = "white";
	boxBase = Bodies.rectangle(boxPosition+300,boxY+35,200,20,{isStatic: true});
	World.add(world, boxBase);

	box2 = createSprite(boxPosition+200,boxY-10,20,100)
	box2.shapeColor = "white";
	boxLeft = Bodies.rectangle(boxPosition+200,boxY-10,20,100,{isStatic: true});
	World.add(world, boxLeft);

	box3 = createSprite(boxPosition+400,boxY-10,20,100);
	box3.shapeColor = "white";
	boxRight = Bodies.rectangle(box.Position+400,boxY-5,20,100);
	World.add(world, boxLeft);

	paper = new Paper(100,600,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:800,y:800})
	}
}



