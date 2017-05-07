function Clipboard() {
	this.position = createVector(0, 0);
	this.nodes = []
};

Clipboard.prototype.cp = function (){
	nodes.forEach((node) => {
		if (node.isActive){
			this.nodes.push(node);
		}
	})
	this.position = view.getMouse();
};

Clipboard.prototype.paste = function () {
	var offset = p5.Vector.sub(view.getMouse(), this.position);
  this.nodes.forEach((node) => {
    var newPos = p5.Vector.add(node.getPos(), offset);
    nodes.push(new Node(newPos.x, newPos.y, node.textBox.text, node.priority));
  });
};
