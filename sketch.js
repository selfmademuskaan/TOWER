const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box;
var ball, slingShot;


function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(330, 235, 30, 40);
    box2 = new Box(360, 235, 30, 40);
    box3 = new Box(390, 235, 30, 40);
    box4 = new Box(420, 235, 30, 40);
    box5 = new Box(450, 235, 30, 40);
    box6 = new Box(480, 235, 30, 40);

    stand = new Ground(400, 260, 250, 10);

    ball = new Pong(30, 300, 30, 30);

    slingshot = new SlingShot(Pong.body,{x:30, y:300});

    ground = new Ground(600, height, 1200, 20);
}





function draw() {

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    stand.display();

    ball.display();

    slingshot.display();

    ground.display();
}

