class Ball{
    constructor(x, y) {
        var options = {
            'restitution':0,
            'density':0.006,
            'airFriction':0
            
            
        }
        this.body = Bodies.circle(x, y,10,options);
        this.width = 10;
        
        //this.image = loadImage("sprites/beatles_neo_ball_1706c7b5-f4b9-4e49-bdc6-433de3c4b92c_large.webp");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
      ellipse(0,0,this.width)
        pop();
      }
}