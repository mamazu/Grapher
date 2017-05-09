var view, clipboard;
var nodes = []
var edges = []
var edgeToBuild;
var fc = 0;

//User defined
function shower(element) {
	element.show();
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
function preload() {
	view = new View();
	clipboard = new Clipboard();
	edgeToBuild = new Edge();
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	textSize(16);
	view.reset();
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
	if (view.debug) {
		pos = "Mouse: (" + mouseX + "|" + mouseY + ")\nGlobal: (" + view.getMouse().x + "|" + view.getMouse().y + ")";
		text(pos, 10, height - 18 * 2 - 10);
	}
	view.showMessage();
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
function mousePressed() {
	nodes.forEach(function(node) {
		var clicked = node.click();
		if (view.mode == 'connect' && clicked) {
			if (!edgeToBuild.from) {
				edgeToBuild.from = node;
			}
			if (node != edgeToBuild.from) {
				edgeToBuild.to = node;
				edgeToBuild.recalculate();

				// Resetting the active status
				edgeToBuild.to.isActive = false;
				edgeToBuild.from.isActive = false;

				edges.push(edgeToBuild);
				edgeToBuild = new Edge();
			}
		}
	});
}

function mouseMoved() {}

function mouseDragged(evt) {
	if (!evt.ctrlKey) {
		view.x += evt.movementX;
		view.y += evt.movementY;
	} else {
		for (var i = 0; i < nodes.length; i++) {
			var node = nodes[i];
			if (!node.isActive) continue;
			node.textBox.pos.add(createVector(evt.movementX, evt.movementY));
		}
	}
	edges.forEach((edge) => edge.recalculate());
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
		view.reset();
	else if (evt.key == "o" || evt.key == "O") {
		view.middle = !view.middle;
	} else if (evt.key == "d" || evt.key == "d") {
		view.debug = !view.debug;
	} else if (evt.key == "m" || evt.key == "M") {
		var pos = view.getMouse();
		nodes.push(new Node(pos.x, pos.y, "New node"));
	} else if (evt.keyCode == ESCAPE) {
		nodes.forEach((node) => {
			node.isActive = false;
		});
		clipboard.reset();
		view.resetMode();
	} else if (evt.key == 'A' || evt.key == 'a') {
		if (evt.ctrlKey)
			nodes.forEach((node) => {
				node.isActive = true;
			});
	} else if (evt.key == 'C' || evt.key == 'c') {
		if (evt.ctrlKey) clipboard.cp();
		else view.toggleMode();
	} else if (evt.key == 'V' || evt.key == 'v') {
		if (evt.ctrlKey) clipboard.paste();
	}

}

// Window actions
function windowRezised() {
	resizeCanvas(window.innerWidth, window.innerHeight);
}
