nodes = []
edges = []
view = {
	'x': 0,
	'y': 0,
	'scale': 1,
	'gridSize': 20
}
fc = 0;

//User defined
function shower(element) {
	element.show();
}

function grid() {
	stroke("gray");
	xZero = Math.floor(width / view.gridSize) / 2 * view.gridSize;
	yZero = Math.floor(height / view.gridSize) / 2 * view.gridSize;
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
	nodes.push(new Node(200, 200, "This is sparta"));
	nodes.push(new Node(400, 400, "This is brocolli"));
	nodes.push(new Node(400, 200, "Long text incoming: this can be expanded somehow", 1));
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
	fill("red");
	ellipse(0, 0, 5);
	text(fc, 10, 10)

	// Content
	edges.forEach(function(element) {
		element.adapt();
		shower(element);
	});
	nodes.forEach(shower);
	fc++;
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

// Window actions
function windowRezised() {
	resizeCanvas(window.innerWidth, window.innerHeight);
}