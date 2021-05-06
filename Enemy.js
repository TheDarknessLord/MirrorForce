class Enemy{
    constructor(x,y,size,health)
    {
        this.x=x;
        this.y=y;
        this.size=size;
        this.sides=Math.floor(Math.random() * 8) + 3;
        this.health=health;
    }
    addEn()
    {
        enem1 = Matter.Bodies.polygon(this.x,this.y, this.sides , this.size,{
            render:{
                fillStyle:'red',
                strokeStyle:'cyan',
                
            }});
        
    }
     EnMov(){
        const distp1 = (Math.sqrt((Pl0yer.position.x-enem1.position.x)*(Pl0yer.position.x-enem1.position.x)+(Pl0yer.position.y-enem1.position.y)*(Pl0yer.position.y-enem1.position.y)));
        const disti1 = (Math.sqrt((img.position.x-enem1.position.x)*(img.position.x-enem1.position.x)+(img.position.y-enem1.position.y)*(img.position.y-enem1.position.y)));
        const veloenemp1 = {x:(Pl0yer.position.x-enem1.position.x),y:(Pl0yer.position.y-enem1.position.y)};
        const veloenemi1 = {x:(img.position.x-enem1.position.x),y:(img.position.y-enem1.position.y)};
       if((Math.sqrt(((Pl0yer.position.x-enem1.position.x)*(Pl0yer.position.x-enem1.position.x))+(Pl0yer.position.y-enem1.position.y)*(Pl0yer.position.y-enem1.position.y)))<(Math.sqrt(((img.position.x-enem1.position.x)*(img.position.x-enem1.position.x))+(img.position.y-enem1.position.y)*(img.position.y-enem1.position.y))))
   Matter.Body.setVelocity(enem1,{x:2.25*veloenemp1.x/(distp1),y:2.25*veloenemp1.y/(distp1)} );
else
    Matter.Body.setVelocity(enem1,{x:2.25*veloenemi1.x/disti1,y:2.25*veloenemi1.y/disti1} );
    const distp2 = (Math.sqrt((Pl0yer.position.x-enem2.position.x)*(Pl0yer.position.x-enem2.position.x)+(Pl0yer.position.y-enem2.position.y)*(Pl0yer.position.y-enem2.position.y)));
    const disti2 = (Math.sqrt((img.position.x-enem2.position.x)*(img.position.x-enem2.position.x)+(img.position.y-enem2.position.y)*(img.position.y-enem2.position.y)));
    const veloenemp2 = {x:(Pl0yer.position.x-enem2.position.x),y:(Pl0yer.position.y-enem2.position.y)};
    const veloenemi2 = {x:(img.position.x-enem2.position.x),y:(img.position.y-enem2.position.y)};
    if((Math.sqrt(((Pl0yer.position.x-enem2.position.x)*(Pl0yer.position.x-enem2.position.x))+(Pl0yer.position.y-enem2.position.y)*(Pl0yer.position.y-enem2.position.y)))<(Math.sqrt(((img.position.x-enem2.position.x)*(img.position.x-enem2.position.x))+(img.position.y-enem2.position.y)*(img.position.y-enem2.position.y))))
    Matter.Body.setVelocity(enem2,{x:2.25*veloenemp2.x/(distp2),y:2.25*veloenemp2.y/(distp2)} );
     
    else
    Matter.Body.setVelocity(enem2,{x:2.25*veloenemi2.x/disti2,y:2.25*veloenemi2.y/disti2} );  
     
       
    
    }
    
   }