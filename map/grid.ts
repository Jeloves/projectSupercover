import { propCoordinates, buildProps } from "./map_data";

type Nullable<T> = T | null | undefined;

class Tile {
  // Coordinates
  x: number;
  y: number;

  // Walls
  north: number;
  east: number;
  south: number;
  west: number;

  // Objects (Unit || Prop)
  object: Nullable<object> = null;

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
  // Creating a 2D array to represent the map
  let map = [];
  for (let y = 1; y <= yMax; y++) {
    let row = [];
    for (let x = 1; x <= xMax; x++) {
      const tile = new Tile(x, y);
      row.push(tile);
    }
    map.push(row);
  }
  console.log(map);
  return map;
}

const map = generateMap(20, 20);
buildProps(map, propCoordinates);
console.log(map);
console.log("done");

export { Tile };
