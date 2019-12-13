// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen
context.beginPath();
context.lineWidth = 10;
context.strokeStyle = "rgb(10,100,30)";
context.fillStyle = "rgba(255,255,0,0.5)";
context.moveTo(20,20);
context.lineTo(300,300);
context.lineTo(520,20);
context.closePath();
context.stroke();
context.fill();
