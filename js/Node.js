const CRUCIAL = 3;
const NICE_TO_HAVE = 2;
const OPTIONAL = 1;

function Node(x, y, text, priority) {
	this.textBox = new TextBox(text, x, y);
	if (priority == undefined)
		this.priority = NICE_TO_HAVE;
	else
		this.priority = priority;
	this.isActive = false;
}

Node.prototype.getWidth = function() {
	return 8 * this.textBox.text.length;
}

Node.prototype.getHeight = function() {
	return 16;
}

Node.prototype.getPos = function() {
	return this.textBox.pos;
}

Node.prototype.getDim = function() {
	return createVector(this.getWidth(), this.getHeight());
}

Node.prototype.getAnchor = function(other) {
	var thisPos = this.getPos();
	var point = createVector(0, 0);
	var diff = p5.Vector.sub(thisPos, other.getPos());

	// xpos
	if (diff.x < 0) {
		point.x = thisPos.x + this.getWidth()
	} else if (abs(diff.x) <= this.getWidth() / 2) {
		point.x = thisPos.x + this.getWidth() / 2;
	} else {
		point.x = thisPos.x;
	}

	// ypos
	if (diff.y < 0) {
		point.y = thisPos.y + this.getHeight();
	} else if (abs(diff.y) <= this.getHeight() / 2) {
		point.y = thisPos.y + this.getHeight() / 2;
	} else {
		point.y = thisPos.y;
	}
	return point;
}

Node.prototype.getColor = function() {
	switch (this.priority) {
		case CRUCIAL:
			return color(255, 0, 0);
		case NICE_TO_HAVE:
			return color(255, 255, 0);
		case OPTIONAL:
			return color(0, 255, 0);
		default:
			return color(255);
	}
}

Node.prototype.show = function() {
	this.textBox.bgColor = this.getColor();
	this.textBox.color = this.isActive ? color(255, 0, 0) : color(0, 0, 0);
	this.textBox.show();
}

Node.prototype.click = function() {
	function inside(pos, size, point) {
		var diff = p5.Vector.sub(point, p5.Vector.mult(pos, view.scale));
		if (diff.x >= 0 && diff.x <= size.x * view.scale) {
			return diff.y >= 0 && diff.y <= size.y * view.scale;
		}
		return false;
	}

	if (inside(this.getPos(), this.getDim(), createVector(mouseX - view.x, mouseY - view.y))) {
		this.isActive = !this.isActive;
	} else {
		this.isActive = false;
	}
}