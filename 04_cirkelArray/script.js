// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

//start circleObject

let circleObject = {};
circleObject.x = 300;
circleObject.y = 400;
circleObject.radius = 40;
circleObject.color = "purple";
circleObject.speedX = 3;
circleObject.speedY = 4;

circleObject.draw = function(){
  context.beginPath();
  context.fillStyle = "white"
  context.arc(circleObject.x,circleObject.y,circleObject.radius,0,2*Math.PI);
  context.stroke();
  context.fill();
}

circleObject.update = function(){
  circleObject.x = circleObject.x + circleObject.speedX;
  circleObject.y = circleObject.y + circleObject.speedY;
}

// einde circleObject

function loop(){
  circleObject.update();
  circleObject.draw();
}

setInterval(loop,10)
