class Thunder{
    constructor(x,y){
        var options = {
            restitution:0.4
        }
        this.body = Bodies.circle(x,y,10,options);
        this.x = x;
        this.y = y;

        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("Blue")
        ellipseMode(RADIUS)
        ellipse(0,0,10,10)
        pop()
    }
}