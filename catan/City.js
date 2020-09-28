class City extends Shape {
	constructor(canvas, center, size) {
		super(canvas, center);
		this.size = size;
	}
	
	
	get_shape() {
		
		var context = this.canvas.getContext("2d");
		var cx = this.center.x;
		var cy = this.center.y;
		var w = this.size/2;
		var h = -this.size/2; // negative to account for vertical flip (canvas has (0,0) at top left)
		var h2 = -this.size/2;
		var h3 = -this.size/2 * 0.4;
		
		context.save();
		
		context.beginPath();
		context.moveTo(cx - 2*w, cy + h + h2);
		context.lineTo(cx - w, cy + h + h2 + h3);
		context.lineTo(cx, cy + h + h2);
		context.lineTo(cx, cy + h);
		context.lineTo(cx + 2*w, cy + h);
		context.lineTo(cx + 2*w, cy - h);
		context.lineTo(cx - 2*w, cy - h);
		context.lineTo(cx - 2*w, cy + h + h2);
		context.closePath();
		
		context.restore();
		
		return context;
		
	}
	
	

}