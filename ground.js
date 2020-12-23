class Ground{
    constructor(x,y,width,height){
        var option = {
            isStatic: true
            
        }
        this.Groundbody = Bodies.rectangle(x,y,width,height,option);
        this.Groundwidth = width;
        this.Groundheight = height;
        World.add(wld,this.Groundbody)
    }
    display(){
        var pos = this.Groundbody.position
        rectMode(CENTER)
        fill ("green")
        rect(pos.x,pos.y,this.Groundwidth,this.Groundheight)
    }
}