export default function collisionDetection(ball, gameObject) {
	let topOfBall = ball.position.y;
	let bottomofBall = ball.position.y + ball.size;
	let leftSideOfBall = ball.position.x;
	let rightSideOfBall = ball.position.x + ball.size;

	let topOfObject = gameObject.position.y;
	let bottomofObject = gameObject.position.y + gameObject.height;
	let leftSideOfObject = gameObject.position.x;
	let rightSideOfObject = gameObject.position.x + gameObject.width;

	if (
		bottomofBall >= topOfObject &&
		topOfBall <= bottomofObject &&
		leftSideOfBall >= leftSideOfObject &&
		rightSideOfBall <= rightSideOfObject
	) {
		return true;
	}
	else {
		return false;
	}
}
