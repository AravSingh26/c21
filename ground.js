class Ground{
    constructor(x,y,w,h){      //invoke the class or trigger a class
        // properties

        let options={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w;
        this.h=h;
        World.add(world,this.body)
 
    }
    //function
show(){

    var pos=this.body.position;
    push()      //insert new settings
    rectMode(CENTER);   // consider center as main
    stroke(255)         //boundry with color, 000-255--->shades of grey from black to white
    fill(127)       // inside color
    rect(pos.x,pos.y,this.w,this.h)
    pop()           //remove the previous settings
}


}