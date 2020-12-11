class HashTable{
    constructor(size = 53){
        this.keyMap = new Array(size);
    }
    _hash(key){
        var total = 0;
        var SOME_PRIME_NUM = 31;
        for(var i =0;i<Math.min(100,key.length);i++){
            var char = key[i];
            var charVal = char.charCodeAt() - 96;
            total = (total*SOME_PRIME_NUM+charVal)%this.keyMap.length;
        }
        return total;
    }
    set(key,value){
       var keyIndex = this._hash(key);
       if(!this.keyMap[keyIndex]){
           this.keyMap[keyIndex] = [];
       }
       this.keyMap[keyIndex].push([key,value]);
    }
    get(key){
        var index = this._hash(key);
        for(var i = 0;i<this.keyMap[index].length;i++){
            if(this.keyMap[index][i][0]===key){
                return this.keyMap[index][i][1];
            }
        }
        return undefined;
    }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
