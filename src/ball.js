import detectCollision from './collisionDetection.js';

export default class Ball {
    constructor(game) {
        this.game = game;

        this.size = 16;

        this.image = document.getElementById('img_ball');
        this.position = {
            x: game.gameWidth / 2 - this.size / 2,
            y: game.paddle.position.y
        };
        this.speed = {
            x: 0,
            y: 0
        };
    }

    reset() {
        this.position = {
            x: this.game.gameWidth / 2 - this.size / 2,
            y: this.game.paddle.position.y
        };
        this.speed = {
            x: 0,
            y: 0
        };
    }

    launch() {
        this.speed = {
            x: 5,
            y: -5
        };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        let topOfBall = this.position.y;
        let bottomofBall = this.position.y + this.size;
        let leftSideOfBall = this.position.x;
        let rightSideOfBall = this.position.x + this.size;

        if (detectCollision(this, this.game.paddle)) {
            this.speed.y *= -1;
            this.position.y = this.game.paddle.position.y - this.size;
        }

        if (rightSideOfBall >= this.game.gameWidth || leftSideOfBall <= 0) {
            this.speed.x *= -1;
        }

        if (topOfBall <= 0) {
            this.speed.y *= -1;
        }

        if (bottomofBall >= this.game.gameHeight) {
            this.game.lives--;
            this.game.reset();
        }
    }
}
