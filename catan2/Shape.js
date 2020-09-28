class Shape {
	
	constructor(canvas, center) {
		
		if (new.target === Shape) {
			throw new TypeError("Cannot instantiate abstract class of type Shape");
		}
		
		this.canvas = canvas;
		this.center = center;
		
	}
	
	get_shape() {
		return this.canvas.getContext("2d");
	}
	
	fill(color="#000000") {
		var ctx = this.get_shape();
		ctx.fillStyle = color;
		ctx.fill();
	}
	
	stroke(color="#000000", lineWidth=1) {
		var ctx = this.get_shape();
		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth
		ctx.stroke();
	}
	
}