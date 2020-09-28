class CatanTile {
	constructor(hex, q, r, resource) {
		this.hex = hex;
		this.q = q;
		this.r = r;
		this.resource = resource;
		this.rarity = 0;
		this.hex.fill(resource.color);
		this.hex.outline();
	}


	populate() {
		
		this.hex.fill(this.resource.color);
		this.hex.outline();
		var color = "black";
		
		if (this.rarity != 0) {
			if (this.rarity == 8 || this.rarity == 6) { color = "red"; }
			else { color = "black"; }
			new Text(this.hex.canvas, this.hex.center.x, this.hex.center.y, ''+this.rarity, "30px Comic Sans MS", color, "center", "middle");
		}
		
	}

}