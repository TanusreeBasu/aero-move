class Game{
    constructor(){

    } 
 start(){
      
       aeroplane = createSprite(300,570,50,50); 
       aeroplane.addImage(aeroplaneImg);
       aeroplane.visible = true;
        
        if(gameState===0){
           intro = new Intro();
            intro.display();
            aeroplane.visible = false;
          }
       }




play(){

        background(backImg);
        image(backImg,displayWidth*4,displayHeight,displayWidth*6,displayHeight);
        fill("green");
        stroke("yellow");
        strokeWeight(6)
        text("Press Arrow Keys to move",400,200); 
   
        if(keyDown("down")){
          aeroplane.velocityY= 4;
          console.log("working");
         
        }
        if(keyDown("right")){
          aeroplane.velocityX= 4;
          console.log("working");
         
        }

        if(keyDown("left")){
          aeroplane.velocityX= -4;
          console.log("working");
        
        }
        if(keyDown("up")){
          aeroplane.velocityY= -4;
          console.log("working");
        }
        camera.position.y=aeroplane.y
    camera.position.x = aeroplane.x
 
     
drawSprites()

}
}




