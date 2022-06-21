class Wall
{
    constructor(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x, y, width, height, {isStatic:true});
        World.add(world, this.body);
    }

    show()
    {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }

}