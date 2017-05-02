function Node(x, y, text){
	this.pos = createVector(x, y);
	this.text = text;
}

Node.prototype.show = function() {
	text(this.text, this.pos.x, this.pos.y);
};