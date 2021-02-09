class Paddle{
    constructor(x, y,width,height,type) {
        var options = {
            'friction':0,
            'density':0.001,
            'frictionAir':0.01,
            isStatic:true
           
            
        }
        this.body = Bodies.rectangle(x, y,width,height/1.2,options);
        this.width = width;
        this.height = height;

        
        if(type===1){
            this.image = loadImage("sprites/paddle.jpg");
         }

         else if(type===2){
            this.image = loadImage("sprites/paddle2.jpg");  
         }
         else if(type===3){
            this.image = loadImage("sprites/paddle.jpg");
         }

         else if(type===4){
            this.image = loadImage("sprites/paddle2.jpg");  
         }

      
         World.add(world, this.body);
        

        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}