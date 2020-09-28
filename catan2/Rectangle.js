class Rectangle extends Shape {

	constructor(canvas, center, h, w, rot=0) {
		super(canvas, center);
		this.h = h;
		this.w = w;
		this.rot = rot;
	}
	
	get_shape() {
		var ctx = this.canvas.getContext("2d");
		ctx.save();
		ctx.translate(this.center.x, this.center.y);
		ctx.rotate(this.rot * Math.PI / 180);
		ctx.beginPath();
		ctx.rect(-this.w/2, -this.h/2, this.w, this.h);
		ctx.closePath();
		ctx.restore();
		return ctx;
	}

}