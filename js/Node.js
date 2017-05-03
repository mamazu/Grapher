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
	this.contextMenu = undefined;
}

Node.prototype.getWidth = function() {
	return 8 * this.text.length;
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
}

Node.prototype.show = function() {
	fill(this.getColor());
	rect(this.pos.x, this.pos.y, this.getWidth(), -this.getHeight());
	textAlign(LEFT, BOTTOM);
	fill(0);
	text(this.text, this.pos.x + 5, this.pos.y);
	if (this.contextMenu) {
		this.contextMenu.show()
	}
}

Node.prototype.click = function() {
	if (this.pos.x <= mouseX && this.pos.x + this.getWidth() >= mouseX && this.pos.y >= mouseY && this.pos.y - this.getHeight() <= mouseY)
		this.contextMenu = new ContextMenu(this);
	else
		this.contextMenu = undefined;
	if (!this.contextMenu) return;
}