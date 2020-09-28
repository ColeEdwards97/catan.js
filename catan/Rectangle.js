class Rectangle {
	constructor(canvas, center, w, h, rot) {
		this.canvas = canvas;
		this.center = center;
		this.w = w;
		this.h = h;
		this.rot = rot;
	}
	
	get_shape() {
		var context = this.canvas.getContext("2d");
		context.save();
		context.rotate(this.rot * Math.PI / 180);
		context.rect(this.center.x - this.w/2, this.center.y + this.h/2, this.w, this.h);
		context.restore();
		return context;
	}
	
	fill(color) {
		var context = this.get_shape();
		context.fillStyle = color;
		context.fill();
	}
	
	outline(color) {
		var context = this.get_shape();
		context.strokeStyle = color;
		context.stroke();
	}
	
}