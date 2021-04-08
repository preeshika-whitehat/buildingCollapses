const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var floor1, floor2, floor3, floor4, floor5;
var floor6, floor7, floor8, floor9, floor10, floor11, floor12;
var stoneObj;
var box;

function preload() {
  //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   
    floor1 = new building(800,670,50,50);
    floor2 = new building(800,540,50,50);
    floor3 = new building(800,420,50,50);
    floor4 = new building(800,280,50,50);
    floor5 = new building(800,160,50,50);

    floor6 = new building(900,670,50,50);
    floor7= new building(900,540,50,50);
    floor8 = new building(900,420,50,50);
    floor9 = new building(900,280,50,50);
    floor10 = new building(900,160,50,50);
    floor11= new building(900,110,50,50);
    floor12 = new building(000,98,50,50);

    box = new Box(500,500,50,50);

    stoneObj = new stone(box.body,{x:500,y:300});

}

function draw(){
    background("cyan");
    Engine.update(engine);
    fill("green")
    ground.display();
    fill("brown")
    floor1.display();
    fill("black")
    floor2.display();
    fill("green")
    floor3.display();
    fill("yellow")
    floor4.display();
    fill("pink")
    floor5.display();
    
    fill("purple")
    floor6.display();
    fill("yellow")
    floor7.display();
    fill("blue")
    floor8.display();
    fill("brown")
    floor9.display();
    fill("green")
    floor10.display();
    fill("pink")
    floor11.display();
    fill("red")
    floor12.display();
    fill("black");
    box.display();
    stoneObj.display();
}

function mouseDragged(){
    Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  stoneObj.fly();
}