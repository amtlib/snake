var columns, rows;
var cell_size = 10;
var snake;
var food;

var game_speed = 12;

function setup() {
    createCanvas(800, 600);
    //columns and rows in grid
    columns = floor(width / cell_size);
    rows = floor(height / cell_size);
    init();
}

function init() {
    game_speed = 12;
    snake = new Snake(new Cell(floor(random(columns)), floor(random(rows)), cell_size));
    food = new Food();
    food.generate();
}

function draw() {
    frameRate(game_speed);
    background('#fff');
    snake.draw_me();
    food.draw_me();
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        snake.change_direction_to(0);
    }
    else if (keyCode == LEFT_ARROW) {
        snake.change_direction_to(1);
    }
    else if (keyCode == DOWN_ARROW) {
        snake.change_direction_to(2);
    }
    else if (keyCode == RIGHT_ARROW) {
        snake.change_direction_to(3);
    }
}
