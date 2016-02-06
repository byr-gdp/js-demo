'use strict'

var a = [];

for(let i = 0; i < 10; i++) {
//for(var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}

a[6]();

for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i)
    }, 100)
}

for(var i = 0; i < 10; i++) {
    setTimeout((function(j) {
        console.log('second:' + j)
    })(i), 100)
}
