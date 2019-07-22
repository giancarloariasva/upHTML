//crea variabls
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// canvas.style.width = "500px";
// canvas.style.height = "400px";

//crea rectangulo
ctx.fillStyle = "#FF0088";
ctx.fillRect(0,00,150,75);

//Crea circulo
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke(); 

//gradiente
// Create gradient
var grd=ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
// Fill with gradient
ctx.fillStyle="red";
ctx.fillRect(50,50,150,80);
//line
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
//line2

ctx.moveTo(0,0);
ctx.lineTo(100,200);
ctx.stroke();

//img
function myCanvas() {
    var c = document.getElementById("myCanvas");
    var d = document.getElementById("myCanvas2");
    var ctx = c.getContext("2d");
    var dtx = d.getContext("2d");
    var img1 = document.getElementById("luffy");
    var img2 = document.getElementById("giphy");
    ctx.drawImage(img1,10,10);
    dtx.drawImage(img2,10,10);
  }
