var aeroplane,aeroplaneImg;
var story,keys,play,Menu;
var backImg,backImg;
var gameState = 0;
var aeroplaneState = 0;
var speed = 0;
var bg;
var intro;
var game;
var canvas;
function preload(){
aeroplaneImg = loadImage("Images/Aeroplane image.png")
backImg = loadImage("Images/Airportimage.png")
backImg2 = loadImage("Images/Background image.jpg")
}

function setup() {
 canvas =  createCanvas(displayWidth-100,displayHeight-100);
 background(backImg );
  game = new Game();
 game.start();
}

function draw(){
 
  if(gameState ===1){
    clear()
    // text.visible=false
    game.play();
   }


drawSprites();
}
     



 



