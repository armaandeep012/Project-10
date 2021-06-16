var ship, ship_Moving;

function preload(){
  ship_Moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImg = loadAnimation("sea.png");
}

function setup(){
  createCanvas(1920,1080);

  scene = createSprite(940,480,20,20);
  scene.addAnimation("background", seaImg);

  ship = createSprite(900,550);
  ship.scale = 0.4;
  ship.addAnimation("moving", ship_Moving);

}

function draw() {
  background("blue");
  drawSprites();
  
  scene.velocityX = -9;

  if(scene.x < 0){
    scene.x = scene.width/2;
  }

}