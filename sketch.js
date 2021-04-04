//name spacing 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
// all the variables
var engine, world;
var ground;
var ball ;
var object1 ,object2;

function setup(){
    //canvas creation
    var canvas = createCanvas(400,400);
    // creating our own engine 
    engine = Engine.create();
    // adding the engine to the world
    world = engine.world;

    var ground_options ={
        // putting the statistics as true
        isStatic: true
    }
    // creating the ground
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    
    console.log(ground);
    var ball_options={
        restitution:10
    }
    // creating the ball
    ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

    // creating the object 1
    object1 = Bodies.rectangle(100,300,50,80);
    World.add(world,object1);
}

function draw(){
    background(0);
    Engine.update(engine);
    // the rectangle to the center 
    rectMode(CENTER);
     // positioning the rect
   rect(ground.position.x,ground.position.y,400,20);
   // positioning the circle
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    //positioning the object1
    rectMode(CENTER);
    rect(object1.position.x,object1.position.y,300,30);
}