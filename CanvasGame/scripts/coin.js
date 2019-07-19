var Coin = (function(){
    function Coin (x, y, width, height){
        this.position = new Vector2(x,y);
        this.width = width;
        this.height = height;
        this.velocity = 3;
        this.animation = new Animation(width, height, 0, 0, 8, 'resources/coin.png', 8, 8, 1);
        this.boundingBox = new Rectangle(x, y, this.width, this.height);
    }

    Coin.prototype.tick = function (){
        if (this.animation.position.y > canvas.clientHeight){
            this.velocity = 0;
        }
        this.animation.position.x = this.position.x;
        this.animation.position.y += this.velocity;
        this.boundingBox.y += this.velocity;
        this.animation.update();
    };

    Coin.prototype.render = function (ctx){
        this.animation.draw(ctx);
};

return Coin;
}());