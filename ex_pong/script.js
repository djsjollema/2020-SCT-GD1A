// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let Ball = {};
Ball.x = 100;
Ball.y = 200;
Ball.speedX = 4;
Ball.speedY = 6;

Ball.update = ()=>{
  Ball.x += Ball.speedX;
  Ball.y += Ball.speedY;
}

Ball.draw = () => {
  context.fillRect(Ball.x,Ball.y,40,40);
}

function loop(){
  context.clearRect(0,0,canvas.width,canvas.height)
  Ball.update()
  Ball.draw();
}

setInterval(loop,10)
