var square;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  square=createSprite(400,200)
}

function draw() {
  background("yellow"); 
  square.x=mouseX 
  square.y=mouseY

  drawSprites();
}