const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2
var ground, pig1,log1

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(700,380,70,70)
    box2=new Box(920,380,70,70)
    ground=new Ground(600,height,1200,20);

    pig1=new Pig(810,350);
    log1=new Log(700,200,20,PI/2);

    
    //box3=new Box(700,240,70,70)
    //box4=new Box(920,240,70,70)
   // pig3=new Pig(810,220);
    //log3=new Log(810,180,20,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x)
    console.log(box2.body.position.y)
    console.log(box2.body.angle)
    //rectMode(CENTER)
    box1.display()
    box2.display()
    ground.display()
   pig1.display()
    log1.display()
   // box3.display()
    //box4.display()
   // pig3.display()
   // log3.display()
}