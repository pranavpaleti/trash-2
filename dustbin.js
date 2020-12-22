class Dustbin{
    constructor(){
        var options={
            isStatic:true
        }
        this.bottomBody=Bodies.rectangle(700,650,100,10,options)
        this.leftBody=Bodies.rectangle(650,600,10,100,options)
        this.rightBody=Bodies.rectangle(750,600,10,100,options)
       this.image=loadImage("dustbingreen.png")
        World.add(world,this.bottomBody)
        World.add(world,this.rightBody);
        World.add(world,this.leftBody)
    }
    display(){ 
        
        rectMode(CENTER)
        fill("red")
        rect(this.leftBody.position.x,this.leftBody.position.y,10,100);
        rect(this.rightBody.position.x,this.rightBody.position.y,10,100);
        imageMode(CENTER)
        image(this.image,this.bottomBody.position.x,this.bottomBody.position.y-50,120,100);
      }
}