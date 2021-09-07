class CannonBall {

    constructor (x,y) {
        var options = {
            isStatic: true
    
        }
        this.r=40
        this.body=Bodies.circle(x,y,this.r,options)
        this.image=loadImage("assets/cannonball.png")
        World.add(world,this.body)
    }
display(){
    push ()
    translate (this.body.position.x,this.body.position.y)
    rotate (this.body.angle)
    imageMode (CENTER)
    image(this.image,0,0,this.r,this.r)
    pop ()
}
shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle)
    velocity.mult(20)
Matter.Body.setStatic(this.body,false)
    Matter.Body.setVelocity(this.body,{
        x: velocity.x , 
        y:  velocity.y

    }) 
}


}