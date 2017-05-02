function Node(x, y, text){
	this.pos = createVector(x, y);
	this.text = text;
}

Node.prototype.show = function() {
	fill(255);
	rect(this.pos.x, this.pos.y, textWidth(text), -16);
	textAlign(LEFT, BOTTOM);
	fill(0);
	text(this.text, this.pos.x, this.pos.y);
};