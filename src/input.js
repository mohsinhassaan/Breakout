export default class InputHandler {
	constructor(game) {
		document.addEventListener('keydown', (event) => {
			switch (event.keyCode) {
				case 37:
					game.left();
					break;
				case 39:
					game.right();
					break;
				case 27:
					game.togglePause();
					break;
				case 32:
					game.start();
					break;
				case 82:
					game.restart();
					break;
				case 13:
					game.launch();
					break;
			}
		});

		document.addEventListener('keyup', (event) => {
			switch (event.keyCode) {
				case 37:
					if (game.paddle.speed < 0) game.paddle.stop();
					break;
				case 39:
					if (game.paddle.speed > 0) game.paddle.stop();
					break;
			}
		});
	}
}
