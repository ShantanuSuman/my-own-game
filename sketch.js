var jungle,jungleImg;
var boy,boy_running
var obstacleGroup,obstacle1,oobstacle2,obstacle3
var gameOver
var invisibleGround
function preload()
{
  jungleImg=loadImage("jungle1.jpg");
  boy_running=loadAnimation("running_1-removebg-preview.png","running_2-removebg-preview.png","running_3-removebg-preview.png","running_4-removebg-preview.png")
  obstacle1=loadImage("rock-removebg-preview.png")
  obstacle2=loadImage("rock_2-removebg-preview.png")
  obstacle3=loadImage("rock_3-removebg-preview.png")
  gameOverImg=loadImage("game over.jpg")
} 

function setup() {
createCanvas(1200,800);
jungle=createSprite(200,180,600,800); 
jungle.scale=0.5; 
 jungle.addImage(jungleImg); 
 jungle.x=jungle.width/2;
  jungle.velocityX=-4 ;

  boy=createSprite(50,680,20,50)
  boy.addAnimation("running",boy_running)
  boy.scale=0.8

  //gameOver=createSprite(1200,800)
  //gameOver.addImage(gameOverImg)

  invisibleGround = createSprite(150,800,1200,20);
  invisibleGround.visible = false;
} 

function draw() { 
  background(220);
  if(jungle.x<0)
  { 
    jungle.x = jungle.width/2 ;
  } 
  if (keyDown("space")&&boy.y>=650){
    boy.velocityY=-12
  }
  boy.velocityY=boy.velocityY+0.8
  boy.collide(invisibleGround)

  drawSprites() 
}