function Node(x, y, text){
	this.pos = createVector(x, y);
	this.text = text;
	this.priority = 1;
}

Node.prototype.show = function() {
	rectColor = lerpColor(color(255,0,0), color(0,255,0), this.priority);
	fill(rectColor);
	rect(this.pos.x, this.pos.y, textWidth(text), -16);
	textAlign(LEFT, BOTTOM);
	fill(0);
	text(this.text, this.pos.x, this.pos.y);
};