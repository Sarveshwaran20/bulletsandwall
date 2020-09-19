var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  //random values
 speed=random(50,200);
 weight=random(220,320);
 thickness=random(20,100);

  createCanvas(1200,400);
   
  //creating sprites
  bullet=createSprite(100,200,100,50);
  bullet.shapeColor="brown";
  bullet.velocityX=speed; 

  wall=createSprite(1100,200,thickness,height/2);
  wall.shapeColor="blue";
}

function draw() {
  background("lightyellow");

  if(collided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=((0.5*weight*speed*speed)/(thickness*thickness*thickness)); 
    text("SPEED: "+ speed,1000,25 );
    text("WEIGHT: "+weight,1000,40);
    text("THICKNESS: "+thickness,1000,55);
    text("DAMAGE: "+damage,1000,70);
    if(damage<10)
    {
       bullet.shapeColor="green";
       textSize(50);
       text("GOOD!!!",600,200);
    }   else if(damage=>50)
    {
       bullet.shapeColor="red";
       textSize(50);
       text("LETHAL!!!",600,200);
    }
    
  }
  //displaying sprites  
  drawSprites();
}
function collided(takeBullet,takeWall)
{
bulletRightEdge=takeBullet.x+takeBullet.width;
wallLeftEdge=takeWall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true;
}
return false;
}