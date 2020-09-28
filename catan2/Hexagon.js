class Hexagon extends Shape {
	
	constructor(canvas, center, size, rot=0) {
		super(canvas, center);
		this.size = size;
		this.rot = rot;
		this.points = this.generate_points();
	}
	
	get_shape() {
		
		var ctx = this.canvas.getContext("2d");
		
		ctx.save();
		ctx.rotate(this.rot * Math.PI / 180);
		
		ctx.beginPath();
		ctx.moveTo(this.points[0].x, this.points[0].y);
		for (var i = 0; i < 6; i++) {
			ctx.lineTo(this.points[(i+1) % 6].x, this.points[(i+1) % 6].y);
		}
		ctx.closePath();
		
		ctx.restore();
		
		return ctx;
		
	}
	
	generate_points() {
		var p = new Array(6);
		for (var i = 0; i < 6; i++) {
			p[i] = this.hexagonal_point(i);
		}
		return p;
	}
	
	hexagonal_point(i) {
		var angle_deg = 60 * i - 30;
		var angle_rad = Math.PI / 180 * angle_deg;
		return new Point(this.center.x + this.size * Math.cos(angle_rad), this.center.y + this.size * Math.sin(angle_rad));
	}
	
	is_in_hex(x, y) {
		
		// Normalize
		x = (x - this.center.x) / this.size;
		y = (y - this.center.y) / this.size;
		
		// Check length (squared) against inner and outer radius
		var l2 = x * x + y * y;
		if (l2 > 1.0) return false;
		if (l2 < 0.75) return true; // (sqrt(3)/2)^2 = 3/4
		
		// Check against borders
		var px = x * (2/Math.sqrt(3)); // 2/sqrt(3)
		if (px > 1.0 || px < -1.0) return false;
		
		var py = 0.5 * px + y;
		if (py > 1.0 || py < -1.0) return false;
		
		if (px - py > 1.0 || px - py < -1.0) return false;
		
		return true;
		
	}
	
	nearest_corner(x, y) {
		
		var point;
		var dist;
		var min_idx;
		var min_dist = Number.MAX_VALUE;
		for (var i = 0; i < 6; i++) {
			point = this.points[i];
			dist = Math.pow((x - point.x), 2) + Math.pow((y - point.y), 2);
			if (dist < min_dist) {
				min_dist = dist;
				min_idx = i;
			}
		}
		return this.points[min_idx];
		
	}
	
	get_midpoints() {
		var midpoints = new Array(6);
		for (var i = 0; i < 6; i++) {
			midpoints[i] = this.points[i].midpoint(this.points[(i+1) % 6]);
		}
		return midpoints;
	}
	
	nearest_edge(x, y) {
		
		var midpoints = new Array(6);
		var dist;
		var min_idx;
		var min_dist = Number.MAX_VALUE;
		for (var i = 0; i < 6; i++) {
			midpoints[i] = this.points[i].midpoint(this.points[(i+1) % 6]);
			dist = Math.pow((x - midpoints[i].x), 2) + Math.pow((y - midpoints[i].y), 2);
			if (dist < min_dist) { 
				min_dist = dist;
				min_idx = i;
			}
		}
		return min_idx;
	}
	
	edge_angle(i) {
		var angles = [0, 60, -60, 0, 60, -60];
		return angles[i];
	}

}