var tmp = new Date();

function f() {
    console.log(tmp);
    if(false) {
        // 变量提升，导致输出 undefined
        //var tmp = 'hello world';

        //
        tmp = 'hello world';
    }
}

f();
