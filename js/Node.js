const CRUCIAL = 3;
const NICE_TO_HAVE = 2;
const OPTIONAL = 1;

function Node(x, y, text, priority) {
	this.pos = createVector(x, y);
	this.text = text;
	if (priority == undefined)
		this.priority = NICE_TO_HAVE;
	else
		this.priority = priority;
}

Node.prototype.getWidth = function() {
	return 6 * this.text.length;
}

Node.prototype.getHeight = function() {
	return 16;
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
};

Node.prototype.show = function() {
	fill(this.getColor());
	rect(this.pos.x, this.pos.y, this.getWidth(), -this.getHeight());
	textAlign(LEFT, BOTTOM);
	fill(0);
	text(this.text, this.pos.x + 5, this.pos.y);
};