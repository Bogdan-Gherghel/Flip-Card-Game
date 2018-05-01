var memory_array = ['a.jpg','a.jpg', 'b.jpg','b.jpg', 'c.jpg', 'c.jpg','d.jpg','d.jpg', 'e.jpg','e.jpg', 'f.jpg','f.jpg', 'g.jpg','g.jpg', 'h.jpg','h.jpg', 'i.jpg','i.jpg', 'j.jpg', 'j.jpg','k.jpg','k.jpg', 'l.jpg','l.jpg'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function () {
    var i = this.length, j, temp;
    while (--i > 0){
        j - Math.floor(Math.random () * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newBoard (){
    tiles_flipped = 0;
    var output = '';
    memory_array.memory_tile_shuffle ();
    for(var i = 0;i < memory_array.length; i++) {
        output += '< div id="tile_'+i+'" onclick = "memoryFlipTile(this,\''+memory_array [i]+'\')"></div>';   
    } 
    document.getElementById('game_board').innerHTML = output;
}

function memoryFlipTile (tile,val){
    if(tile.innerHTML == "" && memory_values.lenght < 2) {
        tile.style.background = '#FFF';
        tile.innerHTML = '<img src="' + val + '.jpg"/>';
        if(memory_values.lenght == 0) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        }else if (memory_values.length == 1) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
            if (memory_values [0] == memory_values [1]) {
                tiles_flipped += 2;
            }
        }
    }
}

