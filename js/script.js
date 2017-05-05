nodes = []
edges = []

function shower(element) {
	element.show();
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	nodes.push(new Node(200, 200, "This is sparta"));
	nodes.push(new Node(400, 400, "This is brocolli"));
	nodes.push(new Node(400, 200, "Long text incoming: this can be expanded somehow", 1));
	edges.push(new Edge(nodes[1], nodes[2], "A"));
	edges.push(new Edge(nodes[0], nodes[1], "B"));
	edges.push(new Edge(nodes[0], nodes[2], "C"));
}

function draw() {
	background(240);
	edges.forEach(function(element) {
		element.adapt();
		shower(element);
	});
	nodes.forEach(shower);
}

function mouseClicked() {
	nodes.forEach(function(node) {
		node.click(mouseX, mouseY);
	});
}

function windowRezised() {
	resizeCanvas(window.innerWidth, window.innerHeight);
}
