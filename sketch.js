const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world,ground,ground2;
var polygonIMG;
var slingshot,ball;
var score=0;
var bg="sprites/bg.png"
var backgroundImg;
function preload(){
polygonIMG=loadImage("polygon.png")
getBackgroundImg();
}

function setup() {
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine)
  createCanvas(800,400);
  ground=new Ground(200,380,900,20)
  ground2=new Ground(100,100,20,40)
  block1=new Box(300,275,30,40)
  block2=new Box(330,275,30,40)
  block3=new Box(360,275,30,40)
  block4=new Box(390,275,30,40)
  block5=new Box(420,275,30,40)
  block6=new Box(450,275,30,40)
  block7=new Box(480,275,30,40)
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  //top
  block16 = new Box(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Box(640,175,30,40);
  blocks2 = new Box(670,175,30,40);
  blocks3 = new Box(700,175,30,40);
  blocks4 = new Box(730,175,30,40);
  blocks5 = new Box(760,175,30,40);
  //level two
  blocks6 = new Box(670,135,30,40);
  blocks7 = new Box(700,135,30,40);
  blocks8 = new Box(730,135,30,40);
  //top
  blocks9 = new Box(700,95,30,40);
  //block8=new Box(40,275,30,40)
poly=Bodies.circle(50,200,20)
World.add(world,poly)
  slingshot=new SlingShot(this.poly,{x:100,y:200})

 
  
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);  
  ground.display();
  ground2.display();
 imageMode(CENTER);
 image(polygonIMG,poly.position.x,poly.position.y,40,40);
 block1.display();  block1.score();
 
 block2.display();block2.score();
 block3.display();block3.score();
 block4.display();block4.score();
 block5.display();block5.score();
 block6.display();block6.score();
 block7.display();block7.score();
 block8.display();block8.score();
 block9.display();block9.score();
 block10.display();block10.score();
 block11.display();block11.score();
 block12.display(); block12.score();
 
 block13.display();block13.score();
 block14.display();block14.score();
 block15.display();block15.score();
 block16.display();block16.score();

 //set 2 for second stand
 //level one
 blocks1.display();blocks1.score();
 blocks2.display();blocks2.score();
blocks3.display();blocks3.score();
blocks4.display();blocks4.score();
 blocks5.display(); blocks5.score();
 //level two
 blocks6.display();blocks6.score();
 blocks7.display();blocks7.score();
 blocks8.display();blocks8.score();
 //top
 blocks9.display();blocks9.score();
 
 
 slingshot.display();
 text("Score: " + score,750,40)
}

function mouseDragged(){
  Matter.Body.setPosition(this.poly,{x:mouseX,y:mouseY})

}

function mouseReleased(){
  slingshot.fly();
}



function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(this.poly, {x:55, y:300}) 
    slingshot.attach(this.poly)
  }
}
async function getBackgroundImg()
{
   var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
   var responseJSON= await response.json()
   var datetime=responseJSON.datetime;
   var hour=datetime.slice(11,13)
   if(hour>=06 && hour<=19 ){
       bg="sprites/bg.png"
   }
   else {
       bg="sprites/bg2.png"
   }
   backgroundImg=loadImage(bg);
   console.log(backgroundImg)
}