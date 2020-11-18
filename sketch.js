const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,row1,row2,row3,row4,row5,row6,row7,row8,row9,obstacle1;

var particle=[]
var plinko=[]
var division=[]

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(240,799,600,20);
  
   
  for(var i=0;i<=width;i=i+80){
      division.push(new Division(i,height-divisionHeight/2,10,divisionHeight))


  }

  for(var j=40;j<=width;j=j+50){

  plinko.push(new Plinko(j,75,15))

  }

  for(var j=15;j<=width-10;j=j+50){

    plinko.push(new Plinko(j,175,15))
  
    }

    for(var j=40;j<=width;j=j+50){

      plinko.push(new Plinko(j,275,15))
    
      }

      for(var j=15;j<=width-10;j=j+50){

        plinko.push(new Plinko(j,375,15))
      
        }

        Engine.run(engine)





}



function draw() {

 

  background(0);

  if(frameCount% 20===0){

    particle.push(new Particle(random(width/2-10,width/2+10),10,10))

  }

  for(var j=0;j<particle.length;j++){

    particle[j].display();
  
    }

    for(var j=0;j<plinko.length;j++){

      plinko[j].display();
    
      }

      for(var j=0;j<division.length;j++){

        division[j].display();
      
        }

 drawSprites();

  

  ground.display();
  
}