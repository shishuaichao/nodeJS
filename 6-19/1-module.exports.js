"use strict";
// console.log('hello world')

// console.log('1')

// console.log('2')
// console.log('3')
// console.log('4')
console.log('launch')
var greet = {
    counter:function(){
        var n = 0;
        return {
            count:function(){console.log(n++)},
            reset:function(){console.log(n=0)}
        }
    }
}
module.exports = greet;