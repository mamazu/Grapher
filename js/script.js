nodes = []
edges = []
view = {
	'x': 0,
	'y': 0,
	'scale': 1,
}

//User defined
function shower(element) {
	element.show();
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
	translate(view.x, view.y);
	scale(view.scale);
	background(240);
	edges.forEach(function(element) {
		element.adapt();
		shower(element);
	});
	nodes.forEach(shower);
	grid();
}

// Mouse event
function mouseClicked() {
	nodes.forEach(function(node) {
		node.click(mouseX, mouseY);
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