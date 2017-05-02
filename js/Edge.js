function Edge(from, to) {
	this.from = from;
	this.to = to;
	this.text = "hello";
	this.textPos = createVector(from.pos.x + (to.pos.x - from.pos.x) / 2, from.pos.y + (to.pos.y - from.pos.y) / 2)
}

Edge.prototype.show = function() {
	function drawingTheTrianlge(anchor, angle) {
		fill(0);
		// Moving the triangle
		push();
		translate(anchor.x - 10, anchor.y - 10);
		rotate(angle - HALF_PI);
		triangle(-10, 0, 0, 10, 10, 0);
		pop();
	}

	// Drawing the text
	if (text != undefined) {
		textAlign(CENTER, BOTTOM);
		push();
		translate(this.textPos.x, this.textPos.y)
		rotate(this.textPos.heading());
		text(this.text, 0, 0);
		pop();
	}
	//Drawing the line and the direction
	line(this.from.pos.x, this.from.pos.y, this.to.pos.x, this.to.pos.y);
	drawingTheTrianlge(this.to.pos, this.textPos.heading());
}

Edge.prototype.adapt = function() {
	if (this.to.priority <= this.from.priority)
		return;
	this.from.priority = this.to.priority;
	edges.foreach(function(e) {
		if (e.to == this.from)
			e.adapt();
	})
}