nodes = []
edges = []

function shower(element, index, array){
	element.show();
}

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	nodes.push(new Node(200, 200, "This is sparta"));
	nodes.push(new Node(400, 400, "This is brocolli"));
	edges.push(new Edge(nodes[0], nodes[1]));
}

function draw(){
	background(240);
	nodes.forEach(shower)
	edges.forEach(shower);
}

function windowRezised(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}