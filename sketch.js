var wall;
var car;
var deformation;

var gamestate = "start";
function setup() {
  createCanvas(1000,400);
  wall = createSprite(900, 200, 60, height/2);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "black";
  var weight = 300;
  var speed= 50;
}

function draw() {
  if(gamestate === "redo"|| gamestate === "start"){
    speed = random(55,90);
    weight = random(400,1500);
    speed = round(speed);
    weight = round(weight);

    car.velocityX = speed;
    car.shapeColor = "black";

  }
  if(keyDown("r")&& gamestate === "crashed"){
    gamestate = "redo";
    car.x = 50;
  }
  if(car.x > wall.x){
    deformation = 0.5 * weight *speed*speed/22500;
    gamestate = "crashed";
    car.velocityX = 0;
    car.shapeColor = "yellow";
    if(deformation > 180){
      car.shapeColor = "red";
    }
    if(deformation < 80){
      car.shapeColor = "green";
    }
  }
  
  
  
  background(255,255,255);  
console.log(car.x);
  drawSprites();
  text("Speed: "+ speed + "   " + "Weight: " + weight + "   " + "Deformation: " + deformation,20,20);
}