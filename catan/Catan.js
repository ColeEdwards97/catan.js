class Catan {
	constructor() {
		this.resources = [
			new Resource("ocean", "#3498DB"),
			new Resource("desert", "#F5CBA7"),
			new Resource("brick", "#D35400"),
			new Resource("brick", "#D35400"),
			new Resource("brick", "#D35400"),
			new Resource("rock", "#85929E"),
			new Resource("rock", "#85929E"),
			new Resource("rock", "#85929E"),
			new Resource("wood", "#145A32"),
			new Resource("wood", "#145A32"),
			new Resource("wood", "#145A32"),
			new Resource("wood", "#145A32"),
			new Resource("sheep", "#27AE60"),
			new Resource("sheep", "#27AE60"),
			new Resource("sheep", "#27AE60"),
			new Resource("sheep", "#27AE60"),
			new Resource("wheat", "#F7DC6F"),
			new Resource("wheat", "#F7DC6F"),
			new Resource("wheat", "#F7DC6F"),
			new Resource("wheat", "#F7DC6F")
		];
		
		this.rarity = [2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12];
		
		this.canvas = document.getElementById("board");
		this.board = this.create_board(3);
		
	}
	
	
	create_board(radius) {
		
		var size = 50;
		var tiles_w = 9;
		var tiles_h = 9;
		
		this.canvas.width = Math.floor((tiles_w - 1) * (size * Math.sqrt(3)));
		this.canvas.height = Math.floor((tiles_h - 1) * (size * 3/2));
		
		return new CatanBoard(this.canvas, tiles_w, tiles_h, radius, size, this.resources, this.rarity);
		
	}
	
	
}