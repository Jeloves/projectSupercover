var Tile = /** @class */ (function () {
    function Tile(x, y, north, east, south, west) {
        if (north === void 0) { north = 0; }
        if (east === void 0) { east = 0; }
        if (south === void 0) { south = 0; }
        if (west === void 0) { west = 0; }
        this.x = x;
        this.y = y;
        this.north = north;
        this.east = east;
        this.south = south;
        this.west = west;
    }
    return Tile;
}());
function generateMap(xMax, yMax) {
    // Creating array to represent map-grid
    var grid = [];
    for (var y = 0; y < yMax; y++) {
        var row = [];
        for (var x = 0; x < xMax; x++) {
            var tile = new Tile(x, y);
            row.push(tile);
        }
        grid.push(row);
    }
    return grid;
}
