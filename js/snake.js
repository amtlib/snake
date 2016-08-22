function Snake(){
    this.snake_body = [];
    this.snake_color = 'red';
    this.direction = 0; //0 - up, 1 - right, 2 - bottom, 3 - left

    for(var i = 0;i< arguments.length; i++){
        this.snake_body.push(arguments[i]);
    }
    this.snake_body.push(new Cell(this.snake_body[0].x, this.snake_body[0].y+1));

    this.update = function(){
        var accual_head = this.snake_body[0];
        this.snake_body.pop(); //delete last element of snake
        if(this.direction == 0){ //if snake goes up
            this.snake_body.unshift(new Cell(accual_head.x, accual_head.y-1, cell_size));
        } else if(this.direction == 1){ //if snake goes right
            this.snake_body.unshift(new Cell(accual_head.x-1, accual_head.y, cell_size));
        } else if(this.direction == 2){ //if snake goes down
            this.snake_body.unshift(new Cell(accual_head.x, accual_head.y+1, cell_size));
        } else if(this.direction == 3){ //if snake goes left
            this.snake_body.unshift(new Cell(accual_head.x+1, accual_head.y, cell_size));
        }

        accual_head = this.snake_body[0];

        if(accual_head.x > columns || accual_head.x < 0 || accual_head.y > rows || accual_head.y < 0){
            setup();
        }
    }
    this.change_direction_to = function(direction){
        //when snake moves up - it can not move down
        //when snake moves down - it can not move up
        //when snake moves left - it can not move right
        //when snake moves right - it can not move left
        if(!(direction == 0 && this.direction == 2) && !(direction == 2 && this.direction == 0) && !(direction == 1 && this.direction == 3) && !(direction == 3 && this.direction == 1)){
            this.direction = direction;
        }
    }
    this.draw_me = function(){
        this.update();
        for(var i = 0;i<this.snake_body.length; i++){
            this.snake_body[i].draw_me(this.snake_color);
        }
    }
}
