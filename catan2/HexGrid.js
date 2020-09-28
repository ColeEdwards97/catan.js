class HexGrid {	

// TODO: re-work to call tiles hexes
// TODO: re-work to include hex ids (q, r) in this class.. NOT in catan tile
	constructor(canvas, w, h, size) {
		
		this.canvas = canvas;
		this.w = w;
		this.h = h;
		this.size = size;
		this.center = new Point(Math.floor(w/2), Math.floor(h/2));
		this.tiles = new Array(h);
		for (var i = 0; i < this.tiles.length; i++) { this.tiles[i] = new Array(w); }
		
		this.directions = [
			[[+1,  0], [ 0, -1], [-1, -1], 
			[-1,  0], [-1, +1], [ 0, +1]],
			[[+1,  0], [+1, -1], [ 0, -1], 
			[-1,  0], [ 0, +1], [+1, +1]]
		];
		
	}
	
	generate() {
		
		var x;
		var y;
		var hex;
		for (var j = 0; j < this.h; j++) {
			for (var i = 0; i < this.w; i++) {
				x = this.size * Math.sqrt(3) * (i + 0.5 * (j & 1));
				y = this.size * (3/2 * j);
				hex = new Hexagon(this.canvas, new Point(x, y), this.size);
				this.tiles[j][i] = hex;
			}
		}
		
	}
	
	get_spiral(radius, center) {
		
		var spiral = [center];
		
		for (var r = 1; r < radius; r++) {
			spiral = spiral.concat(this.get_ring(r, center));
		}
		
		return spiral;
		
	}
	
	get_ring(radius, center) {
		
		var ring = new Array();
		var hex = this.get_distant_neighbor(center, 4, radius);
		
		for (var dir = 0; dir < 6; dir++) {		
			for (var r = 0; r < radius; r++) {
				ring.push(hex);
				hex = this.get_neighbor(hex, dir);
			}
		}
		
		return ring;
		
	}
	
	get_distant_neighbor(hex, dir, radius) {
		for (var r = 0; r < radius; r++) {
			hex = this.get_neighbor(hex, dir);
		}
		return hex;
	}
	
	get_neighbor(hex, dir) {
		var partity = hex.r & 1;
		var oddr_dir = this.directions[partity][dir];
		var r = hex.r + oddr_dir[1];
		var q = hex.q + oddr_dir[0];
		return this.tiles[r][q];
	}
	
}