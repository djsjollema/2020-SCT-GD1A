// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let colors= ['red','blue','green','purple','white'];

// hier kun je op de canvas tekenen
function createCircle(){
  let x = getRandomNumber(width);
  let y = getRandomNumber(height);
  context.beginPath();
  context.lineWidth = "5";
  context.fillStyle = colors[getRandomNumber(colors.length)]
  context.moveTo(x,y);
  context.arc(x,y,40,0.5,1.8*Math.PI);
  context.closePath();
  context.stroke();
  context.fill();
}

// for(let i = 0; i<100; i++){
//   createCircle();
// }

function animate(){
  createCircle();
}

setInterval(animate,1000);


function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}
