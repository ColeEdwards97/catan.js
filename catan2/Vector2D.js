class Vector2D {

	constructor(p1, p2) {
		this.p1 = p1;
		this.p2 = p2;
		this.x = p2.x - p1.x;
		this.y = p2.y - p1.y;
	}
	
	dot(v2) {
		return (this.x * v2.x) + (this.y * v2.y);
	}
	
	mag() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
	
	unit() {
		var mag = this.mag();
		this.x = this.x / mag;
		this.y = this.y / mag;
		return this;
	}

}