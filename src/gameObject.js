export default class GameObject {
	constructor(game, position) {
		this.game = game;
		this.position = position;
	}

	getTop() {
		return this.position.y;
	}

	getBottom() {
		return this.position.y + this.height;
	}

	getLeft() {
		return this.position.x;
	}

	getRight() {
		return this.position.x + this.width;
	}
}
