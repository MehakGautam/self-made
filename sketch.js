var bg,bgImg1,bgImg2;
var backButton,backButtonImg;
var visionButton,colorButton,exerciseButton,infoButton;
var visionButtonImg,colorButtonImg,exerciseButtonImg,infoButtonImg;
var gameState="start";

//exercise
var circle,ball;
var circleImg,ballImg;

function preload() {
  bgImg1=loadImage("bg1.png");
  bgImg2=loadImage("bg2.png");
  visionButtonImg=loadImage("vblock.png");
  colorButtonImg=loadImage("cblock.png");
  exerciseButtonImg=loadImage("eblock.png");
  infoButtonImg=loadImage("Iblock.png");
//exercise
  circleImg=loadImage("circle.png");
  ballImg=loadImage("ball.png");

  backButtonImg=loadImage("backButton.png");
}







function setup() {
  createCanvas(displayWidth-50,displayHeight-200);

  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  bg.addImage("bg1",bgImg1);
  bg.scale=0.7;
  
  visionButton=createSprite(200,370,100,100);
  visionButton.addImage(visionButtonImg);
  visionButton.scale=0.9;
  visionButton.visible=false;
  

  colorButton=createSprite(520,350,100,100);
  colorButton.addImage(colorButtonImg);
  colorButton.visible=false;
  colorButton.scale=1.1;

  exerciseButton=createSprite(850,350,100,100);
  exerciseButton.addImage(exerciseButtonImg);
  exerciseButton.visible=false;
  exerciseButton.scale=0.9;

  infoButton=createSprite(1150,350,100,100);
  infoButton.addImage(infoButtonImg);
  infoButton.visible=false;
  infoButton.scale=0.65;

  backButton=createSprite(100,100,100,100);
  backButton.addImage(backButtonImg);
  backButton.visible=false;
  backButton.scale=0.4;

  //exercise
  circle=createSprite(600,286);
  circle.addImage(circleImg);
  circle.scale=1.4;
  circle.visible=false;

  ball=createSprite(415,325);
  ball.addImage(ballImg);
  ball.scale=0.7;
  ball.visible=false;
  
}





function draw() {
  background(0);  
  drawSprites();
  if(gameState==="start"){
    start();
   
  }
  else if(gameState==="exercise"){
    exercises();
  }
  
  
}







function start(){

  visionButton.visible=true;
  colorButton.visible=true;
  exerciseButton.visible=true;
  infoButton.visible=true;

  backButton.visible=false;

  circle.visible=false;
  ball.visible=false;
 

  bg.addImage("bg1",bgImg1);
  bg.changeImage("bg1",bgImg1);

  textSize(10);
  fill("yellow");
  textFont("Arials");
  text("VISION CARE",200,300);

  textSize(25);
  fill("black");
  textFont("Arials");
  text("VISION CHECK",200,550);

  textSize(25);
  fill("black");
  textFont("Arials");
  text("COLOUR VISION",500,550);

  textSize(25);
  fill("black");
  textFont("Arials");
  text("EYE MUSCLES EXERCISE",800,550);

  textSize(25);
  fill("black");
  textFont("Arials");
  text("INFORMATION",1100,550);

  visionButton.rotation=visionButton.rotation+2;
  colorButton.rotation=colorButton.rotation+2;
  exerciseButton.rotation=exerciseButton.rotation+2;
  infoButton.rotation=infoButton.rotation+2;

  if(mousePressedOver(exerciseButton)){
    gameState="exercise";
  }
}

function exercises(){

  visionButton.visible=false;
  colorButton.visible=false;
  exerciseButton.visible=false;
  infoButton.visible=false;
  backButton.visible=true;
  //exercise
  circle.visible=true;
  ball.visible=true;
 

  bg.addImage("bg2",bgImg2);
  bg.changeImage("bg2",bgImg2);

  
  

  if(mousePressedOver(backButton)){
    gameState="start";
  }
}
