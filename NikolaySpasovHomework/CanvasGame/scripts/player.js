var Player = (function(){
    function Player (x, y, width, height){
        this.position = new Vector2(x, y);
        this.width = width;
        this.height = height;
        this.velocity = 3;
        this.animation = new Animation(width, height, 0, 0, 8, 'resources/player.png', 8, 8, 2);
        this.boundingBox = new Rectangle(x, y, this.width, this.height);
    }

    Player.prototype.tick = function (){
        move();
        this.animation.position.x = this.position.x;
        this.animation.position.y = this.position.y;
        this.animation.update();
    };

    Player.prototype.render = function (ctx){
        this.animation.draw(ctx);
    };

    function move () {
        if (input.right){
            player.animation.setRow(0);
            player.position.x += player.velocity;
            player.boundingBox.x += player.velocity;
        } else if (input.left){
            player.animation.setRow(1);
            player.position.x -= player.velocity;
            player.boundingBox.x -= player.velocity;
        }
    }
    return Player;
}());