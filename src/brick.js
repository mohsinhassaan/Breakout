import mangeCollision from './collisionDetection.js';
import GameObject from './gameObject.js';

export default class Brick extends GameObject {
	constructor(game, position) {
		super(game, position);

		this.markedForDeletion = false;

		this.width = 100;
		this.height = 36;

		this.image = document.getElementById('img_brick');
	}

	draw(ctx) {
		ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
	}

	update(deltaTime) {
		if (mangeCollision(this.game.ball, this)) {
			this.markedForDeletion = true;
		}
	}
}
