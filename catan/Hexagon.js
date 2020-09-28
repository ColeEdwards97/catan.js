class Hexagon {
	constructor(canvas, center, size) {
		this.canvas = canvas;
		this.center = center;
		this.size = size;
		this.points = new Array(6);
		this.generate();
	}
	
	// methods
	
	generate() {
		
		for (var i = 0; i < 6; i++) {
			this.points[i] = this.hexagonal_point(i)
		}

	}
	
	
	fill(color) {
		var context = this.get_shape();
		context.fillStyle = color;
		context.fill();
	}
	
	
	outline() {
		var context = this.get_shape();
		context.stroke(); 
	}
	
	
	get_shape() {
		
		var context = this.canvas.getContext("2d");
		
		context.beginPath();
		context.moveTo(this.points[0].x, this.points[0].y);
		for (var i = 0; i < 6; i++) {
			context.lineTo(this.points[(i+1) % 6].x, this.points[(i+1) % 6].y);
		}
		context.closePath();
		
		return context;
		
	}
	
	
	hexagonal_point(i) {
		var angle_deg = 60 * i - 30;
		var angle_rad = Math.PI / 180 * angle_deg;
		return new Point2D(this.center.x + this.size * Math.cos(angle_rad), this.center.y + this.size * Math.sin(angle_rad));
	}
	
	
}