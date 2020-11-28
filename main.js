var mouseevent="empty";
var lastpositionofx,lastpositionofy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
color=document.getElementById("color").value;
width=document.getElementById("width").value;
mouseevent="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e)
{
currentpositionofx=e.clientX-canvas.offsetLeft;
currentpositionofy=e.clientY-canvas.offsetTop;
if(mouseevent=="mousedown")
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
console.log("last posion of x and y value= ");
console.log("x= "+lastpositionofx+"y= "+lastpositionofy);
ctx.moveTo(lastpositionofx,lastpositionofy);
console.log("current posion of x and y value= ");
console.log("x= "+currentpositionofx+"y= "+currentpositionofy);
ctx.lineTo(currentpositionofx,currentpositionofy);
ctx.stroke();
}
lastpositionofx=currentpositionofx;
lastpositionofy=currentpositionofy;
}
function clear()
{
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);





}