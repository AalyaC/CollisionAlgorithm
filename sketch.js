
var fixeRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixeRect = createSprite(600, 400, 50, 80);
 fixeRect.shapeColor="green";

 movingRect = createSprite(400, 200, 80, 30);
 movingRect.shapeColor="green";
  
}

function draw() {
  background(0);
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixeRect.x < fixeRect.width/2 + movingRect.width/2 &&
     fixeRect.x - movingRect.x < fixeRect.width/2 + movingRect.width/2 
    && movingRect.y - fixeRect.y < fixeRect.height/2 + movingRect.height/2 
    && fixeRect.y - movingRect.y < fixeRect.height/2 + movingRect.height/2){
      fixeRect.shapeColor="red";
      movingRect.shapeColor="red";
    }else{
      fixeRect.shapeColor="green";
      movingRect.shapeColor="green";
    }

  drawSprites();
}