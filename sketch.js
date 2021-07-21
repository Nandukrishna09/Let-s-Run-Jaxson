var path,pathImg,runner,runnerImg
function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=4
  path.scale=1.2
  invisibleboundary1=createSprite(373,200,0,400)
  invisibleboundary1.visible=false
  invisibleboundary2=createSprite(20,200,0,400)
  invisibleboundary2.visible=false
  runner=createSprite(200,200,10,10)
  runner.addAnimation("runner",runnerImg)
  runner.scale=0.1
}

function draw() {
  background("black")
if(keyDown("left")){
runner.x=runner.x-10
}
if(keyDown("right")){
runner.x=runner.x+10
}
runner.collide(invisibleboundary1)
runner.collide(invisibleboundary2)
if(path.y>400){
path.y=height/2
}

drawSprites();
}
