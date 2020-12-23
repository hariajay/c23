const Engine=Matter.Engine;
const World =Matter.World;
const Bodies= Matter.Bodies

var eng,wld;
var sprite1;

var box1, box2,box3;
var ground1;
function setup() {
  createCanvas(400,400);
  eng= Engine.create();
  wld=eng.world;
  sprite1 = createSprite(100,100,50,50)
  sprite1.shapeColor = "blue"


  box1= new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);

  box3 = Bodies.rectangle(100,100,50,50)
  World.add(wld,box3)

  //console.log(box3.position.x)

  

  ground1 = new Ground(200,370,400,10)
}

function draw() {
  background(0);  
  Engine.update(eng)
  box1.display();
  box2.display();
  ground1.display();
  
  sprite1.x=box3.position.x;
  sprite1.y= box3.position.y
  drawSprites();
 
}