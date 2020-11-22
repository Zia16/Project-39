var canvas,background;

var runner;

var gameOver = false;



function preload(){
 runnerImg = loadImage("Images/runner.png");

 backgroundImg = loadImage("Images/track.png");

}


function setup(){
createCanvas(840,390);
runner = createSprite(50,100,25,40);
runner.depth = 4;

}


function draw(){

background(200);

drawSprites();

if(!gameOver){
    background(200);
    drawSprites();
  }

  if(gameOver){

  }

  camera.position.x = runner.position.x + 300;

}