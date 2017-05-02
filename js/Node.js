function Node(x, y, text){
	this.pos = createVector(x, y);
	this.text = text;
}

Node.prototype.show = function() {
	rect(this.pos.x, this.pos.y, textWidth(text), -16);
	textAlign(LEFT, BOTTOM)
	text(this.text, this.pos.x, this.pos.y);
};