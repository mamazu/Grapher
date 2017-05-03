const CRUCIAL = 3;
const NICE_TO_HAVE = 2;
const OPTIONAL = 1;

function Node(x, y, text, priority) {
	this.textBox = new TextBox(text, x, y);
	if (priority == undefined)
		this.priority = NICE_TO_HAVE;
	else
		this.priority = priority;
	this.contextMenu = undefined;
}

Node.prototype.getWidth = function() {
	return 8 * this.textBox.text.length;
}

Node.prototype.getHeight = function() {
	return 16;
}

Node.prototype.getPos = function() {
	return this.textBox.pos;
};

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
	this.textBox.show();
	if (this.contextMenu) {
		this.contextMenu.show()
	}
}

Node.prototype.click = function() {
	if (this.getPos().x <= mouseX && this.getPos().x + this.getWidth() >= mouseX && this.getPos().y >= mouseY && this.getPos().y - this.getHeight() <= mouseY)
		this.contextMenu = new ContextMenu(this);
	else
		this.contextMenu = undefined;
	if (!this.contextMenu) return;
}