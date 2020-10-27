class Rope{
    constructor(body1, body2, offsetX, offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
            bodyA: body1,
            bodyB = body2,
            pointB: {x: this.offsetX, y:this.offsetY},
            stiffness: 0.04,
            length: 10
        }
        this.rope = Constraint.create(options);
        //this.pointB = pointB
        World.add(world, this.rope);
    }
    
    
    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }

}