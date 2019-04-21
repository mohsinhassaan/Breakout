import detectCollision from './collisionDetection.js';

export default class Brick {
	constructor(game, position) {
		this.game = game;

		this.markedForDeletion = false;

		this.position = position;

		this.width = 100;
		this.height = 36;

		this.image = document.getElementById('img_brick');
	}

	draw(ctx) {
		ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
	}

	update(deltaTime) {
		if (detectCollision(this.game.ball, this)) {
			this.game.ball.speed.y *= -1;
			this.markedForDeletion = true;
		}
	}
}
