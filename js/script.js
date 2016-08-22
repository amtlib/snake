var grid;
var columns, rows;
var cell_size = 10;

function setup(){
    createCanvas(800, 600);

    //columns and rows in grid
    columns = floor(width/cell_size);
    rows = floor(height/cell_size);

    grid = new Array(columns);
    for(var i = 0;i< columns; i++){
        grid[i] = new Array(rows);
    }
    for(var i = 0;i<columns;i++){
        for(var j = 0;j<rows;j++){
            grid[i][j] = new Cell(i, j, cell_size);
        }
    }
}
function draw(){
    background('#212121');

    for(var i = 0;i< columns;i++){
        for(var j = 0;j < rows;j++){
            grid[i][j].draw_me();
        }

    }
}
