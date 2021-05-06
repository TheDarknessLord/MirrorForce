var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
start = new Image();
start.src = './ImageAssets/Start.png';
about = new Image();
about.src='./ImageAssets/About.png';
title=new Image();
title.src='./ImageAssets/Title.png';   
make_base();

function make_base()
{
   
  
  
    start.onload = function(){
    ctx.drawImage(start, 250, 150,200,100);
    
  }
   about.onload= function(){
    ctx.drawImage(about, 250, 250,200,100);
   }
   title.onload= function(){
    ctx.drawImage(title, 250, 50,200,100);
   }
}
function eventCheck(event)
{  if((event.offsetX>250)&&(event.offsetX<550)&&(event.offsetY>150)&&(event.offsetY<250))
    window.location.href = "GameFile/Breaksym.html";
    if((event.offsetX>250)&&(event.offsetX<550)&&(event.offsetY>250)&&(event.offsetY<350))
    window.location.href = "https://www.reddit.com/user/TheDarknessLord69/comments/mxlls0/about_mirror_force/?utm_source=share&utm_medium=web2x&context=3";//Complete this
}
myCanvas.addEventListener('click',eventCheck);

 
