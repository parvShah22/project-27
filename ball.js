class Ball {
    constructor(x,y,radius){
        var options = {
            'restitution':0.1,
            'friction':0.5,
            'density':0.75
        }
        this.radius = radius
        this.body = Bodies.circle(x, y,radius );
        World.add(world, this.body);
      }
     display(){
        var pos =this.body.position;
      
        
        
        
        ellipseMode(RADIUS);
        fill("red");
        ellipse(pos.x,pos.y, this.radius, this.radius);
        
          };
    }