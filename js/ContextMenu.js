function ContextMenu(node) {
	this.node = node;
	this.pos = node.pos;
	this.size = createVector(node.getWidth(), node.getHeight())
}

ContextMenu.prototype.show = function() {
	fill(255);
	rect(this.pos.x, this.pos.y + 10, this.size.x, this.size.y);
};