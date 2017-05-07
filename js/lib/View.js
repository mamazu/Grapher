width = window.innerWidth, height = window.innerHeight;

function View(){
  this.reset();
}

View.prototype.reset = function () {
  this.x = width / 2;
  this.y = height / 2;
  this.scale = 1;
  this.gridSize = 20;
  this.middle = true;
  this.debug = true;
};

View.prototype.getMouse = function() {
  return createVector(mouseX - view.x, mouseY - view.y).mult(1 / view.scale);
}
