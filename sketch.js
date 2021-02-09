const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/mountain.bg.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    // platform = new Ground(150, 305, 300, 170);

    box1 = new Box(750,550);
    box2 = new Box(800,550);
    box3 = new Box(850,550);
    box4 = new Box(925,550);
    box5 = new Box(975,550);
    box6 = new Box(1025,550);

    log1 = new Log(805,540,165,PI/2);
    log2 = new Log(970,540,165,PI/2);
    log3 = new Log(890,510,75,PI/2);
    log4 = new Log(825,445,165,PI);
    log5 = new Log(950,445,165,PI);
    log6 = new Log(860,470,75,PI);
    log6.image = loadImage("sprites/log_glass.png");
    log7 = new Log(920,470,75,PI);
    log7.image = loadImage("sprites/log_glass.png");
    log8 = new Log(890,440,75,PI/2);
    log9 = new Log(887,350,140,PI/2);
    log10 = new Log(890,340,50,PI/2);
    log11 = new Log(860,300,75,PI);
    log12 = new Log(920,300,75,PI);
    log13 = new Log(890,265,65,PI/2);
    log14 = new Log(890,215,65,PI);

    pig1 = new Pig(890,497,35,35);
    pig2 = new Pig(890,317,35,35);
    pig3 = new Pig(890,419,50,50);    

    log15 = new Log(790,515,100,PI/7);
    log15.image = loadImage("sprites/log_glass.png");
    log16 = new Log(1000,515,100,-PI/7);
    log16.image = loadImage("sprites/log_glass.png");

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:150});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    log11.display();
    log12.display();
    log13.display();
    log14.display();

    pig1.display();
    pig2.display();
    pig3.display();

    log15.display();
    log16.display();

    // ground.display();

    // pig1.display();
    // pig1.score();

    
    // pig3.display();
    // pig3.score();
    // log3.display();

    
    // log4.display();
    // log5.display();

    bird.display();
    // platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldclockapi.com/api/json/gmt/now");
    var responseJSON = await response.json();

    var datetime = responseJSON.currentDateTime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1800){
        bg = "sprites/mountain.bg.png";
    }
    else{
        bg = "sprites/mountain.bg.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}