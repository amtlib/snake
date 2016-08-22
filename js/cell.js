function Cell(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.draw_me = function (color) {
        fill('#fff');
        if (color) {
            fill(color);
        }
        noStroke();
        rect(this.x * this.size, this.y * this.size, this.size, this.size);
    };
}
