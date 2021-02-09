const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var charge

var engine
var world
var bg
var ball
var paddle,paddle2,paddle3,paddle4
var star
var bong1,bong2,bong3,bong4,bong5
var tri1
var brick 


function preload() {
bg = loadImage("sprites/bc.jpg")

bong1 = loadImage("sprites/bong.png")
bong2 = loadImage("sprites/bong.png")
bong3 = loadImage("sprites/bong.png")
bong4 = loadImage("sprites/bong.png")
bong5 = loadImage("sprites/bong.png")

triy1 = loadImage("sprites/tri.jpg")


star = loadImage("sprites/obsbonus.jpg")    
}

function setup() {
    createCanvas(500,700)
    engine=Engine.create()
    world=engine.world

    charge=0;

    var brick_options={
        isStatic:true
    }

    brick=Bodies.rectangle(440,580,50,100,brick_options)
    World.add(world,brick)

    ball=new Ball(455,550)
    paddle= new Paddle(225,660,40,20,1)
    paddle2= new Paddle(275,660,40,20,2)
    paddle3= new Paddle(168,414,50,30,3)
    paddle4= new Paddle(331,414,50,30,4)
    
    var options={
        isStatic:true
    }
    obs1=Bodies.rectangle(70,50,10,10,options)
    World.add(world,obs1)
    
    star1=Bodies.rectangle(160,100,10,10,options)
    World.add(world,star1)

    obs2=Bodies.rectangle(390,50,10,10,options)
    World.add(world,obs2)

    obs3=Bodies.rectangle(140,300,10,10,options)
    World.add(world,obs3)

    obs4=Bodies.rectangle(320,300,10,10,options)
    World.add(world,obs4)

    obs5=Bodies.rectangle(230,510,10,10,options)
    World.add(world,obs5)

    tri1=Bodies.rectangle(38,260,10,10,options)
    World.add(world,tri1)



}


function draw(){

background(bg)
Engine.update(engine)






paddle.display()
ball.display()
paddle2.display()
paddle3.display()
paddle4.display()

rect(brick.position.x,brick.position.y,100,100)

image(bong1,obs1.position.x,obs1.position.y,40,40)
image(star,star1.position.x,star1.position.y,180,170)
image(bong2,obs2.position.x,obs2.position.y,40,40)
image(bong3,obs3.position.x,obs3.position.y,40,40)
image(bong4,obs4.position.x,obs4.position.y,40,40)
image(bong5,obs5.position.x,obs5.position.y,40,40)

image(triy1,tri1.position.x,tri1.position.y,30,50)

if(keyIsDown(UP_ARROW)){
    fill("white");
    textAlign(CENTER);
    textSize(10);

    if(charge > -50){
      charge-=0.3;
      text("Charge: " + round(charge * -1), 410, 610);
    }else{
      text("Charge: MAX", 410, 610);
    }
  }
}

function keyReleased(){
    if(keyCode === UP_ARROW) {
      Matter.Body.setVelocity(ball.body, {x: 0, y: charge});
  
      charge = 0;
    }
  }


