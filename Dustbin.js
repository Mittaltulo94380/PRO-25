class Dustbin{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.dustbinObject=Bodies.rectangle(x,y,width,height,option);
        this.image=loadImage("dustbingreen.png")
        this.width=width;
        this.height=height;
        World.add(world,this.dustbinObject);
       
    }

    display(){
        fill("white");
        imageMode(CENTER);
        image(this.image,this.dustbinObject.position.x,this.dustbinObject.position.y,this.width,this.height);

    }
}
