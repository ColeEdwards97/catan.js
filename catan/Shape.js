class Shape {
	constructor(canvas, center) {
		this.canvas = canvas;
		this.center = center;
		this.points = points;
	}
	
	
	
	
	get_shape() {
		return this.canvas.getContext("2d");		
	}
	
	fill(style) {
		var context = this.get_shape();
		context.fillStyle = style;
		context.fill();
	}
	
	outline(style) {
		var context = this.get_shape();
		context.strokeStyle = style;
		context.stroke();
	}
	
	
	
}