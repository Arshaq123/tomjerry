
var cat , mouse;

var catIMG, catrunningImg,mouseIMG, mouseIMG2,mouseIMG3;

var garden; gardeni;

function preload() {

     catIMG=loadAnimation("images/tomOne.png")
    //load the images here
 
    catrunningImg = loadAnimation("images/tomtwo.png","images/tomthree.png");

    mouseIMG=loadAnimation("images/jerryOne.png");
    mouseIMG2=loadAnimation("images/jerryTwo.png","images/jerrythree.png");
    mouseIMG3=loadAnimation("images/jerryFour.png");
    catcollide=loadAnimation("images/tomFour.png");

    gardeni=loadImage("images/garden.png");
}



function setup(){
    createCanvas(1000,800);



    garden=createSprite(400,250)
    garden.addImage(gardeni),
    garden.scale=1.5;
   

    cat=createSprite(700,400);
    cat.addAnimation("standing", catIMG);
    cat.addAnimation("catrunning", catrunningImg );
    cat.scale=0.2;
    
    mouse=createSprite(100,400);
    mouse.addAnimation("standing",mouseIMG);
    mouse.addAnimation("mouseemp",mouseIMG2);
    
    mouse.scale=0.1;
}

function draw() {

    background("255");
    
    
    
    text(mouseX+','+mouseY,10,45)

      if(cat.x-mouse.x<(cat.width-mouse.width)/2){

        cat.velocityX=-0;
            
        cat.addAnimation("catLastImage", catcollide);
        cat.changeAnimation("catLastImage");
        

        mouse.addAnimation("mouseLastImage",mouseIMG3);
        mouse.changeAnimation("mouseLastImage");
       

      }



    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){


    if (keyCode  === LEFT_ARROW){

      cat.velocityX=-5;
      cat.changeAnimation("catrunning", catrunningImg )
      
    }
  //For moving and changing animation write code here


  if (keyCode  === LEFT_ARROW){

  
    mouse.changeAnimation("mouseemp",mouseIMG2);
    
  }


}
 