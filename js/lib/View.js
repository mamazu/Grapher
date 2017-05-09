width = window.innerWidth, height = window.innerHeight;

function View() {
	this.reset();
}

View.prototype.reset = function() {
	this.x = width / 2;
	this.y = height / 2;
	this.scale = 1;
	this.gridSize = 20;
	this.middle = true;
	this.debug = true;
	this.message = {
		"text": "",
		"duration": -1
	};
	this.resetMode();
};

View.prototype.getMouse = function() {
	return createVector(mouseX - view.x, mouseY - view.y).mult(1 / view.scale);
}

View.prototype.resetMode = function() {
	this.mode = 'normal';
	this.setMessage("Mode: " + this.mode);
};

View.prototype.toggleMode = function() {
	this.mode = (this.mode == 'normal') ? 'connect' : 'normal';
	this.setMessage("Mode: " + this.mode);
};

View.prototype.setMessage = function(message, duration) {
	if (duration == undefined)
		duration = 100;
	this.message.text = message;
	this.message.duration = duration;
}

View.prototype.showMessage = function() {
	if (view.message.duration <= 0)
		return;
	this.message.duration--;
	fill("blue");
	rect(0, 0, width, 30);
	fill("white");
	text(this.message.text, (width - this.message.text.length * 8) / 2, 7);
}
