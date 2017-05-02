function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
}

function draw(){
	background(240);
	color(0,0,0);
	text("test", 100, 100)
	line(0, 0, 50, 50);
}

function windowRezised(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}