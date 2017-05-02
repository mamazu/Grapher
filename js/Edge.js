function Edge(from, to){
	this.from = from;
	this.to = to;
	this.text = "hello";
	this.textPos = createVector(from.pos.x + (to.pos.x - from.pos.x) / 2, from.pos.y + (to.pos.y - from.pos.y) / 2)
}

Edge.prototype.show = function() {
	if(text != undefined){
		textAlign(CENTER, BOTTOM);
		text(this.text, this.textPos.x, this.textPos.y);
	}
	line(this.from.pos.x, this.from.pos.y, this.to.pos.x, this.to.pos.y);
};