var cat,mouse;


function preload() {
    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");

    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");

    backImage=loadImage("images/garden.png");


}

function setup(){
    createCanvas(1000,800);
    
    cat=createSprite(700,600,20,20);
    cat.addAnimation("normalCat",catImg1);
    cat.scale=0.1;

    mouse=createSprite(150,600,20,20);
    mouse.addAnimation("normalMouse",mouseImg1);
    mouse.scale=0.1;

}

function draw() {

    background(backImage);
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.addAnimation("lastC",catImg3);
        cat.velocityX=0;
        cat.x=200;
        cat.changeAnimation("lastC")

        mouse.addAnimation("lastM",mouseImg3);
        mouse.changeAnimation("lastM");

    }

    drawSprites();
}


function keyPressed(){

if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseTease",mouseImg2);
    mouse.changeAnimation("mouseTease");


}


}
