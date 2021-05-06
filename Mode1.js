const movforce = 0.001;
var Body=Matter.Body;
var Bodies=Matter.Bodies;
var World=Matter.World;
var Fire = new Audio('Move.mp3');
let engine=Matter.Engine.create();
let runner=Matter.Runner.create();
let world = World.create();
var Engine = Matter.Engine;
var Ceil = Bodies.rectangle(400,0,800,10,{isStatic:true});
var Grou = Bodies.rectangle(400,400,800,10,{isStatic:true});
var Walll = Bodies.rectangle(0,200,10,780,{isStatic:true});
var Wallr = Bodies.rectangle(800,200,10,780,{isStatic:true});
var Health = Bodies.rectangle(410,10,400,10,{isStatic:true,isSensor:true},{
    render:{
        fillStyle:'green',
        strokeStyle:'cyan',
        
    }
});

var start;
var About;
var render=Matter.Render.create(
    {
    element: document.body,
    engine:engine,
    options:
    {   width: 800,
        height: 400,
        wireframes: true,
        
                            
    }
});

var Pl0yer;
var img;
var enem1;
var enem2=Matter.Bodies.polygon(200,100,Math.floor(Math.random() * 8) + 3 ,10,{
    render:{
        fillStyle:'red',
        strokeStyle:'cyan',
        
    }} );
var gamemode = 0;






function eventCheck(event)
{
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
const keyPressed = event.keyCode;
Fire.play();
if(keyPressed===UP_KEY)
{  
    Body.applyForce(Pl0yer,{x:Pl0yer.position.x,y:Pl0yer.position.y},{x:0,y:-movforce});
    Body.applyForce(img,{x:img.position.x,y:img.position.y},{x:0,y:-movforce});
    
    
  }
if(keyPressed===DOWN_KEY)
{  
     Body.applyForce(Pl0yer,{x:Pl0yer.position.x,y:Pl0yer.position.y},{x:0,y:movforce});
     Body.applyForce(img,{x:img.position.x,y:img.position.y},{x:0,y:movforce});
     
}
if(keyPressed===RIGHT_KEY)
{
    Body.applyForce(Pl0yer,{x:Pl0yer.position.x,y:Pl0yer.position.y},{x:movforce,y:0});
    Body.applyForce(img,{x:img.position.x,y:img.position.y},{x:-movforce,y:0});
    
    
}
if(keyPressed===LEFT_KEY)
{
    Body.applyForce(Pl0yer,{x:Pl0yer.position.x,y:Pl0yer.position.y},{x:-movforce,y:0});
    Body.applyForce(img,{x:img.position.x,y:img.position.y},{x:movforce,y:0});
   
    
}

 
}
 function throttled(delay, fn) 
 {
 let lastCall = 0;
 
 return function (...args) {
 const now = (new Date).getTime();
 if (now - lastCall < delay) {
  
 return;
}
lastCall = now;
return fn(...args);
}
}
 
 
   engine.gravity={x:0,y:0};
   const player=new Player(100,200,10,10,500);
   
   const myHandler = (event) =>{eventCheck(event);} 
   const tHandler = throttled(240, myHandler);
   document.addEventListener("keydown", tHandler);
   const enemy1 = new Enemy(700,300,10,10,100);
   
  
  
   
   
  function Start(){ 






    enemy1.addEn();
    player.addNew();
   Matter.World.add(engine.world,[Pl0yer,img,enem1,enem2,Grou,Ceil,Walll,Wallr,Health]);//Add All elements
    gamemode= 1;
    main();
    Matter.Render.run(render);//Run The Functions
Matter.Runner.start(runner,engine);
  
  }
 
  
Start();