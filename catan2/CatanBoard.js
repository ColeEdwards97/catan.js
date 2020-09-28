class CatanBoard extends HexGrid {
	
	constructor(canvas, w, h, r, size) {
		
		super(canvas, w, h, size);
		this.r = r;
		this.board = this.generate();
	}
	
	
	generate() {
		
		// canvas size
		canvas.width = Math.floor((this.w - 1) * (this.size * Math.sqrt(3)));
		canvas.height = Math.floor((this.h - 1) * (this.size * 3/2));
		
		var hex_center;
		var x; var y;
		var hex;
		for (var j = 0; j < this.h; j++) {
			for (var i = 0; i < this.w; i++) {
				x = this.size * Math.sqrt(3) * (i + 0.5 * (j & 1));
				y = this.size * (3/2 * j);
				hex_center = new Point(x, y);
				hex = new Hexagon(canvas, hex_center, this.size);
				// tile = new CatanTile(hex, q, r, resource);
				hex.fill("#3498DB");
				hex.stroke();
				this.tiles[j][i] = tile;
			}
		}
		
		return this.tiles;
		//return this.get_spiral(this.r, this.tiles[this.center.y][this.center.x]);
		
	}
	
	
	pixel_to_hex(x, y) {
		
		var hex;
		for (var j = 0; j < this.h; j++) { 
			for (var i = 0; i < this.w; i++) {
				hex = this.tiles[j][i];
				if (hex.is_in_hex(x, y)) {
					return hex;
				}
			}
		}
		return null;
		
	}
	
	onmousemove(e) {
		
		canvas.getContext("2d").clearRect(0,0,800,800);
		board.generate();
		var x = e.offsetX;
		var y = e.offsetY;
		
		/* HIGHLIGHT TEST */
		var hex = board.pixel_to_hex(x, y);
		if (hex !== null && hex !== undefined) {
			board.highlight_hex(hex);
			board.highlight_edge(hex, x, y);
			board.highlight_corner(hex, x, y);
		}
		
		
	}
	
	highlight_hex(hex) {
		hex.fill("#ff0000");
		return;
	}
	
	highlight_corner(hex, x, y) {
		var corner = hex.nearest_corner(x, y);
		//var settlement = new Settlement(canvas, corner, 20);
		//settlement.fill("#00ff00");
		var city = new City(canvas, corner, 20);
		city.fill("#00ff00");
		return;
	}
	
	highlight_edge(hex, x, y) {
		var edge_idx = hex.nearest_edge(x,y);
		var edge_pt = hex.get_midpoints()[edge_idx];
		var rect = new Rectangle(canvas, edge_pt, 40, 10, hex.edge_angle(edge_idx));
		rect.fill("#0000ff");
		return;
	}
	
	
}