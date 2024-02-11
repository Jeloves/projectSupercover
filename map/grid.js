"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
var map_data_1 = require("./map_data");
var Tile = /** @class */ (function () {
    function Tile(x, y, north, east, south, west) {
        if (north === void 0) { north = 0; }
        if (east === void 0) { east = 0; }
        if (south === void 0) { south = 0; }
        if (west === void 0) { west = 0; }
        // Objects (Unit || Prop)
        this.object = null;
        this.x = x;
        this.y = y;
        this.north = north;
        this.east = east;
        this.south = south;
        this.west = west;
    }
    return Tile;
}());
exports.Tile = Tile;
function generateMap(xMax, yMax) {
    // Creating a 2D array to represent the map
    var map = [];
    for (var y = 1; y <= yMax; y++) {
        var row = [];
        for (var x = 1; x <= xMax; x++) {
            var tile = new Tile(x, y);
            row.push(tile);
        }
        map.push(row);
    }
    console.log(map);
    return map;
}
var map = generateMap(20, 20);
(0, map_data_1.buildProps)(map, map_data_1.propCoordinates);
console.log(map);
console.log("done");
