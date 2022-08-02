var mario;
var cenario;
var goomba;
var play;
var chao;
var equipe;
var pontuacao=0;
var inicio=0;
var gameover=1;
var estado=inicio;
var game0ver;
var g4me0ver;
var reset;
var re5et;

function preload(){
mario=loadImage("./img/mario.png");
cenario=loadImage("./img/cenario.png");
goomba=loadImage("./img/goomba.png");
game0ver=loadImage("./img/gameover.png");
reset=loadImage("./img/Reset.png");
}


function setup() {
  createCanvas(800,400);
  chao=createSprite(400,405,800,40);
  chao.visible=false;
  play=createSprite(50, 325, 50, 50);
  play.addImage(mario);
  play.scale=0.2;
  play.debug=false;
  play.setCollider("rectangle",0,0,250,555);
  equipe=new Group();
  g4me0ver=createSprite(400, 200, 50, 50);
  g4me0ver.addImage(game0ver);
  g4me0ver.scale=0.2;
  re5et=createSprite(400, 255, 50, 50);
  re5et.addImage(reset);
  re5et.scale=0.1;
  g4me0ver.visible=false;
  re5et.visible=false;
}

function draw() {
  background("black"); 
  console.log(play.y);
  image(cenario,0,0,800,400);
  fill("#FFD700");
  textSize(25);
  text(pontuacao,700,50);
  if(estado===inicio){
    g4me0ver.visible=false;
    re5et.visible=false;
    if(keyDown("w")&&play.y>=300){
      play.velocityY=-16;
    }
    play.velocityY+=1
    if(play.isTouching(equipe)&&play.y<300){
      play.velocityY=-16;
      pontuacao+=5
    }
    demon();
    if(play.isTouching(equipe)&&play.y>=300){
      estado=gameover
    }
  }else if(estado===gameover){
    equipe.setVelocityXEach(0);
    g4me0ver.visible=true;
    re5et.visible=true;
    if(mousePressedOver(re5et)){
      equipe.destroyEach();
      pontuacao=0;
      estado=inicio;
    }
  }
  
  play.collide(chao);
 
  drawSprites();
}

function demon(){
if(frameCount%Math.round(random(85,100))===0){
  var cogumelo=createSprite(850,350,50,50);
  cogumelo.addImage(goomba);
  cogumelo.velocityX=-3;
  cogumelo.scale=0.15;
  cogumelo.debug=false;
  cogumelo.setCollider("circle",0,0,120);
  equipe.add(cogumelo);
}
}