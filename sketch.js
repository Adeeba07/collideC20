var fixedrect, movingrect

function setup() {
  createCanvas(800,400);
  
  movingrect= createSprite(400, 200, 80, 30);
  movingrect.shapeColor = "green"
  movingrect.debug=true
  fixedrect= createSprite(200,200,50,80)
  fixedrect.shapeColor = "green"
  fixedrect.debug=true
  
}

function draw() {
  background(0,0,0); 
  movingrect.x=World.mouseX 
  movingrect.y=World.mouseY
  console.log(movingrect.x-fixedrect.x)
  if (frameCount % 60 == 0){
    if(movingrect.x-fixedrect.x < fixedrect.width/2+ movingrect.width/2 && 
      fixedrect.x-movingrect.x < fixedrect.width/2+ movingrect.width/2  &&
      movingrect.y-fixedrect.y < fixedrect.width/2+ movingrect.width/2 && 
      fixedrect.y-movingrect.y < fixedrect.width/2+ movingrect.width/2)   
   {

      movingrect.shapeColor = "red"
      fixedrect.shapeColor = "red"
    }
    
    else{
    movingrect.shapeColor = "green"
    fixedrect.shapeColor = "green"
    
    }

  }
 
  drawSprites();

}