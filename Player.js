class Player{
constructor(x,y,size,health)
{
    this.x=x;//Initializing The Player coordinates
    this.y=y;
    this.size=size;//Passes the size as a function
    this.health=health;
}
addNew()
{
    Pl0yer = Bodies.rectangle(this.x,this.y,this.size,this.size,{
        render:{
            fillStyle:'cyan',
            strokeStyle:'cyan',
            
        }});
    img = Bodies.rectangle(this.x+500,this.y,this.size,this.size,{
        render:{
            fillStyle:'cyan',
            strokeStyle:'cyan',
            
        }});
}
death()
{   
  
    window.location.href = "../index.html";
      
    
}
hasCollided(){
    if(Matter.SAT.collides(Pl0yer,enem1).collided||Matter.SAT.collides(img,enem1).collided||Matter.SAT.collides(Pl0yer,enem2).collided||Matter.SAT.collides(img,enem2).collided)
    {this.health=this.health-0.1;Matter.Body.scale(Health,this.health/10, 1);}
if(Math.floor(this.health===0)||(this.health<0))
    player.death();
    
}

}
