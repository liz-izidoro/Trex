// método = function
class Box
{
    constructor(posX, posY, width, height, velocityX)
    {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
    }

    show()
    {
        console.log(this.posX);
        console.log(this.posY);
        console.log(this.width);
        console.log(this.height);
    }
}