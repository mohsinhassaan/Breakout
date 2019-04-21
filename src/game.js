import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import { buildLevel, levels } from './levels.js';

const GAMESTATE = {
	PAUSED   : 0,
	RUNNING  : 1,
	MENU     : 2,
	GAMEOVER : 3
};

export default class Game {
	constructor(gameWidth, gameHeight, ctx) {
		this.ctx = ctx;
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
		this.gameObjects = [];
		this.lives = 3;

		this.gamestate = GAMESTATE.MENU;

		this.paddle = new Paddle(this);
		this.ball = new Ball(this);
		new InputHandler(this.paddle, this);

		this.currLevel = 0;
		// this.bricks = buildLevel(this, levels[this.currLevel]);
	}

	restart() {
		this.lives = 3;
		this.currLevel = 0;
		this.gamestate = GAMESTATE.MENU;

		this.paddle = new Paddle(this);
		this.ball = new Ball(this);
		new InputHandler(this.paddle, this);
	}

	start() {
		if (this.gamestate !== GAMESTATE.MENU) return;
		this.gamestate = GAMESTATE.RUNNING;
		this.bricks = buildLevel(this, levels[this.currLevel]);
		this.gameObjects = [ this.paddle, this.ball, ...this.bricks ];
	}

	gameover() {
		this.gamestate = GAMESTATE.GAMEOVER;
	}

	togglePause() {
		if (this.gamestate === GAMESTATE.PAUSED) {
			this.gamestate = GAMESTATE.RUNNING;
		}
		else if (this.gamestate === GAMESTATE.RUNNING) {
			this.gamestate = GAMESTATE.PAUSED;
		}
		else {
			return;
		}
	}

	reset() {
		this.ball.reset();
		this.paddle.reset();
	}

	nextLevel() {
		this.currLevel += 1;
		if (levels.currLevel === 5) this.gameover();
		this.bricks = buildLevel(this, levels[this.currLevel]);
		this.reset();
	}

	update(deltaTime) {
		if (
			this.gamestate === GAMESTATE.PAUSED ||
			this.gamestate === GAMESTATE.MENU ||
			this.gamestate === GAMESTATE.GAMEOVER
		) {
			return;
		}

		if (!this.bricks.length) {
			this.nextLevel();
		}

		if (this.lives === 0) this.gameover();

		this.gameObjects.forEach((object) => object.update(deltaTime));
		this.bricks = this.bricks.filter((brick) => !brick.markedForDeletion);
		this.gameObjects = [ this.paddle, this.ball, ...this.bricks ];
	}

	draw(ctx) {
		this.gameObjects.forEach((object) => object.draw(ctx));

		if (this.gamestate == GAMESTATE.PAUSED) {
			ctx.rect(0, 0, this.gameWidth, this.gameHeight);
			ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
			ctx.fill();
			ctx.font = '30px Open-Sans, sans-serif';
			ctx.fillStyle = 'white';
			ctx.textAlign = 'center';
			ctx.fillText('Paused', this.gameWidth / 2, this.gameHeight / 2);
			ctx.fillText('Press ESC to resume', this.gameWidth / 2, this.gameHeight / 2 + 40);
		}

		if (this.gamestate == GAMESTATE.MENU) {
			ctx.rect(0, 0, this.gameWidth, this.gameHeight);
			ctx.fillStyle = 'black';
			ctx.fill();
			ctx.font = '30px Open-Sans, sans-serif';
			ctx.fillStyle = 'white';
			ctx.textAlign = 'center';
			ctx.fillText('Press SPACEBAR to start', this.gameWidth / 2, this.gameHeight / 2);
		}

		if (this.gamestate == GAMESTATE.GAMEOVER) {
			ctx.rect(0, 0, this.gameWidth, this.gameHeight);
			ctx.fillStyle = 'black';
			ctx.fill();
			ctx.font = '30px Open-Sans, sans-serif';
			ctx.fillStyle = 'white';
			ctx.textAlign = 'center';
			ctx.fillText('GAME OVER', this.gameWidth / 2, this.gameHeight / 2);
			ctx.fillText('Press R to restart', this.gameWidth / 2, this.gameHeight / 2 + 40);
		}
	}
}
