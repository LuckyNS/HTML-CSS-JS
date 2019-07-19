/**
 * Created by Nikolay on 24-Jan-16.
 */
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var input = new Input();
attachListeners(input);
var score = document.getElementById('score');
var lives = document.getElementById('lives');
var result = 0;
var live = 5;
var player = new Player(100, 450, 108, 140);
var coin = [];
var bomb = [];
var bombX = 5;
var coinX = 5;
score.innerText = 'Your score : 0';
lives.innerText = 'You have : ' + live + ' lives left';
coin.push(new Coin(coinX, 5, 32, 32));
bomb.push(new Bomb(bombX, 5, 32, 64));

setInterval(dropCoin, 3000);
setInterval(dropBomb, 5000);

function update (){
    if (live > 0){
        tick();
        render(ctx);
        requestAnimationFrame(update);
    }

}

function tick (){
    player.tick();
    coin.forEach(function(c){
        c.tick();
        getCoin(c);
    });
    bomb.forEach(function(b){
        b.tick();
        getBomb(b);
    });

}

function render (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.render(ctx);
    coin.forEach(function(c){
        c.render(ctx);
    });
    bomb.forEach(function(b){
        b.render(ctx);
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getCoin (c) {
    if(c.boundingBox.intersects(player.boundingBox)) {
        coin.remove(c);
        result ++;
        score.innerText = 'Your score : ' + result;
        setVelocity (result);
        c.animation.position.x = coinX;
        dropCoin(c);
    }
}

function getBomb (b) {
    if(b.boundingBox.intersects(player.boundingBox)) {
        live --;
        lives.innerText = 'You have : ' + live + ' lives left';
        setVelocity (result);
        b.animation.position.x = bombX;
        bomb.remove(b);
        dropBomb(b);
    }
}

function dropCoin(c) {
    coin.push(new Coin(coinX, 5, 32, 32));
    if (coinX > 0 && coinX < canvas.clientWidth) {
        coinX += getRandomInt(5, 200);
        if  (coinX >= 550){
            coinX = 5;
        }
    }
}

function dropBomb(b) {
    bomb.push(new Bomb(bombX, 5, 32, 64));
    if (bombX > 0 && bombX < canvas.clientWidth) {
        bombX += getRandomInt(5, 200);
        if  (bombX >= 550){
            bombX = 5;
        }
    }
}

function setVelocity (result){
    if (result > 15 && result < 30) {
        player.velocity = 4;
        coin.velocity = 4;
        bomb.velocity = 4;
    }
    if (result > 30 && result < 45) {
        player.velocity = 5;
        coin.velocity = 5;
        bomb.velocity = 5;
    }
    if (result > 45 && result < 60) {
        player.velocity = 6;
        coin.velocity = 6;
        bomb.velocity = 6;
    }
    if (result > 60 && result < 75) {
        player.velocity = 7;
        coin.velocity = 7;
        bomb.velocity = 7;
    }
    if (result > 75 && result < 90) {
        player.velocity = 8;
        coin.velocity = 8;
        bomb.velocity = 8;
    }
    if (result > 90 && result < 105) {
        player.velocity = 9;
        coin.velocity = 9;
        bomb.velocity = 9;
    }
    if (result > 105 && result < 120) {
        player.velocity = 10;
        coin.velocity = 10;
        bomb.velocity = 10;
    }
}

update();
