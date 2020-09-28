class Settlement extends Shape {
	
	constructor(canvas, center, size) {
		super(canvas, center);
		this.size = size;
	}
	
	get_shape() {
		
		var context = this.canvas.getContext("2d");
		var cx = this.center.x;
		var cy = this.center.y;
		var w = this.size/2;
		var h = -this.size/2 * 0.7;
		var h2 = -this.size * 0.6;
		
		context.save();
		
		context.beginPath();
		context.moveTo(cx - w, cy + h);
		context.lineTo(cx, cy + h2);
		context.lineTo(cx + w, cy + h);
		context.lineTo(cx + w, cy - h);
		context.lineTo(cx - w, cy - h);
		context.lineTo(cx - w, cy + h);
		context.closePath();
		
		context.restore();
		
		return context;
		
	}
	
	

}