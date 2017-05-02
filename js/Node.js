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

Node.prototype.show = function() {
	rectColor = lerpColor(color(255, 0, 0), color(0, 255, 0), this.priority);
	fill(rectColor);
	rect(this.pos.x, this.pos.y, textWidth(text), -16);
	textAlign(LEFT, BOTTOM);
	fill(0);
	text(this.text, this.pos.x, this.pos.y);
};