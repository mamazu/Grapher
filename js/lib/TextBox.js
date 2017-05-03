function TextBox(text, x, y) {
	this.text = text;
	this.pos = createVector(x, y);
	console.log(this.pos)
	this.bgColor = color(0, 0, 0);
}

TextBox.prototype.getWidth = function() {
	return 8 * this.text.length;
}

TextBox.prototype.getHeight = function() {
	return 16;
}

TextBox.prototype.show = function() {
	// Drawing the box
	fill(this.bgColor);
	rect(this.pos.x, this.pos.y - this.getHeight() / 2, this.getWidth(), this.getHeight());

	//Drawing the text
	fill(0);
	textAlign(LEFT, CENTER);
	text(this.text, this.pos.x, this.pos.y);
};