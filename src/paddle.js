import GameObject from './gameObject.js';

export default class Paddle extends GameObject {
	constructor(game) {
		const width = 150;
		const height = 30;

		super(game, {
			x : game.gameWidth / 2 - width / 2,
			y : game.gameHeight - height - 10
		});

		this.width = width;
		this.height = height;

		this.maxSpeed = 5;
		this.speed = 0;
	}

	reset() {
		this.speed = 0;

		this.position = {
			x : this.game.gameWidth / 2 - this.width / 2,
			y : this.game.gameHeight - this.height - 10
		};
	}

	moveLeft() {
		this.speed = -this.maxSpeed;
	}

	moveRight() {
		this.speed = this.maxSpeed;
	}

	stop() {
		this.speed = 0;
	}

	draw(ctx) {
		ctx.fillStyle = '#00ffff';
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update(deltaTime) {
		this.position.x += this.speed;
		if (this.position.x < 0) this.position.x = 0;
		if (this.position.x + this.width > this.game.gameWidth) this.position.x = this.game.gameWidth - this.width;
	}
}
