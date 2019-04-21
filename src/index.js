import Game from './game.js';

let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 800;

let lastTime = 0;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let gameLoop = (timestamp) => {
	let deltaTime = timestamp - lastTime;
	lastTime = timestamp;

	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	game.update(deltaTime);
	game.draw(ctx);

	requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
