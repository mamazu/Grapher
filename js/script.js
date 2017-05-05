nodes = []
edges = []
view = {}
fc = 0;

//User defined
function shower(element) {
	element.show();
}

function resetView() {
	view = {
		'x': width / 2,
		'y': height / 2,
		'scale': 1,
		'gridSize': 20,
		'middle': true,
		'debug': true,
		'getMouse': function() {
			return createVector(mouseX - view.x, mouseY - view.y).mult(1 / view.scale);
		}
	};
}

function grid() {
	stroke("gray");
	xZero = Math.round(width / view.gridSize / 2) * view.gridSize;
	yZero = Math.round(height / view.gridSize / 2) * view.gridSize;
	for (var x = 0; x < width; x += view.gridSize)
		for (var y = 0; y < height; y += view.gridSize) {
			strokeWeight((x == xZero) ? 2 : 1);
			line(x, 0, x, height);
			strokeWeight((y == yZero) ? 2 : 1);
			line(0, y, width, y);
		}
}

// P5 Functions
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	textSize(16);
	resetView();
	nodes.push(new Node(-200, -100, "This is sparta"));
	nodes.push(new Node(0, 100, "This is brocolli"));
	nodes.push(new Node(0, -100, "Long text incoming: this can be expanded somehow", 1));
	edges.push(new Edge(nodes[1], nodes[2], "A"));
	edges.push(new Edge(nodes[0], nodes[1], "B"));
	edges.push(new Edge(nodes[0], nodes[2], "C"));
}

function draw() {
	// Background and grid
	background(240);
	grid();
	translate(view.x, view.y);
	scale(view.scale);
	if (view.middle) {
		fill("red");
		ellipse(0, 0, 5);
	}
	if (view.debug) {
		fill("black");
		text(fc, 10, 10);
		fc++;
	}

	// Content
	edges.forEach(function(element) {
		element.adapt();
		shower(element);
	});
	nodes.forEach(shower);
}

// Mouse event
function mouseClicked() {
	nodes.forEach(function(node) {
		node.click();
	});
}

function mouseMoved() {}

function mouseDragged(evt) {
	view.x += evt.movementX;
	view.y += evt.movementY;
}

function mouseWheel(evt) {
	if (evt.delta > 0 && view.scale > 0.25)
		view.scale -= 0.125;
	else if (evt.delta < 0)
		view.scale += 0.125
}

// Key events
function keyPressed(evt) {
	if (evt.key == "0")
		resetView();
	if (evt.key == "o" || evt.key == "O") {
		view.middle = !view.middle;
	}
	if (evt.key == "d" || evt.key == "d") {
		view.debug = !view.debug;
	}
	if (evt.key == "m" || evt.key == "M") {
		var pos = view.getMouse();
		nodes.push(new Node(pos.x, pos.y, "New node"));
	}
}

// Window actions
function windowRezised() {
	resizeCanvas(window.innerWidth, window.innerHeight);
}