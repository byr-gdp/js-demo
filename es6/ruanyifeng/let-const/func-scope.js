// 是否使用严格模式会导致输出不一样
'use strict'

function f() {console.log('i am outside');}

(function() {
    if(false) {
        function f() {console.log('i am inside');}
    }

    f();
}());
