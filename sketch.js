var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var edges;

function preload(){
  //LOAD ALL THE IMAGES
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);

  //ADD ANIMATION TO THE SPRITE
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  //edges=createEdgeSprites();

}

function draw() {
  background(220);
  /*
  //jumping the trex on space key press
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  */

  //PULL OBJECT USING GRAVITY . REDUCE VELOCITY UNTIL IT BECOMES ZERO
  //trex.velocityY = trex.velocityY + 0.8

  //trex.collide(edges);

  drawSprites();
}