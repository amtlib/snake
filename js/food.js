function Food(){
    this.position;
    this.food_color = 'blue';

    this.generate = function(){
        var temp = new Cell(floor(random(columns)), floor(random(rows)), cell_size);
        for(var i = 0;i< snake.snake_body.length; i++){
            if(snake.snake_body[i].x == temp.x && snake.snake_body.y == temp.y){ // if food will spawn on snake body
                this.generate(); //generate another one
            }
        }
        this.position = temp; // food is in diffrent position than snake - everything is ok
    };
    this.draw_me = function(){
        this.position.draw_me(this.food_color);
    };
}
