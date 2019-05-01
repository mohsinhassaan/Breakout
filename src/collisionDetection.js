export default function mangeCollision(ball, gameObject) {
	const overlapping = isOverlapping(ball, gameObject);

	if (!overlapping) {
		return false;
	} else {
		const overlap = getOverlap(ball, gameObject);

		if (overlap.y > overlap.x) {
			ball.speed.y *= -1;
		} else if (overlap.x > overlap.y) {
			ball.speed.x *= -1;
		} else {
			overlap.x *= -1;
			overlap.y *= -1;
		}
	}
	return true;
}

function getOverlap(ball, gameObject) {
	let overlap = {
		x : 0,
		y : 0
	};

	if (ball.getLeft() >= gameObject.getLeft() && ball.getRight() <= gameObject.getRight()) {
		// Ball is within vertical edges of object
		overlap.x = 0;
	} else if (ball.getRight() >= gameObject.getLeft() && ball.getLeft() < gameObject.getLeft()) {
		// Partial overlap on left vertical edge
		overlap.x = ball.getRight() - gameObject.getLeft();
	} else if (ball.getLeft() <= gameObject.getRight() && ball.getRight() > gameObject.getRight()) {
		// Partial overlap on right vertical edge
		overlap.x = gameObject.getRight() - ball.getLeft();
	}

	if (ball.getTop() >= gameObject.getTop() && ball.getBottom() <= gameObject.getBottom()) {
		// Ball is within horizontal edges of object
		overlap.y = 0;
	} else if (ball.getBottom() >= gameObject.getTop() && ball.getTop() < gameObject.getTop()) {
		// Partial overlap on top horizontal edge
		overlap.y = ball.getBottom() - gameObject.getTop();
	} else if (ball.getTop() <= gameObject.getBottom() && ball.getBottom() > gameObject.getBottom()) {
		// Partial overlap on bottom horizontal edge
		overlap.y = gameObject.getBottom() - ball.getTop();
	}

	return overlap;
}

function isOverlapping(ball, gameObject) {
	let overlapping = true;

	// Check if no horizontal overlap
	if (ball.getRight() < gameObject.getLeft() || ball.getLeft() > gameObject.getRight()) {
		overlapping = false;
	}

	// Check if no vertical overlap
	if (ball.getBottom() < gameObject.getTop() || ball.getTop() > gameObject.getBottom()) {
		overlapping = false;
	}

	return overlapping;
}
