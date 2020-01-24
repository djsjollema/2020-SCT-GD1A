// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let circles = [];

for(let i =0; i< 100 ; i++){
  //start circleObject

  let circleObject = {};
  circleObject.x = getRandomInt(width);
  circleObject.y = getRandomInt(height);
  circleObject.radius = 5;
  circleObject.color = "purple";
  circleObject.speedX = 3;
  circleObject.speedY = 4;

  circleObject.draw = function(){
    context.beginPath();
    context.fillStyle = circleObject.color;
    context.arc(circleObject.x,circleObject.y,circleObject.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
  }

  circleObject.update = function(){
    circleObject.x = circleObject.x + circleObject.speedX;
    circleObject.y = circleObject.y + circleObject.speedY;
    if(circleObject.y > height - circleObject.radius || circleObject.y < circleObject.radius){
      circleObject.speedY = - circleObject.speedY ;
    }
    if(circleObject.x > width - circleObject.radius || circleObject.x < circleObject.radius){
      circleObject.speedX = - circleObject.speedX ;
    }
  }

  // einde circleObject

  circles.push(circleObject)
}



function loop(){
  context.clearRect(0,0,width,height);
  for(let i =0; i<circles.length;i++){
    circles[i].update();
    circles[i].draw();
  }
}

setInterval(loop,10);

function getRandomInt(max){
  return Math.floor(Math.random()*max);
}
