class Rope{
    constructor(bodyA,bodyB,xoffset){
    var  option = {
            bodyA:bodyA,
            bodyB:bodyB,
           pointA:{x:xoffset,y:0}
           
        }
        this.chain=Constraint.create(option)
        this.xoffset=xoffset
        World.add(world,this.chain);

    }
    display(){
   
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
         stroke(3)
         line(pointA.x+this.xoffset, pointA.y,pointB.x,pointB.y)
    
    }
}