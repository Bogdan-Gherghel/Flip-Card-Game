var memory_array = ['a.jpg','a.jpg', 'b.jpg','b.jpg', 'c.jpg', 'c.jpg','d.jpg','d.jpg', 'e.jpg','e.jpg', 'f.jpg','f.jpg', 'g.jpg','g.jpg', 'h.jpg','h.jpg', 'i.jpg','i.jpg', 'j.jpg', 'j.jpg','k.jpg','k.jpg', 'l.jpg','l.jpg'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function () {
    vari i = this.length, j, temp;
    while (--i > 0){
        j - Math.floor(Math.random () * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}