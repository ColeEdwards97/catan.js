class Point {
	
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	distance_to(p2) {
		return Math.sqrt(Math.pow((p2.x-this.x), 2) + Math.pow((p2.y-this.y), 2));
	}
	
	midpoint(p2) {
		return new Point((p2.x + this.x)/2, (p2.y + this.y)/2);
	}
	
}