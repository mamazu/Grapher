function Node(x, y, text){
	this.x = x;
	this.y = y;
	this.text = text;
}

Node.prototype.show = function() {
	text(this.text, this.x, this.y);
};