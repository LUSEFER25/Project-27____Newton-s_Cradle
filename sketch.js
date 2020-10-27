
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

	//Create the Bodies Here.

	//groundSprite = createSprite(width/2, height-35, width, 10);
	//groundSprite.shapeColor=color(255,255,0);

	ground = new Roof(width/2, height-35, width, 15);
	
	

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  box_bottom.display();
  box_left.display();
  box_right.display();
  ground.display();


}

//function keyPressed()
//{
//	if(keyCode === UP_ARROW)
//	{
//		Matter.Body.applyForce(paper.body,paper.body.position,{x:60, y:-60});
//	}
//}



