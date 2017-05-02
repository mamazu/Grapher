nodes = []

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	nodes.push(new Node(200, 200, "This is sparta"));
}

function draw(){
	background(240);
	for (var i = nodes.length - 1; i >= 0; i--) {
		nodes[i].show();
	}
}

function windowRezised(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}