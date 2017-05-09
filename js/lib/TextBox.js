function TextBox(text, x, y) {
	this.text = text;
	this.pos = createVector(x, y);
	this.color = color(0, 0, 0);
	this.bgColor = color(0, 0, 0);
}

TextBox.prototype.getWidth = function() {
	return 8 * this.text.length;
}

TextBox.prototype.getHeight = function() {
	return 18;
}

TextBox.prototype.show = function() {
	// Drawing the box
	fill(this.bgColor);
	stroke(this.color);
	strokeWeight(2);
	rect(this.pos.x, this.pos.y, this.getWidth(), this.getHeight());
	strokeWeight(1);

	//Drawing the text
	fill(0);
	textAlign(LEFT, TOP);
	stroke(0, 0, 0, .2);
	text(this.text, this.pos.x + 5, this.pos.y + 1);
}
