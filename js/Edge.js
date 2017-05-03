function Edge(from, to, text) {
	this.from = from;
	this.to = to;
	this.text = text;
	this.distance = createVector(to.getPos().x - from.getPos().x, to.getPos().y - from.getPos().y)
	this.textPos = createVector(from.getPos().x + this.distance.x / 2, from.getPos().y + this.distance.y / 2)
}

Edge.prototype.show = function() {

	function drawingTheTrianlge(anchor, angle) {
		fill(0);
		// Moving the triangle
		push();
		translate(anchor.x, anchor.y);
		rotate(angle - HALF_PI);
		triangle(-10, 0, 0, 10, 10, 0);
		pop();
	}

	// Drawing the text
	if (this.text != undefined) {
		textAlign(CENTER, BOTTOM);
		push();
		translate(this.textPos.x, this.textPos.y)
		rotate(this.distance.heading);
		fill(0);
		text(this.text, 0, 0);
		pop();
	}
	//Drawing the line and the direction
	line(this.from.getPos().x, this.from.getPos().y, this.to.getPos().x, this.to.getPos().y);
	drawingTheTrianlge(this.to.getPos(), this.distance.heading());
}

Edge.prototype.adapt = function() {
	if (this.to.priority <= this.from.priority)
		return;
	this.from.priority = this.to.priority;
	edges.forEach(function(e) {
		if (e.to == this.from)
			e.adapt();
	})
}