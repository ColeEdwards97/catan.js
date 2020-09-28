class Text {
	constructor(canvas, x, y, text, font, color, textAlign, textBaseline) {
		this.canvas = canvas;
		this.x = x;
		this.y = y;
		this.text = text;
		this.font = font;
		this.color = color;
		this.textAlign = textAlign;
		this.textBaseline = textBaseline;
		this.draw();
	}
	
	draw() {
		var context = this.canvas.getContext("2d");
		context.font = this.font;
		context.fillStyle = this.color;
		context.textAlign = this.textAlign;
		context.textBaseline = this.textBaseline;
		context.fillText(this.text, this.x, this.y);
	}

}