var Bomb = (function (){
    function Bomb (x, y, width, height){
        this.position = new Vector2(x, y);
        this.width = width;
        this.height = height;
        this.velocity = 3;
        this.animation = new Animation(width, height, 0, 0, 3, 'resources/bomb.png', 3, 13, 1);
        this.boundingBox = new Rectangle(x, y, this.width, this.height);
    }

    Bomb.prototype.tick = function (){
        if (this.animation.position.y > canvas.clientHeight){
            this.velocity = 0;
        }
        this.animation.position.x = this.position.x;
        this.animation.position.y += this.velocity;
        this.boundingBox.y += this.velocity;
        this.animation.update();
    };

    Bomb.prototype.render = function (ctx){
        this.animation.draw(ctx);
};
return Bomb;
}());