class Tile {
  // Coordinates
  x: number;
  y: number;

  // Walls
  north: number;
  east: number;
  south: number;
  west: number;

  constructor(
    x: number,
    y: number,
    north: number = 0,
    east: number = 0,
    south: number = 0,
    west: number = 0
  ) {
    this.x = x;
    this.y = y;
    this.north = north;
    this.east = east;
    this.south = south;
    this.west = west;
  }
}

function generateMap(xMax: number, yMax: number) {
  // Creating array to represent map-grid
  let map = []; 
  for (let y = 0; y < yMax; y++) {
    let row = [];
    for (let x = 0; x < xMax; x++) {
      const tile = new Tile(x, y);
      row.push(tile);
    }
    map.push(row);
  }
  return map;
}
