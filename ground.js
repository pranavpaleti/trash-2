class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,660,800,20,options)
        World.add(world,this.body)
     
    }
    display(){ 
        
        rectMode(CENTER)
        fill("red")
        rect(this.body.position.x,this.body.position.y,800,20);
       
      }
}