class Circle extends Shape {

	constructor(canvas, center, size) {
		
		super(canvas,center);
		this.size = size;
		
	}
	
	get_shape() {
		var ctx = this.canvas.getContext("2d");
		ctx.beginPath();
		ctx.arc(this.center.x, this.center.y, this.size, 0, 2*Math.PI);
		ctx.closePath();
		return ctx;
	}

}