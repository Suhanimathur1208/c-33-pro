class Snow {
    constructor(x,y,r){
        var options = {
            'friction' : 0.3,
            'density' : 0.3,
            
        }
        this.x = x;
        this.y = y;
        this.r=r;
        this.image = loadImage("snow5.webp");
        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);
    }
    display(){
        var snowPos=this.body.position;		
        push()
        translate(snowPos.x, snowPos.y-200);
        rectMode(CENTER)
        fill(255,0,255)
        imageMode(CENTER);
        image(this.image, 0,0,this.r+150, this.r)
        pop()
        
    }
}