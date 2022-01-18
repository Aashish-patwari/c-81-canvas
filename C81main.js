var canvas= document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mousex=e.clientX -canvas.offsetLeft;
    mousey=e.clientY -canvas.offsetTop;
    circle(mousex,mousey)

}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle="cyan"
    ctx.lineWidth=10;
    ctx.arc(mousex,mousey,100,0,2*Math.PI);
    ctx.stroke();
    
}