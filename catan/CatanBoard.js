class CatanBoard extends HexGrid {	
	constructor(canvas, w, h, radius, size, resources, rarities) {
		super(canvas, w, h, size);
		this.radius = radius;
		this.resources = resources;
		this.rarities = rarities;
		this.board = this.generate();
	}
	
	
	generate() {
		
		for (var j = 0; j < this.h; j++) {
			for (var i = 0; i < this.w; i++) {
				
				// screen size
				var x = this.size * Math.sqrt(3) * (i + 0.5 * (j & 1));
				var y = this.size * (3/2 * j);
				
				// fill with ocean
				var resource = this.resources[0];
				
				// create hexagon & tile
				var hex = new Hexagon(this.canvas, new Point2D(x, y), this.size);				
				var tile = new CatanTile(hex, i, j, resource);
				
				this.tiles[j][i] = tile;
			}
		}
		
		// get tiles that belong to the game board
		var board = this.get_game_board();		
		
		// populate with resources
		board = this.populate(board, this.resources, this.rarities);
		
		return board
		
	}

	
	
	populate(board, resources, rarities) {
		
		var hasDesert = false;
		var tile = null;
		var rarity = 0;
		
		// remove ocean
		resources.splice(0, 1);
		
		// loop through tiles
		for (var i = 0; i < board.length; i++) {
			
			// get a resource from the list
			var idx = Math.floor(Math.random() * resources.length);
			var resource = resources[idx];
			
			var idx2 = Math.floor(Math.random() * rarities.length);
			var rarity = rarities[idx2];

			if (resource.name === "desert") {
				if (!hasDesert) {
					hasDesert = true;
				} else {
					while (resource.name === "desert") {
						idx = Math.floor(Math.random() * resources.length);
						resource = resources[idx];
					}
				}
				board[i].rarity = 0;
			} else {
				board[i].rarity = rarity;
				rarities.splice(idx2, 1);
			}
			
			board[i].resource = resource;
			
			// populate the tile
			board[i].populate();

			// remove the resource
			resources.splice(idx, 1);
			
		}
		
		return board;
		
	}
	
	
	get_game_board() {
		return this.get_spiral(this.radius, this.tiles[this.center.y][this.center.x]);
	}	
	
}