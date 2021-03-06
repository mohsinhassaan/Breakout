import Brick from './brick.js';

export const levels = [
	[
		[ 0, 0, 1, 0, 1, 0, 0 ],
		[ 0, 1, 0, 0, 0, 1, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 1, 0, 0, 0, 1, 0 ],
		[ 0, 1, 0, 0, 0, 1, 0 ],
		[ 0, 0, 1, 0, 1, 0, 0 ]
	],
	[
		[ 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 1, 0, 0, 0 ],
		[ 0, 0, 1, 1, 1, 0, 0 ],
		[ 0, 1, 1, 1, 1, 1, 0 ],
		[ 0, 0, 1, 1, 1, 0, 0 ],
		[ 0, 0, 0, 1, 0, 0, 0 ]
	],
	[
		[ 0, 1, 1, 0, 1, 1, 0 ],
		[ 0, 1, 1, 0, 1, 1, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 1, 1, 0, 1, 1, 0 ],
		[ 0, 1, 1, 0, 1, 1, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 1, 1, 0, 1, 1, 0 ],
		[ 0, 1, 1, 0, 1, 1, 0 ]
	],
	[
		[ 0, 1, 0, 1, 0, 1, 0 ],
		[ 0, 1, 0, 1, 0, 1, 0 ],
		[ 0, 1, 0, 0, 0, 1, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 1, 0, 0, 0, 1, 0 ],
		[ 0, 1, 0, 1, 0, 1, 0 ],
		[ 0, 1, 0, 1, 0, 1, 0 ]
	],
	[
		[ 0, 0, 1, 1, 1, 0, 0 ],
		[ 0, 1, 1, 0, 1, 1, 0 ],
		[ 0, 1, 0, 0, 0, 1, 0 ],
		[ 0, 1, 0, 0, 0, 1, 0 ],
		[ 0, 1, 1, 0, 1, 1, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 1, 1, 1, 0, 0 ]
	]
];

export function buildLevel(game, level) {
	let bricks = [];
	for (let i = 0; i < level.length; i++) {
		for (let j = 0; j < level[i].length; j++) {
			if (level[i][j] == 1) {
				bricks.push(
					new Brick(game, {
						x : j * game.gameWidth/7,
						y : 36/600*game.gameHeight + i * 36/600*game.gameHeight
					})
				);
			}
		}
	}
	return bricks;
}
