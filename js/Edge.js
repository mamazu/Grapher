function Edge(from, to){
	this.from = from;
	this.to = to;
}

Edge.prototype.show = function() {
	line(this.from.pos.x, this.from.pos.y, this.to.pos.x, this.to.pos.y);
};