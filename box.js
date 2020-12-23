class Box{
    constructor(x,y,width,height){

        var options={
            restitution: 1
        }


        this.boxbody= Bodies.rectangle(x,y,width,height,options);
        this.boxwidth=width;
        this.boxheight=height;
        World.add(wld,this.boxbody)
    }

    display(){
        var pos =this.boxbody.position
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.boxwidth,this.boxheight)
    }

}