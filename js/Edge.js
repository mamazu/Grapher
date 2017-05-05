function Edge(from, to, text) {
	this.from = from;
	this.to = to;
	this.text = text;

	this.recalculate();
}

Edge.prototype.show = function() {

	function drawingTheTrianlge(anchor, angle) {
		const SCALE = 10;
		fill(0);
		// Moving the triangle
		push();
		translate(anchor.x, anchor.y);
		rotate(angle - HALF_PI);
		translate(0, -SCALE);
		triangle(-SCALE, -SCALE * .5, SCALE, -SCALE * .5, 0, SCALE);
		pop();
	}

	// Drawing the text
	stroke('black');
	if (this.text != undefined) {
		textAlign(CENTER, BOTTOM);
		push();
		translate(this.textPos.x, this.textPos.y)
		rotate(this.distance.heading);
		fill(0);
		stroke(0, 0, 0, .2);
		text(this.text, 0, 0);
		pop();
	}
	//Drawing the line and the direction
	strokeWeight(2);
	line(this.anchorFrom.x, this.anchorFrom.y, this.anchorTo.x, this.anchorTo.y);
	strokeWeight(1);
	drawingTheTrianlge(this.anchorTo, this.distance.heading());
}

Edge.prototype.recalculate = function() {
	this.anchorFrom = this.from.getAnchor(this.to);
	this.anchorTo = this.to.getAnchor(this.from);

	this.distance = p5.Vector.sub(this.anchorTo, this.anchorFrom);
	this.textPos = createVector(this.anchorFrom.x + this.distance.x / 2, this.anchorFrom.y + this.distance.y / 2);
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